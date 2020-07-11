import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { normaliseSize as normalise } from '../../utils/metadata'

const styles = StyleSheet.create({
  avatarContainer: {
    flex: 1, 
    alignItems: 'stretch',
    justifyContent: 'center',    // x-axis alignment
    marginLeft: 2+'%',
    marginRight: 2+'%'
  }, 
  avatar: {
    width: normalise(125),
    height: normalise(125),
    borderRadius: normalise(80)
  }
})

const Avatar = (props) => {
  return (
    <View style={styles.avatarContainer}>
      <Image
        style={styles.avatar}
        source={{
          uri: props.path
        }}
      />
    </View>
  )
}

export default Avatar

/* sample avatar: 
https://image.freepik.com/free-vector/businessman-character-avatar-icon-vector-illustration-design_24877-18271.jpg
*/