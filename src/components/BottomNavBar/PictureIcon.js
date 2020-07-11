import React from 'react'
import { TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import colours from '../../styles/colours'

const PicturesIcon = () => {
  return (
    <TouchableOpacity
      style={{
        alignSelf: 'flex-end',
        marginLeft: 1.618+'%',
        marginVertical: 0.5+'%',
      }}
    >
      <AntDesign 
        name="picture" 
        size={36} 
        color={colours["PURPLE_1"]} 
      />
    </TouchableOpacity>
  )
}

export default PicturesIcon