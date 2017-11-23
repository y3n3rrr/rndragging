//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image,PanResponder, Animated } from 'react-native';

// create a component
class Garbage extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          showDraggable: true,
          dropAreaValues: null,
          pan: new Animated.ValueXY(),
          opacity: new Animated.Value(5)
        };
      }

      componentWillMount() {
        this._val = { x:0, y:0 }
        this.state.pan.addListener((value) => this._val = value);
    
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (e, gesture) => true,
            onPanResponderGrant: (e, gesture) => {
              this.state.pan.setOffset({
                x: this._val.x,
                y:this._val.y
              })
              this.state.pan.setValue({ x:0, y:0 })
            },
            onPanResponderMove: Animated.event([ null, { dx: this.state.pan.x, dy: this.state.pan.y } ]),
            onPanResponderRelease: (e, gesture) => {
                alert("movex:" + gesture.moveX
            + "\nmovey:" + gesture.moveY)
              if (this.isDropArea(gesture)) {
                Animated.timing(this.state.opacity, {
                  toValue: 0,
                  duration: 1000
                }).start(() =>
                  this.setState({
                    showDraggable: false
                  })
                );
              } 
            }
          })
      }
      
      isDropArea(gesture) {
        return gesture.moveY < 200;
      }

      
    render() {
        return (
            <View style={{ width: "20%", alignItems: "center" }}>
            {this.renderDraggable()}
          </View>
            // <View style={styles.container}>
            //     <Image style={styles.vodkaImage} source={require('../assets/img/vodka.png')} />
            // </View>
        );
    }
    renderDraggable() {
        const panStyle = {
          transform: this.state.pan.getTranslateTransform()
        }
        if (this.state.showDraggable) {
          return (
            <View style={{ position: "absolute" }}>
            <Animated.Image style={[panStyle, styles.vodkaImage, {opacity:this.state.opacity}]}
            {...this.panResponder.panHandlers} 
            source={require('../assets/img/vodka.png')}>
       </Animated.Image>
            
            </View>
          );
        }
      }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    vodkaImage:{
        width:25,
        height:55
    }
});

//make this component available to the app
export default Garbage;
