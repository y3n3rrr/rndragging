//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Animated, Dimensions } from 'react-native';
import { styles } from '../utils/index';

import Stone from './Stone'
// create a component
class CarCrush extends Component {
    constructor(props){
        super(props);
        this.state={
            movePlayerVal:new Animated.Value(40),
            playerSide:'left',
            points:0,

            moveStoneval:new Animated.Value(0),
            stoneStartposX:0,
            stoneSide:'left',
            stoneSpeed:4200,
            gameOver:false
        }
    }
    
    render() {
        return (
            <ImageBackground style={stylesCrush.container} imageStyle={{resizeMode:'cover'}} source={require('../../assets/img/CarGame/road1.jpg')}>
            <View style={stylesCrush.pointsContainer}>
                <View style={stylesCrush.points}>
                    <Text style={stylesCrush.pointsText}>
                    {this.state.points}
                    </Text>
                </View>
                </View>
                
                <Animated.Image 
                source={require('../../assets/img/CarGame/car2.png')}
                imageStyle={{resizeMode:'stretch'}}
                style={{
                    height:90,
                    width:140,
                    position:'absolute',
                    zIndex:1,
                    bottom:50,
                    transform:[
                        {translateX:this.state.movePlayerVal}
                    ]
                }}
                ></Animated.Image>

                <Stone stoneImgUrl={require('../../assets/img/CarGame/stone1.png')} 
                stoneStartposX={this.state.stoneStartposX}
                moveStoneval={this.state.moveStoneval}
                />
                <View style={stylesCrush.sideArrows}>    
                <Text style={stylesCrush.leftArrow} onPress={()=>this.movePlayer('left')}> {'<'}</Text>
                <Text style={stylesCrush.rightArrow} onPress={()=>this.movePlayer('right')}>{'>'}</Text>
                </View>
                
            </ImageBackground>
        );
    }

    movePlayer(direction){
        if(direction=='right'){
            this.setState({
                playerSide:'right'
            })
            Animated.spring(this.state.movePlayerVal,
            {
                toValue:Dimensions.get('window').width - 140,
                tension:120
            }).start();
        }
        else if(direction=='left'){
            this.setState({
                playerSide:'left'
            })
            Animated.spring(this.state.movePlayerVal,
            {
                toValue:40,
                tension:120
            }).start();
        }
    }

    componentDidMount(){
        this.animateStone()
    }
    animateStone(){
        this.state.moveStoneval.setValue(-100);
        var windhowH=Dimensions.get('window').height;

        var r = Math.floor(Math.random() * 2) + 1;

        if(r==2){
            r=40;
            this.setState({
                stoneSide:'left'
            });
        }else{
            r=Dimensions.get('window').width-140;
            //Stone is on right
            this.setState({
                stoneSide:'right'
            })
        }

        this.setState({
            stoneStartposX:r
        })

        //interval to check for collisiion each 50 ms
        var refreshInterfalId;
        refreshInterfalId=setInterval(()=>{
            //collision logic

            if(this.state.moveStoneval._value> windhowH -280
            && this.state.moveStoneval._value<windhowH-180
            && this.state.playerSide == this.state.stoneSide){
                clearInterval(refreshInterfalId);
                this.setState({gameOver:true});
                //this.gameOver();
            }
        },50)

        //increase stone speed
        setInterval(()=>{
            this.setState({stoneSpeed:this.state.stoneSpeed-50})
        },2000)
        //animate stone
        Animated.timing(this.state.moveStoneval,
        {
            toValue:Dimensions.get('window').height,
            duration:this.state.stoneSpeed
        }).start(event=>{
            //if no collision is detected, restart the stone animation
            if(event.finished && this.state.gameOver==false){
                clearInterval(refreshInterfalId);
                this.setState({points:++this.state.points})
                //this.animateStone()
            }

        })
    }
    gameOver() {
        alert('You lost!');
    }
}

// define your styles
const stylesCrush = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    },
    sideArrows:{
        flex:2,
        alignItems:'flex-start',
        flexDirection:'row',
    },
    pointsContainer:{
        flex:1,
        alignItems:'center',
        marginTop:20
    },
    points:{
        width:60,
        height:60,
        backgroundColor:'#fff',
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center'
    },
    pointsText:{
        fontWeight:'bold',
        fontSize:40
    },
    leftArrow:{
        flex:1,
        color:'#fff',
        margin:0,
        fontSize:60,
        fontWeight:'bold',
        textAlign:'left'
    },
    rightArrow:{
        flex:1,
        color:'#fff',
        fontSize:60,
        fontWeight:'bold',
        textAlign:'right'
    }
});

//make this component available to the app
export default CarCrush;
