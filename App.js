/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  PanResponder, Animated
} from 'react-native';


import Garbage from './src/components/Garbage'

export default class App extends Component {
  constructor(props){
    super(props)
    // this.state = {
    //   showDraggable: true,
    //   dropAreaValues: null,
    //   pan: new Animated.ValueXY(),
    //   opacity: new Animated.Value(5)
    // };
  }
 
  setDropZoneValues(event){     
    
      this.setState({
          dropZoneValues1 : event.nativeEvent.layout
      });
    }
  render() {
    return (
      <ImageBackground style={styles.container} imageStyle={{resizeMode:'cover'}} source={require('./src/assets/img/garden1.jpg')}>
      <View style={styles.garbegecontainer}>
      <View style={styles.vodkacontainer}>
        <Garbage state={this.state}/>
        </View>
        </View>
      <View style={styles.trashcontainer}>
      <View style={styles.dropZone} onLayout={(e)=>this.setDropZoneValues(e)} >
          <Image style={styles.trash} source={require('./src/assets/img/trash.png')} />
        </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  garbegecontainer:{
    flex: 9,
    alignSelf: 'stretch',
    justifyContent:'center'
  },
  vodkacontainer:{
  },
  trashcontainer:{
    flex: 1,
    justifyContent:'flex-end',
    alignItems:'flex-end',
    marginBottom:'15%'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  dropZone:{
    backgroundColor:'blue',
    width:75
    
  },
  trash: {
    width: 75,
    height: 75
  }
});
