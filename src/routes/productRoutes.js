import express from 'express'
import Product from '../models/productModel.js'

const router = express.Router()

router.get('/', (req, res) => {
  const products = Product.find({})
  res.json(products)
})

router.get('/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})
export default router
