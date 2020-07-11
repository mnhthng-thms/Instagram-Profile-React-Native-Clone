import React from 'react'
import { StyleSheet, View } from 'react-native'
import colours from '../../styles/colours'

import Avatar from './Avatar'
import UserName from './UserName'
import Occupation from './Occupation'
import ButtonsContainer from './ButtonsContainer'

// this stylesheet outlines Flexbox containers
const styles = StyleSheet.create({
  header: {
    flex: 3, 
    marginVertical: 2+'%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'stretch'
  }, 
  rightContainer: {
    flex: 1.618,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'flex-start'
  }
})

/* `Header` props: 
    * `avatarPath`
    * `userName`
    * `occupation` 
*/
const Header = (props) => {
  return (
    <View style={styles.header}>
      <Avatar path={props.avatarPath} />
      <View style={styles.rightContainer}>
        <UserName value={props.userName}/>
        <Occupation value={props.occupation}/>
        <ButtonsContainer />
      </View>
    </View>
  )
}

export default Header