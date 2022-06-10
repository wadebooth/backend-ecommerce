import express from 'express'
import asyncHandler from 'express-async-handler'
import Product from '../../models/productModel.js'

const router = express.Router()

router.get(
  '/api/products',
  asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
  })
)

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findByID(req.params.id)

    if (product) {
      res.json(product)
    } else {
      res.status(404).json({ message: 'Product not found' })
    }
  })
)

export default router
