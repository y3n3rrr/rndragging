import React from 'react'
import {Platform} from 'react-native'
import {StackNavigator, DrawerNavigator } from 'react-navigation'

import Home from '../screens/Home'
//import Game from '../screens/Game'

//import {DrawerButton} from '../components/Header'

// const LeftHeaderButton = ({navigation})=>{
//     if(Platform.OS==="android"){
//         return <DrawerButton  onPress={()=>navigation.navigate('DrawerOpen')} />
//     }
//     return null
// }
export const HomePage = StackNavigator({
    Home:{
        screen:Home,
        navigationOptions:(props)=>({
            title:'Ana Sayfa',
            //sheaderLeft: <LeftHeaderButton {...props} />
        })
    }
    // DetailsScreen:{
    //     screen:Details,
    //     navigationOptions: ({navigation}) => ({
    //         title: `${navigation.state.params.name.first} ${navigation.state.params.name.last}'s Profile'`,
    //         //title:'Details'
    //       }),
      
    //},
})
// export const GamePage = StackNavigator({
//     Scr1:{
//         screen:Game,
//         navigationOptions:(props)=>({
//             title:'Oyun Basladi..',
//             headerLeft: <LeftHeaderButton {...props}/>
//         })
//     }
// })

export const Drawers = DrawerNavigator({
    HomePage:{
        screen:HomePage,
        navigationOptions:{
            drawerLabel:'Ana Sayfa'
            //drawerIcon:({tintColor})=><Icon name='ios-list' size={25} color={tintColor} />
        }
    }
    // GamePage:{
    //     screen:GamePage,
    //     navigationOptions:{
    //         drawerLabel:'Oyun basladi..'
    //         // drawerIcon:({tintColor})=><Icon name='ios-add' size={25} color={tintColor} />
    //     }
    // },
},
{
    
        drawerOptions: {
            showLabel: true,
            showIcon: true,
            upperCaseLabel: false,
            scrollEnabled: false,
        }
    
    })