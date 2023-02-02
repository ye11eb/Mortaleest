import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
    {
      firstName: {
        type: String,
        required: true,
      },      
      secondName: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      isStaff: {
        type: Boolean,
        required: true,
      },
      number: {
        type: String,
        required: true,
      },
      adress1: {
        type: String,
        required: true,
      },
      adress2: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      zipcode: {
        type: String,
        required: true,
      },
      orders: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Post',
        },
      ],
    },
    { timestamps: true },
)

export default mongoose.model('User', UserSchema)
