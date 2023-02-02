import mongoose from 'mongoose'

const ManufactureSchema = new mongoose.Schema(
    {
      imgUrl: {        
        type: Array,
        default: ''
      },
      title: {
        type: String,
        required: true,
      },
      name:{
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      priceValue: {
        type: String,
        required: true,
      },
      colections:{
        type: String,
        required: true,
      },
      clothesType: {
        type: String,
        required: true,
      },
      description: {
        type: Array,
        required: true,
      },
      titleEng: {
        type: String,
        required: true,
      },
      nameEng:{
        type: String,
        required: true,
      },
      priceEng: {
        type: Number,
        required: true,
      },
      priceValueEng : {
        type: String,
        required: true,
      },
      colectionsEng: {
        type: String,
        required: true,
      },
      descriptionEng: {
        type: String,
        required: true,
      },
      clothesTypeEng: {
        type: String,
        required: true,
      },
      optionsEng: {
        type: Array,
        required: true,
      },
      options: {
        type: Array,
        required: true,
      }
    },
    { timestamps: true },
)

export default mongoose.model('Manufactures', ManufactureSchema)