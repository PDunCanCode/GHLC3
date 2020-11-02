import express from 'express';
import Product from '../models/productModel.js';
import asyncHandler from 'express-async-handler'

const router = express.Router();

// @desc Fetch all Products
//@route GET /api/products
//@access Public Route

router.get('/', asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
}))

// @desc Fetch Single Products
//@route GET /api/products/:id
//@access Public Route
router.get('/:id', asayncHandler(async(req, res) => {
    const product = await Product.findById(req.params.id)

    if(product){
    res.json(product)
    } else {
        res.status(404).json({ message: 'Product notFound' })
    }
}))


export default router