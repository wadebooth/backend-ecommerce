import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    tyype: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,
  },
})
