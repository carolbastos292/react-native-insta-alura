import {Dimensions, StyleSheet} from 'react-native';

const dimension = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  comment: {
    marginLeft: 20,
    borderWidth: 2,
  },
  image: {
    width: dimension,
    height: dimension,
  },
  like: {
    width: 25,
    height: 25,
    marginLeft: 10,
  },
  viewLike: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  description: {
    margin: 10,
  },
  textLike: {
    marginLeft: 10,
  },
});

export default styles;
