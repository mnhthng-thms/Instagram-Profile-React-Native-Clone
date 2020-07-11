import React from 'react'
import { View } from 'react-native'
import { STATUS_BAR_HEIGHT } from '../utils/metadata'
import colours from '../styles/colours'

const StatusBar = () => {
  return (
    <View 
      style={{
        height: STATUS_BAR_HEIGHT,
        backgroundColor: colours["PURPLE_1"],
      }}
    >
    </View>
  )
}

export default StatusBar