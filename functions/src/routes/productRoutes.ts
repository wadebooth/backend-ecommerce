import express, { Request, Response } from 'express'
import { getProductsCollection } from '../gateway/db.js'
import { createProduct, getProduct } from '../services/products-services'

const productRouter = express.Router()

const getProducts = async (req: Request, res: Response) => {
  try {
    const col = await getProductsCollection()
    const data = await col.find({}).toArray()
    res.send(data)
  } catch (err) {
    res.status(500).send(err)
  }
}

// export const addProduct = async (req: Request, res: Response) => {
//   const product = new product({
//     name: req.body.name,
//     image: req.body.image,
//     brand: req.body.brand,
//     category: req.body.category,
//     description: req.body.description,
//     rating: req.body.category,
//     numReviews: req.body.numReviews,
//     price: req.body.price,
//     countInStock: req.body.countInStock,
//   })
//   const id = await createProduct(product)
//   res.send(id.toString())
// }

productRouter.get('/products', getProducts)
productRouter.get('/products/:id', getProduct)
// productRouter.post('/products', addProduct)

export { productRouter }
