import express from 'express'
import dotenv from 'dotenv'
import products from './src/data/products.js'
import connectDb from './src/gateway/db.js'
import colors from 'colors'

import productRoutes from './src/data/products.js'

dotenv.config()

connectDb()

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

const PORT = process.env.PORT || 5050

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`.green)
)
