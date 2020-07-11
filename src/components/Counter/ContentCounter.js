import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import colours from '../../styles/colours'
import { normaliseSize as normalise } from '../../utils/metadata'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  numDiv: {
    flex: 1, 
    paddingTop: 1+'%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  numTxt: {
    // fontFamily: 'ProximaNova',
    fontSize: normalise(20),
    fontWeight: '800',
    color: colours["MIDNIGHT_EXPRESS"]
  },
  contentDiv: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  contentTxt: {
    fontSize: normalise(14),
    fontWeight: '500',
    color: colours["BLUE_ROYAL"]
  }
})

const ContentCounter = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.numDiv}>
        <Text style={styles.numTxt}> {props.num} </Text>
      </View>
      <View style={styles.contentDiv}>
        <Text style={styles.contentTxt}> {props.content} </Text>
      </View>
    </View>
  )
}

export default ContentCounter