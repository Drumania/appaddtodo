import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {colors} from '../Styles/Colors'

const ButtonCustom = () => {
  return (
    <TouchableOpacity style={styles.button} >
      <Text style={styles.text}>add Todo</Text>
    </TouchableOpacity>
  )
}

export default ButtonCustom

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    width: 100,
    marginRight: 10,
    padding: 10,
    paddingHorizontal: 8,
    fontSize: 20,
    backgroundColor: colors.primary,
    color: colors.black
  },
  text: {
    color: colors.white,
    fontWeight: 'bold'
  },
})