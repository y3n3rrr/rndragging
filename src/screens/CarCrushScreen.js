//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {CarCrush} from '../components/CarCrush'

// create a component
class CarCrushScreen extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
        <CarCrush />
        );
    }
}

//make this component available to the app
export default CarCrushScreen;
