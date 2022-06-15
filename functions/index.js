import mongo from 'mongodb'
import express from 'express'
import { config } from 'dotenv'
import cors from 'cors'
import functions from 'firebase-functions'
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

app.get('/', (req, res) => {
  res.send('API is running...test')
})

app.use(productRouter)

app.listen(3005, () => {
  console.log('Api running...')
})

export const api = functions.https.onRequest(app)
