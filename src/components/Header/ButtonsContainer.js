import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import colours from '../../styles/colours.js'
import { normaliseSize as normalise } from '../../utils/metadata'

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingVertical: 2+'%'  
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
    flex: 5,
    marginRight: 2+'%',
    width: normalise(70),
    height: normalise(42), 
    backgroundColor: colours["PURPLE_1"],
  },
  followTxt: {
    // fontFamily: "SFProDisplay",
    fontWeight: 'bold',
    fontSize: normalise(14),
    color: colours["WHITE"]
  }, 
  sendBtn: {
    flex: 3,
    marginLeft: 4+'%',
    marginRight: 8+'%',
    width: normalise(38.5),
    height: normalise(42), 
    backgroundColor: colours["BLUE_DEEP_SKY"], 
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