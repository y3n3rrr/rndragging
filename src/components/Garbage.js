//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image,PanResponder, Animated } from 'react-native';
// create a component
class Garbage extends Component {
    constructor(props) {
        super(props);
        this.imageUrl=this.props.imageUrl;
        this.state = {
          showDraggable: true,
          dropAreaValues: null,
          pan: new Animated.ValueXY(),
          opacity: new Animated.Value(5)
        };
      }
      shouldComponentUpdate(nextProps, nextState){
        this.state.dropAreaValues=nextProps.dropAreaValues;
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
            //     alert("movex:" + gesture.moveX
            // + "\nmovey:" + gesture.moveY)
              if (this.isDropZone(gesture)) {
                Animated.timing(this.state.opacity, {
                  toValue: 0,
                  duration: 1000
                }).start(() =>{
                  this.props.playApplause();
                  this.setState({
                    showDraggable: false
                  })
                });
              }
              else{
                Animated.spring(            
                  this.state.pan,         
                  {toValue:{x:0,y:0}} 
              ).start(() =>{
                this.props.playBoo();
              });
      
              } 
            }
          })
      }
      
      isDropArea(gesture) {
        return gesture.moveY < 200;
      }

      isDropZone(gesture){  
        var dz1 = this.state.dropAreaValues;
        // alert("px:" + dz1.px
        // + "\npy:" + dz1.py)
        return (gesture.moveY > dz1.py && gesture.moveX > dz1.px)
      }
    render() {
        return (
            <View style={{ width: "20%", alignItems: "center" }}>
            {this.renderDraggable()}
          </View>
        );
    }
    renderDraggable() {

        const panStyle = {
          transform: this.state.pan.getTranslateTransform()
        }
        if (this.state.showDraggable) {
          return (
            <View style={styles.container}>
            <Animated.Image style={[panStyle, styles[this.props.Name], {opacity:this.state.opacity}]}
            {...this.panResponder.panHandlers} 
            source={this.imageUrl}>
       </Animated.Image>
            
            </View>
          );
        }
      }
}

// define your styles
const styles = StyleSheet.create({
    container: {
      position:"relative",
        justifyContent: 'center',
        alignItems: 'center',
        
        
    },
    Vodka:{
        width:25,
        height:55
    },
    Wine:{
      width:100,
      height:55
  },
});

//make this component available to the app
export default Garbage;
