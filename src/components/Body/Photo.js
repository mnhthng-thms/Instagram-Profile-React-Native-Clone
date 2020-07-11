import React from 'react'
import { StyleSheet, TouchableOpacity, Image } from 'react-native'
import { SCREEN_WIDTH, normaliseSize } from '../../utils/metadata'

const imageDimension = normaliseSize(SCREEN_WIDTH / 3.25)

const styles = StyleSheet.create({
  container: {
    paddingVertical: 1, 
    paddingHorizontal: 1
  },
  photo: {
    borderRadius: 2,
    width: imageDimension, 
    height: imageDimension
  }
})

const Photo = (props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image 
        style={styles.photo}
        source={{
          uri: props.path
        }}
      />
    </TouchableOpacity>
  )
}

export default Photo