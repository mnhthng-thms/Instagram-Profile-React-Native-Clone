import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import colours from '../../styles/colours'
import { normaliseSize as normalise } from '../../utils/metadata'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  }, 
  txt: {
    // fontFamily: 'ProximaNova',
    fontSize: normalise(24),
    fontWeight: 'bold',
    color: colours["MIDNIGHT_EXPRESS"]
  }
})

const UserName = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>
        {props.value}
      </Text>
    </View>
  )
}

export default UserName