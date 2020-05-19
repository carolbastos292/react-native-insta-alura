const imageLike = (liked) => {
  if (liked) {
    return require('../res/img/s2-checked.png');
  } else {
    return require('../res/img/s2.png');
  }
};

const likedImage = (liked, likes) => {
  let qnt = likes;
  if (liked) {
    qnt--;
  } else {
    qnt++;
  }
  return [!liked, qnt];
};

export {imageLike, likedImage};
