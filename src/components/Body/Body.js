import React from 'react'
import { StyleSheet, View } from 'react-native'
import colours from '../../styles/colours'

const styles = StyleSheet.create({
  container: {
    flex: 8, 
    flexDirection: 'column', 
    justifyContent: 'flex-start', 
    alignContent: 'stretch',
    backgroundColor: colours["BUNTING"]
  }
})

const Body = () => {
  return (
    <View style={styles.container}>
    </View>
  )
}

export default Body