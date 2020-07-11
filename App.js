import React from 'react'
import { StyleSheet, View } from 'react-native'
import colours from './src/styles/colours'

import ProfilePage from './src/pages/ProfilePage'

import { avatar, photos } from './assets/data.json'

const App = function () {
  try {
    return (
      <ProfilePage
        avatarPath={avatar}
        username="Hoang Minh Tu"
        occupation="Web Developer"
        photosNum={photos.length}
        followersNum="15k"
        followingNum="605"
        fetchPhotosFrom={photos} 
      />
    )
  } catch (err) {
    console.error(err)
  }
}

export default App


