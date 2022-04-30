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
    body: 'Vestido amarelo, tamanho M. Estado de uso: pouco uso.',
    cover: './vestido1.jpg',
  }
]

export const Login = () => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [productsPerPage] = useState(1);
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

