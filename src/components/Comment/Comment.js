import React, {Fragment, useState} from 'react';
import {Image, Text, TouchableOpacity, View, FlatList} from 'react-native';
import styles from './styles';

const Comment = ({comments}) => {
  return (
    <FlatList
      data={comments}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => <Text>{item.text}</Text>}
    />
  );
};

export default Comment;
