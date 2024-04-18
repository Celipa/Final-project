import { Link } from 'react-router-dom'
import './ProductStyling.css'

export const ProductCard = ({ product }) => {

  return (
    <div className="product">
    <Link to={`/details/${product._id}`} className="details-link">
      <div className="product-card">
        <div className='img-box'>
        <img src={product.images[0]} className="product-img" alt="product image" />
        </div>
        <div className="product-info">
        <p className="product-name">{product.name}</p>
        <p className="product-price">{product.price}:-</p>
        </div>
      </div>
    </Link>
    </div>
  )
}