import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import colours from '../../styles/colours'
import { normaliseSize as normalise } from '../../utils/metadata'

const AddCircleIcon = () => {
  return (
    <TouchableOpacity
      style={{
        alignSelf: 'flex-start',
      }}  
    >
      <Ionicons 
        name="md-add-circle-outline" 
        size={normalise(40)} 
        color={colours["BUNTING"]}
      />
    </TouchableOpacity>
  )
}


export default AddCircleIcon
