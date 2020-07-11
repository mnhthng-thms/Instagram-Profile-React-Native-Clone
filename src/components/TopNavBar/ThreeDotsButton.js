import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { normaliseSize } from '../../utils/metadata'
import colours from '../../styles/colours'

const ThreeDotsButton = () => {
  return (
    <TouchableOpacity
      style={{
        alignSelf: 'center'
      }}
    >
      <Entypo
        name='dots-three-vertical' 
        size={normaliseSize(28)} 
        color={colours["BUNTING"]}
      />
    </TouchableOpacity>
  )
}

export default ThreeDotsButton