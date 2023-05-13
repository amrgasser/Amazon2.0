import Product from "../models/Product.js"


// const index = async (req, res, next) => {
//     try {
//         const allProducts = await Product.find()
//         res.status(200).json(allProducts)
//     } catch (error) {

//     }
// }

const getByCategory = async (req, res, next) => {
    try {
        const result = await Product.find({ category: req.params.category })
        res.json({
            data: result
        })
    } catch (error) {

    }
}

const store = async (req, res, next) => {
    try {
        console.log(req.body);
        const newProduct = new Product(req.body)
        newProduct.save()
        res.status(201).json({
            message: "Product created successfully",
            data: newProduct
        })
    } catch (error) {
        res.status(401).json({
            message: "Unable to create Product",
            error
        })
    }
}

const update = async (req, res, next) => {
    try {
        let productId = req.params.id
        Product.findByIdAndUpdate(productId, { $set: req.body })
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
        let productId = req.params.ObjectId
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

    } catch (error) {

    }
}
export default { find, getByCategory, store, update, destroy }