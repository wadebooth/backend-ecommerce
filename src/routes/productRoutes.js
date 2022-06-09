import express from 'express'
import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

const router = express.Router()

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = Product.find({})
    res.json(products)
  })
)

router.get('/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})
export default router
