export const loadProducts = async () => {
  const productsResponses = fetch('https://jsonplaceholder.typicode.com/posts');
  const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

  const [products, photos] = await Promise.all([productsResponses, photosResponse]);

  const productsJson = await products.json();
  const photosJson = await photos.json();

  const productsAndPhotos = productsJson.map((product, index) => {
    return {
      ...product,
      cover: photosJson[index].url,
    };
  });

  return productsAndPhotos;
};
