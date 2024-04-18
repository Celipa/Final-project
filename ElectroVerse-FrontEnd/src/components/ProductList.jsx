import { ProductCard } from "./ProductCard"
import './ProductStyling.css'

export const ProductList = ({ products }) => {
  return (
    <div className="product-body">
      <div className="Product-header">
        <h1 className="product-title">Products</h1>
      </div>
      <div className="products-container">
      { products.map(product => (
        <ProductCard key={product._id} product={product} />
      ))}
      </div>
    </div>
  )
}

ProductList.Skeleton = () => {
  return (
    <div className="products-container">
      <div className="this is a product" />
    </div>
  )
}