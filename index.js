import express from 'express'
import dotenv from 'dotenv'
import connectDb from './src/gateway/db.js'
import cors from 'cors'
import colors from 'colors'
import productRoutes from './src/routes/productRoutes.js'
import mongoose from 'mongoose'

dotenv.config()

connectDb()

const app = express()

app.use(cors())
app.use(express.json())
// app.use('/', router)

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.get('/api/products/', (req, res) => {
  res.json(productRoutes)
})

// app.get('/api/products/:id', (req, res) => {
//   const product = products.find((p) => p._id === req.params.id)
//   res.json(product)
// })

app.use(productRoutes)

const PORT = process.env.PORT || 5050

mongoose.connect(process.env.NODE_ENV, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`.green)
)
