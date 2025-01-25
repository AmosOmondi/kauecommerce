import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProduct, reset } from '../features/products/productSlice'
import ProductItem from './ProductItem'
import Spinner from './Spinner'
import './../index.css'


const Dashboard = () => {
  const dispatch = useDispatch()
  const { products, isLoading, isError, message } = useSelector(state => state.products)

  useEffect(() => {
    if (isError) console.log(message)
    dispatch(getProduct())
    return () => {
      dispatch(reset())
    }
  }, [isError, message, dispatch])

  return (
    <div>
      <header>
        <h1>KAU MODERN HOUSEHOLDS</h1>
        <nav>
          <ul>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Hotline</a></li>
          </ul>
        </nav>
      </header>

      <div className="hero">
        <img src="" alt="top seller" />
        <div className="hero-content">
          <h2>Our Top Seller</h2>
          <p>You can get your quality dream home products here, buy paying Cash or Pay Later</p>
          <p className="price">Ksh 20000</p>
          <button>Order now</button>
        </div>
      </div>

      {/* Updated Products Section */}
      {isLoading ? (
        <Spinner />
      ) : (
        <section className="products">
          {!products == '' && (
            <div className="Product_container">
              {products.map(product => (
                <ProductItem key={product._id} product={product} />
              ))}
            </div>
          )}
        </section>
      )}

      <footer>
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
        <a href="#">Twitter</a>
      </footer>
    </div>
  )
}

export default Dashboard
