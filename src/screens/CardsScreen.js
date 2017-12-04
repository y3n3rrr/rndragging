//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {Cards} from '../components/Cards'

// create a component
class CardsScreen extends Component {
    constructor(props){
        super(props)
    }


    render() {
        return (
                    <Cards />
        );
    }
}

const styles=StyleSheet.create({
    startButton: {
        alignItems:'stretch',
        position: 'absolute',
        width:'100%',
        bottom:0,
        left:0,
        }
})

//make this component available to the app
export default CardsScreen;
