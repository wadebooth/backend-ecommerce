//this is not part of my application. it is a separate script that i will run to import data. -wb 

import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './src/data/users.js'
import products from './src/data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDb from './src/gateway/db.js'

dotenv.config()

connectDb()

const importData = async () => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        await User.insertMany(users)
    }
}