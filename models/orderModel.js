const userSchema = mongoose.Schema({
  name: {
    type: String,
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
