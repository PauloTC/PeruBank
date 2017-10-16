import React from 'react'
import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  separator: {
    width: StyleSheet.hairlineWidth * 2
  }
})

const CardActionSeparator = (props) => {
  const {color , height } = props
  return (
      <View style={[ styles.separator, { backgroundColor: color || 'black', height:height || 40} ]} />
    )

}

export default CardActionSeparator