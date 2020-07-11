import React from 'react'
import { StyleSheet, View } from 'react-native'
import colours from '../styles/colours'

import StatusBar from '../components/StatusBar'
import TopNavBar from '../components/TopNavBar/TopNavBar'
import Header from '../components/Header/Header'
import Counter from '../components/Counter/Counter'
import Body from '../components/Body/Body'
import BottomNavBar from '../components/BottomNavBar/BottomNavBar'

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'column', 
    backgroundColor: colours["WHITE"]
  }
})

const ProfilePage = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar/>
      <TopNavBar/>
      <Header 
        avatarPath={props.avatarPath}
        userName={props.username}
        occupation={props.occupation}
      />
      <Counter
        photosNum={props.photosNum}
        followersNum={props.followersNum}
        followingNum={props.followingNum}
      />
      <Body 
        data={props.fetchPhotosFrom}
      />
      <BottomNavBar/>
    </View>
  )
}

export default ProfilePage