import {StyleSheet, Dimensions, Platform} from 'react-native'

import colors from '../../config/colors'

const window = Dimensions.get('window')
const styles = StyleSheet.create({
    primaryButtonContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:20
    },
    primaryButton:{
        borderColor:colors.border,
        borderWidth:StyleSheet.hairlineWidth,
        backgroundColor:colors.link,
    },
    primaryButtonText:{
        color:'#fff',
        paddingVertical:15,
        paddingHorizontal:15,
        fontSize:14,
        fontWeight:'500'
    },
    textInputContainer:{
        marginLeft:20,
        borderBottomColor:colors.border,
        borderBottomWidth:Platform.OS==='ios'?StyleSheet.hairlineWidth:0,
        marginTop:15,
    },
    input:{
        height:40,
        width:window.width
    }
});

export default styles