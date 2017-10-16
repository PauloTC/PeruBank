import React from 'react'
import { 
  Dimensions, 
  StyleSheet, 
  View, 
  Text,
  TouchableOpacity,
  Image

} from 'react-native'
import CardActionSeparator from '../Separator/CardActionSeparator'



const { width, height } = Dimensions.get('window')

const RADIUS = 10

const styles = StyleSheet.create({
  container: {
    height: height * 0.4,
    width: width * 0.9,
    borderRadius: RADIUS,
    marginBottom: height * 0.05,
  },
  cardContent: {
    height : height * 0.4 * 0.8,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderTopLeftRadius: RADIUS,
    borderTopRightRadius: RADIUS,
    alignItems:'center',
  },
  cardActions: {
    height : height * 0.4 * 0.2,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderBottomLeftRadius: RADIUS,
    borderBottomRightRadius: RADIUS,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'

  },
  actionButton: {

  },
  actionIcon: {
    height: height * 0.4 * 0.2 *0.5,
    width: 30,
  }
})


export default class CardWithActions extends React.Component {

  handlePress = () => {
    alert('button pressed')
  }

  render(){
    const { children } = this.props
    return(
     <View style={styles.container} >
       <View style={styles.cardContent} >
         {children}
       </View>
       <View style={styles.cardActions} >
         <TouchableOpacity 
             onPress={this.handlePress}
             style={styles.actionButton} 
           >
           <Image
             style={styles.actionIcon}
             resizeMode="contain"
             source={require('./img/ic_registro_login.png')}
           />
         </TouchableOpacity>
         <CardActionSeparator color='white' height={20} />
         <TouchableOpacity 
             onPress={this.handlePress}
             style={styles.actionButton} 
           >
           <Image
             style={styles.actionIcon}
             resizeMode="contain"
             source={require('./img/ic_call_login.png')}
           />
         </TouchableOpacity>
         <CardActionSeparator color='white' height={20} />
         <TouchableOpacity 
             onPress={this.handlePress}
             style={styles.actionButton} 
           >
           <Image
             style={styles.actionIcon}
             resizeMode="contain"
             source={require('./img/ic_map_login.png')}
           />
         </TouchableOpacity>
       </View>
     </View>
    )
  }
} 