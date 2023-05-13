import express from 'express'
import BrandService from '../services/BrandService.js'

const brandRouter = express.Router()

brandRouter.get('/', BrandService.index)
brandRouter.post('/', BrandService.store)

export default brandRouter