import React from 'react'
import {TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons' 
import styles from './styles'

const DrawerButton = ({onPress})=>{
    return (
        <TouchableOpacity
         onPress={onPress}
         style={styles.drawerContainer}
        >
            <Icon name="md-menu" style={{paddingLeft:15}} size={25}  />
        </TouchableOpacity>
    )
}

export default DrawerButton