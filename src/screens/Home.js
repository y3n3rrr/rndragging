//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
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
    componentWillReceiveProps(nextProps){
        var asd = "asd"
    }
  
    render() {
        return (
                <View style={styles.mainConatinerStyle}>
                
                    <View style={styles.appInfo}>
                        <Text>
                            Gorsel uygulama egitim v1.01
                        </Text>
                        <Text>
                            Uygulama demo aşamasındadır..
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
        }
})

//make this component available to the app
export default Home;
