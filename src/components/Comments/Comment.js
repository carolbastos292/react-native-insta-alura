import React, {Fragment, useState} from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  TextInput,
} from 'react-native';
import styles from './styles';

const Comment = ({comments}) => {
  return (
    <Fragment>
      <FlatList
        data={comments}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <Text>{item.text}</Text>}
      />
     {/*  <TextInput placeholder={"Deixe seu comentário..."}/> */}
    </Fragment>
  );
};

export default Comment;
