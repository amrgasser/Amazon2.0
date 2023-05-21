import express from 'express'
import productService from '../services/ProductService.js'
import upload from '../utils/multiple-upload.js'

const productRouter = express.Router()
productRouter.get('/products', productService.index)

productRouter.get('/products/category/:id', productService.getByCategory)
productRouter.post('/products',
    upload.array('newFiles', 10),
    (req, res, next) => {
        // console.log(req.body.newFiles);

    }
)

// productRouter.post('/products', productService.store)

// Routes on a particular item
productRouter.get('/products/:id', productService.find)
productRouter.put('/products/:id', productService.update)
productRouter.delete('/product/:id', productService.destroy)

export default productRouter