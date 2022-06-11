const express = require('express')
const dotenv = require('dotenv')
// import connectDb from './src/gateway/db.js'
// import colors from 'colors'
const mongo = require('mongodb').MongoClient
const cors = require('cors')

// import productRoutes from './src/routes/productRoutes.js'
const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

let productsdb
mongo.connect(process.env.MONGO_URL, options, (err, mongoClient) => {
  if (err) {
    console.error(err)
    return
  }
  console.log('we are connected!')

  app.listen(3000, () => console.log('app is listening on port 3000'))

  const db = mongoClient.db('eCommerce_finalproject')
  productsdb = db.collection('products')
})

app.get('/', (req, res) => {
  res.send('API is running...test')
})

app.get('/api/products', async (req, res) => {
  const allProducts = await productsdb.find()
  console.log(allProducts)

  // connect to mongo collection
  // get all products
  // send all products to the front end
  res.send(allProducts)
})

//POST
app.post('/', (req, res) => {
  productsdb.insertOne(req.body)
  res.status(201).send('item was posted')
})

// app.get('/api/products/:id', (req, res) => {
//   const product = products.find((p) => p._id === req.params.id)
//   res.json(product)
// })

// app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 3000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`.green)
)
