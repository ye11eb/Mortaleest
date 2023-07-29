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
        type: String,
        required: true,
      },
      sizingText: {
        type: String,
        required: true,
      },
      sizingImg: {
        type: String,
        required: true,
      },
      materials: {
        type: String,
        required: true,
      },
      care: {
        type: String,
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
      sizingTextEng: {
        type: String,
        required: true,
      },
      sizingImgEng: {
        type: String,
        required: true,
      },
      materialsEng: {
        type: String,
        required: true,
      },
      careEng: {
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
      },
      outOfStock: {
        type: Boolean,
        required: true,
      },
      preOrder: {
        type: Boolean,
        required: true,
      },
      preOrderTime: {
        type: String,
        required: false,
      },
      preOrderTimeEng: {
        type: String,
        required: false,
      },
    },
    { timestamps: true },
)

export default mongoose.model('Manufactures', ManufactureSchema)