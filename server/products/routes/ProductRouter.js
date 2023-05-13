import express from 'express'
import productService from '../services/ProductService.js'

const productRouter = express.Router()

productRouter.get('/products/:category', productService.getByCategory)
productRouter.post('/products', productService.store)
export default productRouter