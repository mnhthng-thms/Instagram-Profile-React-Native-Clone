import React from 'react'
import { StyleSheet, View } from 'react-native'
import colours from '../../styles/colours'

import ContentCounter from './ContentCounter'

const styles = StyleSheet.create({
  container: {
    flex: 2, 
    flexDirection: 'row', 
    marginVertical: 1+'%',
    marginHorizontal: 2+'%',
    justifyContent: 'space-between', 
    alignContent: 'center'
  }
})

const Counter = (props) => {
  return (
    <View style={styles.container}>
      <ContentCounter content="Photos" num={props.photosNum} />
      <ContentCounter content="Followers" num={props.followersNum} />
      <ContentCounter content="Following" num={props.followingNum} />
    </View>
  )
}

export default Counter