import React from 'react'
import { StyleSheet, View } from 'react-native'
import colours from './src/styles/colours'

import StatusBar from './src/components/StatusBar'
import TopNavBar from './src/components/TopNavBar/TopNavBar'
import Header from './src/components/Header/Header'
import Counter from './src/components/Counter/Counter'
import Body from './src/components/Body/Body'
import BottomNavBar from './src/components/BottomNavBar/BottomNavBar'

import { avatar, photos } from './assets/data.json'

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'column', 
    backgroundColor: colours["WHITE"]
  }
})

const App = function () {
  try {
    return (
      <View style={styles.container}>
        <StatusBar/>
        <TopNavBar/>
        <Header 
          avatarPath={avatar}
          userName="Hoang Minh Tu"
          occupation="Web Developer"
        />
        <Counter
          photosNum={photos.length}
          followersNum="15k"
          followingNum="605"
        />
        <Body 
          data={photos}
        />
        <BottomNavBar/>
      </View>
    )
  } catch (err) {
    console.error(err)
  }
}

export default App


