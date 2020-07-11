import React from 'react'
import { StyleSheet, Text } from 'react-native'
import colours from '../../styles/colours'
import { normaliseSize as normalise } from '../../utils/metadata'

const styles = {
  flex: 2,
  // justifyContent: 'flex-start', is default value already
  alignItems: 'flex-start',
  marginTop: 5+'%',
  // fontFamily: 'SFProDisplay'
  fontSize: normalise(16), 
  fontWeight: 'bold',
  color: colours["BLUE_HAZE"]
}

const Occupation = (props) => {
  return (
    <Text style={styles}>
      {props.value}
    </Text>
  )
}

export default Occupation