//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
//import {PrimaryButton} from '../components/utils'
// create a component
class Home extends Component {
    // handleRowPress=(item)=>{
    //     this.props.navigation.navigate('DetailsScreen',item)
    // }
    render() {
        return (
                <View>
                    Welcome Home!
                    {/* <PrimaryButton label='Edit Profile' onPress={()=>null} /> */}
                </View>
        );
    }
}


//make this component available to the app
export default Home;
