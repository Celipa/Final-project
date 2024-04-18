import CartContextProvider from '../contexts/cartContext';
import { ProductProvider } from '../contexts/ProductContext';

const Providers = ({ children }) => {
  return (
    <ProductProvider>
      <CartContextProvider>
        {children}
      </CartContextProvider>
    </ProductProvider>
  );
};

export default Providers;