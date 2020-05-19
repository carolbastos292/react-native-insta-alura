import React, {Fragment, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {likedImage, imageLike} from '../../api/likes';

const ImageUser = ({urlImage, description, quantityLikes}) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(quantityLikes);

  const clickedLiked = () => {
    const [newStateLiked, qnt] = likedImage(liked, likes);
    setLikes(qnt);
    setLiked(newStateLiked);
  };
  return (
    <Fragment>
      <Image source={{uri: urlImage}} style={styles.image} />
      <Text>{description}</Text>
      <View style={styles.viewLike}>
        <TouchableOpacity onPress={clickedLiked}>
          <Image source={imageLike(liked)} style={styles.like} />
        </TouchableOpacity>
        <Text>curtidas {likes}</Text>
      </View>
    </Fragment>
  );
};

export default ImageUser;
