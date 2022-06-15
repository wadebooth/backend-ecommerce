import mongo from 'mongodb'
import express from 'express'
import { config } from 'dotenv'
import cors from 'cors'
import functions from 'firebase-functions'
import { MongoClient } from 'mongodb'
import { productRouter } from './src/routes/productRoutes.js'

config()
const app = express()
app.use(cors())
app.use(express.json())
app.use(
  cors({
    origin: [
      'https://https://ecommerce-frontend-wb.web.app/',
      'http://localhost:3030',
    ],
  })
)

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

// const client = mongo.connect(
//   process.env.MONGO_URL,
//   options,
//   (err, mongoClient) => {
//     if (err) {
//       console.error(err)
//       return
//     }
//     console.log('we are connected!')

//     const db = MongoClient.db('eCommerce_finalproject')
//     productsdb = db.collection('products')
//   }
// )

app.get('/', (req, res) => {
  res.send('API is running...test')
})

app.use(productRouter)

app.listen(3001, () => {
  console.log('Api running...')
})

export const api = functions.https.onRequest(app)
