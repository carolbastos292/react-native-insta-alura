import React, {Fragment, useState, useEffect} from 'react';
import {AppRegistry, ScrollView, FlatList} from 'react-native';
import MyHeader from './src/components/Header/Header';
import ImageUser from './src/components/Image/Image';
import Comment from './src/components/Comment/Comment';
import getImages from './src/api/feed';
/* const info = [
  {id: 1, user: 'Ane Caroline'},
  {id: 2, user: 'Carol Bastos'},
]; */

const App = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    getImages(setImages);
  }, []);
  return (
    <ScrollView>
      <FlatList
        data={images}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <Fragment>
            <MyHeader nameUser={item.userName} urlImage={item.userURL} />
            <ImageUser
              urlImage={item.url}
              description={item.description}
              quantityLikes={item.likes}
            />
            <Comment comments={item.comentarios} />
          </Fragment>
        )}
      />
    </ScrollView>
  );
};
export default App;

AppRegistry.registerComponent('header', () => App);
