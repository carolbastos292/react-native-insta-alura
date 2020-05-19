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
  const [stateComments, setComment] = useState(comments);
  const addComment = () => {
    //console.warn(contentFieldInput);
    contentInput.clear();
    const newComment = {
      date: Date.now(),
      text: contentFieldInput,
      userName: 'Ane',
    };

    setComment([...stateComments, newComment]);
  };
  let contentInput;
  let contentFieldInput = '';
  return (
    <Fragment>
      <FlatList
        data={stateComments}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <Text>{item.text}</Text>}
      />
      <View style={styles.viewComment}>
        <TextInput
          ref={textInput => contentInput = textInput}
          onChangeText={(text) => (contentFieldInput = text)}
          style={{flex: 1}}
          placeholder={'Deixe seu comentário...'}
        />
        <TouchableOpacity onPress={addComment}>
          <Image
            style={styles.imgSend}
            source={require('../../res/img/send.png')}
          />
        </TouchableOpacity>
      </View>
    </Fragment>
  );
};

export default Comment;
