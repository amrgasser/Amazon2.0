import Product from "../models/Product.js"


const index = async (req, res, next) => {
    try {
        const allProducts = await Product.find()
        res.status(200).json(allProducts)
    } catch (error) {

    }
}

const getByCategory = async (req, res, next) => {
    try {
        const result = await Product.find({ category: req.params.category })
        res.json({
            data: result
        })
    } catch (error) {
        res.status(500).json({
            error: error,
            message: "Unable to fetch resources, please try again"
        })
    }
}

const store = async (req, res) => {
    try {
        const newProduct = new Product(req.body.product)
        const result = await newProduct.save()
        res.status(201).json({
            message: "Product created successfully",
        })
    } catch (error) {
        res.status(401).json({
            message: "Unable to create Product",
            error: error
        })
    }
}

const update = async (req, res, next) => {
    try {
        let productId = req.params.id
        Product.findByIdAndUpdate(productId, { $set: req.body.product })
        const updatedProduct = await Product.findById(productId)
        res.status(201).json(updatedProduct)
    } catch (error) {
        res.status(400).json({
            message: "Unable to update Product",
            error
        })
    }
}

const destroy = async (req, res, next) => {
    try {
        let productId = req.params.id
        let product = await Product.findByIdAndDelete(productId)
        res.json({
            message: "Product deleted Successfully",
            data: product
        })

    } catch (error) {

    }
}

const find = async (req, res, next) => {
    try {
        let productId = req.params.id
        const product = await Product.findById(productId)
        console.log(productId);
        res.json({
            data: product
        })
    } catch (error) {
        res.status(404).json({
            error: error,
            message: "resource not found"
        })
    }
}
export default { find, getByCategory, store, update, destroy, index }