import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BiSolidCartAdd } from "react-icons/bi"
import { useCart } from "../contexts/cartContext";
import './css/ProductDetailsPage.css'

// Define the ProductDetailsPage component
function ProductDetailsPage() {

  // Get the product ID from the URL parameters
  const { productId } = useParams()

  // Get the addToCart function from the cart context
  const { addToCart } = useCart()

  // Define state variables for the product, loading status, error message, and active image index
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [activeImg, setActiveImg] = useState(0)

  // Define a useEffect hook to fetch the product data when the component mounts
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true)
      try {
        const res = await axios.get(`http://localhost:3000/api/products/${productId}`)

        setProduct(res.data)
        setLoading(false)
        
      } catch (err) {
        setError('Something went wrong!')
        console.error(err.message)
      }
    }

    getProduct()
  }, [])

  // Define a function to handle the click event of the "Add to Cart" button
  const handleClick = () => {
    addToCart(product)
  }

  // Render a loading message if the data is still being fetched
  if(loading) {
    return (
      <p>Loading...</p>
    )
  }

  // Render nothing if there's no product data
  if(!product) return null

  // Render the product details
  return (
    <div className="Product-detail">
      <div className="Product-images">
        <img src={product.images[activeImg]} alt="product image" className="big-image" />
        <div className="Images-small">
          {product.images.map((image, index) => (
            <div key={index} onClick={() => setActiveImg(index)} className="next-img">
              <img src={image} className="product-img"/>
            </div>
          ))}
        </div>
      </div>
      <div className="details">
        <h1 className="product-name">{ product.name }</h1>
        <p>____________________________________________________________________________</p>
        <div className="purchase-details">
          <p className="product-price">Price: <span>{product.price}</span> kr</p>
          <button onClick={handleClick} className="Add-btn">
            Add To Cart 
            <BiSolidCartAdd className="CartIcon" />
          </button>
        </div>
        <p className="product-desc">{product.description}</p>
      </div>
    </div>
  )
}

// Export the ProductDetailsPage component
export default ProductDetailsPage