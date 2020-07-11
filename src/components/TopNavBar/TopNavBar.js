import React from 'react'
import { View, StyleSheet } from 'react-native'
import BackButton from './BackButton'
import ThreeDotsButton from './ThreeDotsButton'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', 
    alignContent: 'center',
    justifyContent: 'space-between',
  }
})

const TopNavBar = () => {
  return (
    <View style={styles.container}>
      <BackButton/>
      <ThreeDotsButton/>
    </View>
  )
}

export default TopNavBar
