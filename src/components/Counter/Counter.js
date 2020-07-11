import React from 'react'
import { StyleSheet, View } from 'react-native'
import colours from '../../styles/colours'

const styles = StyleSheet.create({
  container: {
    flex: 2, 
    flexDirection: 'column', 
    justifyContent: 'space-between', 
    alignContent: 'center'
  }
})

const Counter = () => {
  return (
    <View style={styles.container}>
    </View>
  )
}

export default Counter