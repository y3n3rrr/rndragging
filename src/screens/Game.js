//import liraries
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


import {Garbage} from '../components/Garbage' 

export class locationInfo {
  width;
  height;
  fx;
  fy;
  px;
  py;
}

var Sound = require('react-native-sound');
const images = {
  garbage: {
      vodka: require("../assets/img/vodka.png"),
      wine: require('../assets/img/wine.png'),
  }
};
class Game extends Component {
  constructor(props){
    super(props)
    this.state = {
      dropAreaValues: new locationInfo
    };
  }

  playApplause = () => {
    const track = new Sound('applause.mp3', null, (e) => {
      if (e) {
        console.log('error loading track:', e)
      } else {
        track.play()
      }
    })
  }
  playBoo = () => {
    const track = new Sound('boo.mp3', null, (e) => {
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
      <ImageBackground style={styles.container} imageStyle={{resizeMode:'cover'}} source={require('../assets/img/garden1.jpg')}>
      <View style={styles.garbegecontainer}>
      <View style={styles.vodkacontainer}>
      <Garbage Name="Wine" imageUrl={images.garbage.wine} playApplause={this.playApplause} playBoo={this.playBoo} dropAreaValues={this.state.dropAreaValues}/>
        <Garbage Name="Vodka" imageUrl={images.garbage.vodka} playApplause={this.playApplause} playBoo={this.playBoo} dropAreaValues={this.state.dropAreaValues}/>
        </View>
        </View>
      <View style={styles.trashcontainer}>
      {/* onLayout={(e)=>this.setDropZoneValues(e)} */}
      <View style={styles.dropZone} ref="mycomponent" onLayout={(e)=>this.setDropZoneValues(e)}  collapsable= {false} >
          <Image style={styles.trash} source={require('../assets/img/trash.png')} />
        </View>
        </View>
      </ImageBackground>
    );
  }
}

// define your styles
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
      
      height: 75
    }
  });
  

//make this component available to the app
export default Game;
