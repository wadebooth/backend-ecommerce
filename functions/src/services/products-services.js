import { ObjectId } from 'mongodb'
import { getProductsCollection } from '../gateway/db.js'

export const createProduct = async (product) => {
  const col = await getProductsCollection()
  const { insertedId } = await col.insertOne(product)

  return insertedId
}

export const getProduct = async (id) => {
  const col = await getProductsCollection()
  const product = await col.findOne({ _id: ObjectId(id) })
  return product
}

export const updateProduct = async (name, updateObject) => {
  const col = await getProductsCollection()
  await col.updateOne({ name }, { $set: updateObject })
}

export const getProducts = async () => {
  const col = await getProductsCollection()
  const products = await col.find({}).toArray()
  return products
}
