import React from 'react'
import { TouchableOpacity} from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { normaliseSize } from '../../utils/metadata'
import colours from '../../styles/colours'

const BackButton = () => {
  return (
    <TouchableOpacity
      style={{
        paddingLeft: 2+'%',
        alignSelf: 'center'
      }}
    > 
      <AntDesign 
        name='arrowleft' 
        size={normaliseSize(36)} 
        color={colours["BUNTING"]}
      />
    </TouchableOpacity>
  )
}

export default BackButton