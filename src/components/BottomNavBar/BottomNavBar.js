import React from 'react'
import { StyleSheet, View } from 'react-native'
import colours from '../../styles/colours'

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'column', 
    alignItems: 'flex-end',
    justifyContent: 'space-evenly', 
    paddingTop: 0.618+'%', 
    paddingBottom: 0.618+'%', 
    backgroundColor: colours["LAVENDER_LIGHT"]
  }
})

const BottomNavBar = () => {
  return (
    <View style={styles.container}>
    </View>
  )
}

export default BottomNavBar