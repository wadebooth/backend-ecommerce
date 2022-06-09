import { MongoClient } from 'mongodb'

const connectDb = async () => {
  const client = new MongoClient(process.env.MONGO_URL)
  await client.connect()

  return (
    client.db('ecommerce_site') &&
    console.log(`MongoDB has been connected.`.cyan.underline)
  )
}

export const getEcommerceProducts = async () => {
  const db = await connectDb()

  return db.collection('products')
}

export default connectDb
