//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

// create a component
class Stone extends Component {
    render() {
        return (
            <Animated.Image source={this.props.stoneImgUrl}
            style={{
                height:100,
                width:100,
                resizeMode:'stretch',
                position:'absolute',
                left:this.props.stoneStartposX,
                transform:[
                    {
                        translateY:this.props.moveStoneval
                    }
                ]
            }}
                >
            </Animated.Image>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Stone;
