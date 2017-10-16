import React,{ Component } from 'react'
import {Image,Text, View,StyleSheet} from 'react-native'
import Container from '../components/container/Container'
import Logo from '../components/logo/Logo'
import CardWithActions from '../components/Card/CardWithActions'
import InputWithRightButton from '../components/Input/InputWithRightButton'

class LoginScreen extends Component {
  render(){
    return(
      <Container>
        <Logo version="1.1" />
        <CardWithActions>
          <InputWithRightButton/>
        </CardWithActions>
      </Container>
    )
  }
}

export default LoginScreen