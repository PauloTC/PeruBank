import React,{ Component } from 'react'
import {Image,Text, View,StyleSheet} from 'react-native'
import Container from '../components/container/Container'
import Logo from '../components/logo/Logo'
import CardWithActions from '../components/Card/CardWithActions'


class LoginScreen extends Component {
  render(){
    return(
      <Container>
        <Logo version="1.1" />
        <CardWithActions>
          <Text>Renderizarlo</Text>
        </CardWithActions>
      </Container>
    )
  }
}

export default LoginScreen