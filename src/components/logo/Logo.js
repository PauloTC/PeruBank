import React from'react'
import { Dimensions, StyleSheet, View , Text , Image} from 'react-native'


const { width, height } = Dimensions.get('window')

const DEVICE_HEIGHT = height
const DEVICE_WIDTH = width


const styles = StyleSheet.create({
  container:{
    marginTop:15,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  logo:{
    width: DEVICE_WIDTH * 0.55,
    height: DEVICE_HEIGHT * 0.1
  },
  text:{
    color: '#049c3c',
    fontSize: 12,
    marginTop:DEVICE_HEIGHT * 0.1/2,
    marginLeft: 10
  }
})

const Logo = (props) =>(
  <View style={styles.container} >
    <Image
      resizeMode="contain"
      style = {styles.logo}
      source={require('./img/logo.png')} />
    <Text style={styles.text} >v{props.version}</Text>
  </View>
)

export default Logo