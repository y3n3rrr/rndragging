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
  Button ,
  PanResponder, Animated,  Dimensions
} from 'react-native';


import Garbage from './src/components/Garbage'

export class locationInfo {
  width;
  height;
  fx;
  fy;
  px;
  py;
}


const url = 'http://www.noiseaddicts.com/free-samples-mp3/?id=4279'; 

var Sound = require('react-native-sound');

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      dropAreaValues: new locationInfo
    };
  }

  playTrack = () => {
    const track = new Sound('imars.mp3', null, (e) => {
      if (e) {
        console.log('error loading track:', e)
      } else {
        track.play()
      }
    })
  }
  componentDidMount(){
    
    
  }
  setDropZoneValues(event){
    this.refs.mycomponent.measure( (fx, fy, width, height, px, py) => {
      console.log('Component width is: ' + width)
      console.log('Component height is: ' + height)
      console.log('X offset to frame: ' + fx)
      console.log('Y offset to frame: ' + fy)
      console.log('X offset to page: ' + px)
      console.log('Y offset to page: ' + py)
      this.setState({
        dropAreaValues : {width, height,fx,fy,px,py}
      });

  })
      
    }
 
  render() {
    return (
      <ImageBackground style={styles.container} imageStyle={{resizeMode:'cover'}} source={require('./src/assets/img/garden1.jpg')}>
      <Button title="play me" onPress={this.playTrack} />
      <View style={styles.garbegecontainer}>
      <View style={styles.vodkacontainer}>
        <Garbage playsound={this.playTrack} dropAreaValues={this.state.dropAreaValues}/>
        </View>
        </View>
      <View style={styles.trashcontainer}>
      {/* onLayout={(e)=>this.setDropZoneValues(e)} */}
      <View style={styles.dropZone} ref="mycomponent" onLayout={(e)=>this.setDropZoneValues(e)}  collapsable= {false} >
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
    width:75
    
  },
  trash: {
    width: 75,
    resizeMode:'cover',
    backgroundColor:'yellow',
    backgroundColor: 'black',
    
    height: 75
  }
});
