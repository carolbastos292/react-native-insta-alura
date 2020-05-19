import React, {Fragment} from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles.js';

const MyHeader = ({nameUser, urlImage}) => {
  return (
    <View style={styles.header}>
      <Image source={{uri: urlImage}} style={styles.imageUser} />
      <Text>{nameUser}</Text>
    </View>
  );
};

export default MyHeader;
