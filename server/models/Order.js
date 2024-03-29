import mongoose from 'mongoose'

const OrderSchema = new mongoose.Schema(
    {
      payment_id:{
        type: String,
        required: true,
      },
      firstName:{
        type: String,
        required: true,
      },
      secondName:{
        type: String,
        required: true,
      },
      number:{
        type: String,
        required: true,
      },
      adress1:{
        type: String,
        required: true,
      },
      adress2:{
        type: String,
        required: true,
      },
      country:{
        type: String,
        required: true,
      },
      city:{
        type: String,
        required: true,
      },
      state:{
        type: String,
        required: true,
      },
      zipcode:{
        type: String,
        required: true,
      },
      userEmail:{
        type: String,
        required: true,
      },
      manufactures:[
        {
          manufactureId:{
            required: true,
            type: String
          },
          manufactureSize:{
            required: true,
            type: String
          },
          manufactureColor:{
            required: true,
            type: String
          },
          manufactureQuantity:{
            required: true,
            type: Number
          },
        }
      ],
      deliveryPrice:{
        required: true,
        type: Number,
      },
      manufacturesPrice: {
        required: true,
        type: Number,
      },
      totalPrice: {
        required: true,
        type: Number,
      },
      priceValue: {
        required: true,
        type: String,
      },
      payed:{
        required: true,
        type: Boolean,
      },
      orderStatus:{
        required: true,
        type: Object,
      },
      trackNumber:{
        required: true,
        type: String,
      }
    },
    { timestamps: true },
)

export default mongoose.model('Order', OrderSchema)