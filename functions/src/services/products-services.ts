import { ObjectId } from 'mongodb'
import { getProductsCollection } from '../gateway/db.js'

export const createProduct = async (product: any) => {
  const col = await getProductsCollection()
  const { insertedId } = await col.insertOne(product)
  return insertedId
}

export const getProduct = async (id: string) => {
  const col = await getProductsCollection()
  const product = await col.findOne({ _id: new ObjectId(id) })
  return product
}

export const updateProduct = async (name: string, updateObject: any) => {
  const col = await getProductsCollection()
  await col.updateOne({ name }, { $set: updateObject })
}
