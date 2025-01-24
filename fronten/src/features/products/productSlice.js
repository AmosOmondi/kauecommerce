import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import productService from './productservice';


const initialState ={
products: [],
isError: false,
isSuccess: false,
isLoading: false,
message: ''
  }

  export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{
      reset : state => initialState
    },
    
  extraReducers: (builder) => {

    builder
    
    .addCase(createProduct.pending, (state) => {
    
    state.isLoading = true
    
    })
    
    .addCase(createProduct.fulfilled, (state, action) => {
    
    state.isLoading = false
    
    state.isSuccess = true
    
    state.products.push(action.payload)
    
    })
    
    .addCase(createProduct.rejected, (state, action) => {
    
    state.isLoading = false
    
    state.isError = true
    
    state.message = action.payload
    
    })
    .addCase(getProduct.pending, (state) => {

        state.isLoading = true
        
        })

        .addCase(getProduct.fulfilled, (state, action) => {

            state.isLoading = false
            
            state.isSuccess = true
            
            state.products = action.payload
            
            })
            

          }
            

  })

  export const createProduct= createAsyncThunk('products/create',
    
    async (productData, thunkAPI) => {
    
    try {
    
    const token = thunkAPI.getState().auth.user.token 
    
    return await productService.createProduct(productData, token)
    
    } catch (error) {
    
    const message =
    
    (error.response && error.response.data && error.response.data.message)
    
    || error.message
    
    || error.toString()
    
    return thunkAPI.rejectWithValue(message)
    
    }
    
    }
    
    )
    export const getProduct = createAsyncThunk(

      'products/getAll',
      
      async (_, thunkAPI) => {
      
      try {
      
      const token = thunkAPI.getState().auth.user.token
      
      return await productService.getProduct(token)
      
      } catch (error) {
      
      const message =
      
      (error.response && error.response.data && error.response.data.message)
      
      || error.message
      
      || error.toString()
      
      return thunkAPI.rejectWithValue(message)
      
      }
      
      }
      
      )

      export const getPhoto = createAsyncThunk(

        'products/photo',
        
        async (_, thunkAPI) => {
        
        try {
        
        const token = thunkAPI.getState().auth.user.token
        
        return await productService.getPhoto(token)
        
        } catch (error) {
        
        const message =
        
        (error.response && error.response.data && error.response.data.message)
        
        || error.message
        
        || error.toString()
        
        return thunkAPI.rejectWithValue(message)
        
        }
        
        }
        
        )

      export const deleteProduct = createAsyncThunk(

        'products/delete',
        
        async (id, thunkAPI) => {
        
        try {
        
        const token = thunkAPI.getState().auth.user.token
        
        return await productService.deleteProduct(id, token)
        
        } catch (error) {
        
        const message =
        
        (error.response && error.response.data && error.response.data.message)
        
        || error.message
        
        || error.toString()
        
        return thunkAPI.rejectWithValue(message)
        
        }
        
        }
        
        )










  export const {reset} = productSlice.actions

  export default productSlice.reducer