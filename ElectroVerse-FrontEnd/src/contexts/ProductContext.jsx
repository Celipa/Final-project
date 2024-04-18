import React, { createContext, useState, useEffect } from 'react';
import productService from './productService';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getProducts = async () => {
    setLoading(true);
    try {
      const data = await productService.getAll();
      setProducts(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading, error, getProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;