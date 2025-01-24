import axios from 'axios'

const API_URL = '/products/'
const PIC_URL ='/products/photo/:productId'

// Create a new product
const createProduct = async (productData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  
  const response = await axios.post(API_URL, productData, config)
  return response.data
}

// Get products
const getProduct = async (photo,token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  
  const response = await axios.get(API_URL,  photo, config)
  
  return response.data
}
const getPhoto = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  
  const response = await axios.get(PIC_URL, config)
  
  return response.data
}

// Delete a product by ID
const deleteProduct = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(`${API_URL}${id}`, config) // Fixed the URL concatenation
  return response.data
}

// Export product service
const productService = { createProduct, getProduct, getPhoto, deleteProduct }
export default productService
