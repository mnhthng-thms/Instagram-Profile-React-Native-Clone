import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import colours from '../../styles/colours.js'
import { normaliseSize as normalise } from '../../utils/metadata'

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'space-evenly',
    alignItems: 'baseline'
  }, 
  btn: {
    borderRadius: normalise(30), 
    shadowColor: colours["LAVENDER_LIGHT"], 
    shadowOpacity: 0.25,
    shadowRadius: 2.50,
    shadowOffset: {                 // iOS only
      width: 1.618,
      height: 1
    },
    elevation: 4,                   // Android only
    /* alignment for text inside */
    justifyContent: 'center',
    alignItems: 'center'
  },
  followBtn: {
    backgroundColor: colours["BUNTING"],
    width: normalise(100),
    height: normalise(61.8), 
  },
  followTxt: {
    // fontFamily: "SFProDisplay",
    fontWeight: '500',
    fontSize: normalise(14),
    color: colours["WHITE"]
  }, 
  sendBtn: {
    backgroundColor: colours["BLUE_DEEP_SKY"], 
    width: normalise(75),
    height: normalise(61.8), 
  }
})

const ButtonsContainer = () => {
  return (
  <View style={styles.container}>
    <TouchableOpacity 
      style={{ ...styles.btn, ...styles.followBtn }} 
    > 
      <Text style={styles.followTxt}>Follow</Text>
    </TouchableOpacity>
    <TouchableOpacity 
      style={{ ...styles.btn, ...styles.sendBtn }} 
    > 
      <Feather 
        name='send'
        size={normalise(20)} 
        color={colours["WHITE"]}
      />
    </TouchableOpacity>
  </View>
  )
}

export default ButtonsContainer