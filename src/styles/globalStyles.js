import { StyleSheet } from 'react-native'
import colourMap from './colours'
import { normaliseSize, STATUS_BAR_HEIGHT } from '../utils/metadata'

const styles = StyleSheet.create({
  container: {
    /* which means that this global container will cover the whole screen */
    flex: 1, 
    flexDirection: 'column',                             
    marginTop: STATUS_BAR_HEIGHT,
    backgroundColor: colourMap["WHITE"],
  },
  topNavBarContainer: {
    flex: 1
  },
  countPhotos: {
    flex: 1,
    flexDirection: 'column',
    alignItems: "center"
  },
  countFollowers: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
  },
  countFollowing: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },

  //Images container
  images: {
    margin: 1.2,
  },
  footerIcons: {
    marginTop: 5,
    marginLeft: 38,
    marginRight: 38,
  },
  // line: {
  //   height: 1,
  //   backgroundColor: 'lightgray',
  //   flexDirection: 'row',
  // }
})

export default styles