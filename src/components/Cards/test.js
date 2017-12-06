//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, DeviceEventEmitter } from 'react-native';
var mSensorManager = require('NativeModules').SensorManager
mSensorManager.startAccelerometer(100); // To start the accelerometer with a minimum delay of 100ms between events.
DeviceEventEmitter.addListener('Accelerometer', function (data) {
  /**
  * data.x
  * data.y
  * data.z
  **/
});
mSensorManager.stopAccelerometer();
// create a component
class test extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>MyClass</Text>
            </View>
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
export default test;

  