import React from 'react'
import { StyleSheet, View, FlatList, Text } from 'react-native'
import colours from '../../styles/colours'

import Photo from './Photo'

const styles = StyleSheet.create({
  container: {
    flex: 8, 
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const Body = (props) => {
  return (
    <View style={styles.container}>
      <FlatList 
        numColumns={3}
        data={props.data}
        renderItem={({ item }) => (<Photo path={item.url}/>) }
        keyExtractor={( item ) => item.id }
      />
    </View>
  )
}

export default Body