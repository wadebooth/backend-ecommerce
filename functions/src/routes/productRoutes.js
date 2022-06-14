import express from 'express'
import { getProductsCollection } from '../gateway/db.js'
import { createProduct } from '../services/products-services.js'

const productRouter = express.Router()

const getProducts = async (req, res) => {
  const col = await getProductsCollection()
  res.send(col.find({}))
}

const addProduct = async (req, res) => {
  const product = req.body
  const id = await createProduct(product)
  res.send(id.toString())
}

productRouter.get('/products', getProducts)
productRouter.post('/products', addProduct)

export { productRouter }
