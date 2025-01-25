import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProduct, reset } from '../features/products/productSlice'
import ProductItem from './ProductItem'
import Spinner from './Spinner'
import { useNavigate } from 'react-router-dom'
import './../grid.css'


const ProductList = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { products, isLoading, isError, message } = useSelector(state => state.products)

  useEffect(() => {
    if (isError) console.log(message)
        dispatch(getProduct())
    return () => {
      dispatch(reset())
    }
  }, [navigate, isError, message, dispatch])

  return (
    
    isLoading ? <Spinner /> : (
   

        <section className='container'>
           
        
        {!products == '' && (
        
        <div className='Product_container'>
        
        {products.map(product=> <ProductItem key={product._id} product={product}
        
        />)}
       
        </div>
        
        )}
        
        </section>
        
        )

)

}

export default ProductList