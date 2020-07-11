import React from 'react'
import { StyleSheet, View } from 'react-native'
import colours from '../../styles/colours'

import ContentCounter from './ContentCounter'

const styles = StyleSheet.create({
  container: {
    flex: 2, 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    alignItems: 'center'
  }
})

const Counter = (props) => {
  return (
    <View style={styles.container}>
      <ContentCounter 
        content="Photos" 
        num={props.photosNum} 
      />
      <ContentCounter
        content="Followers" 
        num={props.followersNum} 
      />
      <ContentCounter
        content="Following" 
        num={props.followingNum} 
      />
    </View>
  )
}

export default Counter