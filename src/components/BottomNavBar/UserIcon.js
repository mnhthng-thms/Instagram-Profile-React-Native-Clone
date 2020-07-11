import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import colours from '../../styles/colours'

const UserIcon = () => {
  return (
    <TouchableOpacity
      style={{
        alignSelf: 'flex-end',
        marginRight: 1.618+'%',
        marginVertical: 0.5+'%',
      }}
    >
      <Feather 
        name="user" 
        size={36} 
        color={colours["PURPLE_1"]} 
      />
    </TouchableOpacity>
  )
}

export default UserIcon