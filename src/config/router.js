import React from 'react'
import {Platform, DeviceEventEmitter} from 'react-native'
import {StackNavigator, DrawerNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import Home from '../screens/Home'
import Game from '../screens/Game'
import CardsScreen from '../screens/CardsScreen'

import {DrawerButton} from '../components/Header'


export const HomePage = StackNavigator({
    HomeScreen:{
        screen:Home,
        navigationOptions:(props)=>({
            title:'Ana Sayfa'
        })
    },
    GameScreen:{
        screen:Game,
        navigationOptions:(props)=>({
            title:'Oyun Basladi..'
        })
    },
    CardScreen:{
        screen:CardsScreen,
        navigationOptions:(props)=>({
            title:'Oyun Basladi..'
        })
    }
})

export const Drawers = DrawerNavigator({
    HomePage:{
        screen:Home,
        navigationOptions:{
            drawerLabel:'Ana Sayfa',
            drawerIcon:({tintColor})=><Icon name='ios-list' size={25} color={tintColor} />
        }
    },
    GamePage:{
        screen:Game,
        navigationOptions:{
            drawerLabel:'Temizlik Oyunu',
            drawerIcon:({tintColor})=><Icon name='ios-add' size={25} color={tintColor} />
        }
    },
    CardsPage:{
        screen:CardsScreen,
        navigationOptions:{
            drawerLabel:'Cards Game',
            drawerIcon:({tintColor})=><Icon name='ios-add' size={25} color={tintColor} />
        }
    },
},
{
    
        drawerOptions: {
            showLabel: true,
            showIcon: true,
            upperCaseLabel: false,
            scrollEnabled: false,
        }
    
    })