//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, ImageBackground } from 'react-native';
import {PrimaryButton} from '../components/utils'

// create a component
class Home extends Component {
    constructor(props){
        super(props)
    }
    handleRowPress=()=>{
        this.props.navigation.navigate('GamePage')
    }

    componentWillMount(){
        if(this.props.navigation.state.params && this.props.navigation.state.params.refresh){
            this.props.navigation.setParams({refresh:false})
            this.props.navigation.navigate('GamePage')
        }
    }
  //source={require('../assets/img/gazibackground.jpg')}
    render() {
        return (
            <ImageBackground style={styles.mainConatinerStyle} imageStyle={{resizeMode:'cover'}} >
                <View style={styles.mainConatinerStyle}>
                    <View style={styles.appInfo}>
                        <Text>
                            Gorsel uygulama egitim v1.01
                        </Text>
                        <Text>
                            Uygulama demo aşamasındadır..
                        </Text>
                    </View>
                    <View style={styles.logoContainer}>
                        <Image style={styles.gaziLogo} source={require('../assets/img/gazi_logo.png')} />
                        </View>
                        <View style={styles.introText}>
                        <Text>
                            Dr. Figen Uzun
                        </Text>
                        <Text>
                            Doktora, Mobil Uygulama. 21 Aralık 2017
                        </Text>
                        </View>
                    <View style={styles.startButton}>
                    <Button
                    title="Start Game"
                    color="#841584"
                    accessibilityLabel="Start Game"
                    onPress={()=>this.handleRowPress()} />
                    </View>
                </View>
                </ImageBackground>
        );
    }
}

const styles=StyleSheet.create({
    mainConatinerStyle:{
        flex: 1
    },
    appInfo:{
        alignItems: 'center'
    },
    startButton: {
        alignItems:'stretch',
        position: 'absolute',
        width:'100%',
        bottom:0,
        left:0,
    },
    logoContainer: {
        alignItems:'center',
        justifyContent:'center'
    },
    gaziLogo: {
        marginTop:15,
        width:250,
        height:250
    },
    introText:{
        marginTop:40,
        alignItems:'center',
        justifyContent:'center'
    }
})

//make this component available to the app
export default Home;
