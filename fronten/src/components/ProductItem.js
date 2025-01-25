import { useDispatch } from 'react-redux'
import { deleteProduct } from '../features/products/productSlice'
import { FaShoppingCart } from 'react-icons/fa'





const ProductItem = ({ product }) => {
  const dispatch = useDispatch()
  
  
console.log(product.photo)
  return (
    <>
      <div className='container'>
        <div className="product-card">
          <div className="image-container">
            <img src={'/products/photo/'+product._id} alt={product.name} className="product-image" />
          </div>
          <div className="details">
            <p className="description">{product.name}</p>
            <div className="price-cart">
              <span className="price">${product.price}</span>
              <FaShoppingCart className="cart-icon" />
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductItem
