import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { 
  Button, 
  StyleSheet, 
  ScrollView, 
  Text, 
  View, 
  Image, 
  TouchableOpacity, 
  Alert, 
  ActionSheetIOS 
} from 'react-native'
import { Feather, AntDesign, Entypo, Ionicons } from '@expo/vector-icons'

import { normaliseSize as normalise, STATUS_BAR_HEIGHT } from './src/utils/metadata'
import colours from './src/styles/colours'

import TopNavBar from './src/components/TopNavBar/TopNavBar'
import Header from './src/components/Header/Header'
import Counter from './src/components/Counter/Counter'
import Body from './src/components/Body/Body'
import BottomNavBar from './src/components/BottomNavBar/BottomNavBar'

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'column', 
    marginTop: STATUS_BAR_HEIGHT,
    backgroundColor: colours["WHITE"]
  }
})

const App = function () {
  try {
    return (
      <View style={styles.container}>
        <TopNavBar/>
        <Header 
          avatarPath="https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg"
          userName="Hoang Minh Tu"
          occupation="Web Developer"
        />
        <Counter/>
        <Body/>
        <BottomNavBar/>
      </View>
    )
  } catch (err) {
    console.error(err)
  }
}

export default App


