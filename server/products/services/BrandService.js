import Brand from "../models/Brand.js";


const index = async (req, res, next) => {
    try {
        res.json(Brand.find())
    } catch (error) {
        res.status(400).json({
            message: "Unable to get brands",
            error: error
        })
    }
}

const store = async (req, res, next) => {
    try {
        const { brandName } = req.body
        const newBrand = new Brand({
            name: brandName
        })
        newBrand.save()
        res.status(201).json(newBrand)
    } catch (error) {
        res.status(400).json({
            message: "Unable to create Brand",
            error: error
        })
    }
}

export default {
    index,
    store
}