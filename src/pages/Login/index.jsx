/* eslint-disable prettier/prettier */
import React, { useCallback, useEffect, useState } from 'react';
// import { loadProducts } from '../../../src/utils/load-products';
import { Button } from '../../components/Button';
import { Products } from '../../components/Products';
import { TextInput } from '../../components/TextInput';
import './styles.css';

const loadProducts = [
  {
    id: 1,
    title: 'Vestido',
    body: 'body 1',
    cover: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.guller.com.br%2Fvestidos%2F1479-vestido-curto-decote-quadrado-bot%25C3%25A3o-cintura-empire-estilo-sexy-club-b%25C3%25A1sica-moda-ver%25C3%25A3o-feminina.html&psig=AOvVaw0cWzS4CEoVg6dp8Jpg4VMi&ust=1651415130963000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCMCau_X-u_cCFQAAAAAdAAAAABAD',
  },
  {
    id: 2,
    title: 'title 2',
    body: 'body 2',
    cover: 'img/img2.png',
  },
  {
    id: 3,
    title: 'title 3',
    body: 'body 3',
    cover: 'img/img3.png',
  },
  {
    id: 4,
    title: 'title 1',
    body: 'body 1',
    cover: 'img/img1.png',
  },
  {
    id: 2,
    title: 'title 2',
    body: 'body 2',
    cover: 'img/img2.png',
  },
  {
    id: 3,
    title: 'title 3',
    body: 'body 3',
    cover: 'img/img3.png',
  },
  {
    id: 1,
    title: 'title 1',
    body: 'body 1',
    cover: 'img/img1.png',
  },
  {
    id: 2,
    title: 'title 2',
    body: 'body 2',
    cover: 'img/img2.png',
  },
  {
    id: 3,
    title: 'title 3',
    body: 'body 3',
    cover: 'img/img3.png',
  },
]

export const Login = () => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [productsPerPage] = useState(3);
  const [searchValue, setSearchValue] = useState('');

  const noMoreProducts = page + productsPerPage >= allProducts.length;

  const filteredProducts = searchValue
    ? allProducts.filter((product) => {
        return product.title.toLowerCase().includes(searchValue.toLowerCase());
      })
    : products;

  const handleLoadProducts = useCallback(async (page, productsPerPage) => {
    const productsAndPhotos = loadProducts;

    setProducts(productsAndPhotos.slice(page, productsPerPage));
    setAllProducts(productsAndPhotos);
  }, []);

  useEffect(() => {
    handleLoadProducts(0, productsPerPage);
  }, [handleLoadProducts, productsPerPage]);

  const loadMoreProducts = () => {
    const nextPage = page + productsPerPage;
    const nextProducts = allProducts.slice(nextPage, nextPage + productsPerPage);
    products.push(...nextProducts);

    setProducts(products);
    setPage(nextPage);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  return (
    <section className="container">
      <div className="search__container">
        {!!searchValue && <h1>Search Value: {searchValue}</h1>}

        <TextInput searchValue={searchValue} handleChange={handleChange} />
      </div>

      {filteredProducts.length > 0 && <Products products={filteredProducts} />}

      {filteredProducts.length === 0 && <p>Não existem posts! </p>}

    <div className="btn-width">
      <div className="button__container">
        {!searchValue && <Button text="Load More Products" onClick={loadMoreProducts} disabled={noMoreProducts} />}
      </div>
    </div>
    </section>
  );
};

