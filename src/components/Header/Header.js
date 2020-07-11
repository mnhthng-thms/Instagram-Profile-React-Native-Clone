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
    backgroundColor: colours["GREY_1"],
    flex: 3, 
    marginTop: 1+'%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'stretch'
  }, 
  rightContainer: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
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