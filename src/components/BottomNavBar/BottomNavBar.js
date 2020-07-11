import React from 'react'
import { StyleSheet, View } from 'react-native'
import colours from '../../styles/colours'

import AddCircleIcon from './AddCircleIcon'
import PictureIcon from './PictureIcon'
import UserIcon from './UserIcon'

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-evenly', 
    paddingTop: 0.618+'%', 
    paddingBottom: 0.618+'%', 
    backgroundColor: colours["LAVENDER_LIGHT"]
  }
})

const BottomNavBar = () => {
  return (
    <View style={styles.container}>
      <PictureIcon/>
      <AddCircleIcon/>
      <UserIcon/>
    </View>
  )
}

export default BottomNavBar