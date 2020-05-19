import {Dimensions, StyleSheet} from 'react-native';

const dimension = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  image: {
    width: dimension,
    height: dimension,
  },
  like: {
    width: 40,
    height: 40,
    margin: 5,
  },
  viewLike: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
