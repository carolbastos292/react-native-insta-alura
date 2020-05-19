const getImages = async (callback) => {
  const imagesHTTP = await fetch('http://10.0.3.2:3030/feed');
  const imagesJson = await imagesHTTP.json();
  callback(imagesJson);
};

export default getImages;
