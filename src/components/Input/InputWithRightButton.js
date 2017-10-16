import React , { Component } from 'react'
import { 
  TouchableOpacity, 
  StyleSheet ,
  View, 
  TextInput,
  Text } from 'react-native'
  
// import FontAwesomeIcon from 'react-native-vector-icons/FontAwsome'

const inputHeight = 40

const styles = StyleSheet.create({

  container: {
    width: '90%',
    height:inputHeight,
    marginTop: 20
  },
  inputcontainer: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#BDBDBD',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textInput:{
    flex: 1,
    height: inputHeight,
    color: '#000',
  },
  deleteValueButton:{
    height: 20,
    width: 20,
    backgroundColor: 'green',
  }
})

class InputWithRightButton extends Component{

  state = {
    isFocused: false,
    inputValue: null
  }

  renderDeleteValueButton = () => {

    if (!this.state.inputValue || this.state.inputValue === '' ){
      return null
    }
    return (
      <TouchableOpacity
        style={styles.deleteValueButton}
        onPress = {() => alert('jdsfjdfjdfsjfsj') } >
      </TouchableOpacity>
    )
  }

  render (){
    return(
      <View style={styles.container} >
        <View style={styles.inputcontainer} >
          <TextInput
            style={styles.textInput}
            placeholder = "N° de tarjeta"
            placeholderTextColor = "#000"
            underlineColorAndroid = 'transparent'
            onChangeText = {text => this.setState({ inputValue: text })}
            value ={this.state.inputValue}
          />
          {this.renderDeleteValueButton()}
        </View>
      </View>
    )
  }
}

export default InputWithRightButton