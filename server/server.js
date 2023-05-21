import express from 'express'
import mongoose from 'mongoose'
import path from 'path'
import productRouter from './products/routes/ProductRouter.js'
import bp from 'body-parser'
import * as url from 'url'
import cors from 'cors'


const app = express()
const port = 3000
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))
const run = async () => {
    await mongoose.connect('mongodb://localhost:27017/test')

    app.use(bp.json())
    app.use(cors({ origin: '*' }))
    app.use(express.static("admin-client/dist"))
    app.use(express.static(path.join(__dirname, '../public')))

    app.use('/api/store', productRouter)

    app.listen(port, () => {
        console.log(`Server running on port: ${port}`);
    })
}

export default run