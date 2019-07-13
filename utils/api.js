export const fetchImages = async () => {
  const response = await fetch('https://picsum.photos/list');
  const images = await response.json();

  return images;
};

export const getImageFromId = id => `https://picsum.photos/list/${600}/${600}?image=${id}`;
