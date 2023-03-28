import Manufacture from "../models/Manufacture.js";

//Create Manufacture
export const CreateManufacture = async (req, res) => {
  try{
    const {images, title, name, price, priceValue, colections, clothesType, description, sizingText, sizingImg, materials, care, options, titleEng, nameEng, priceEng, priceValueEng, colectionsEng,clothesTypeEng, descriptionEng, sizingTextEng, sizingImgEng, materialsEng, careEng, optionsEng} = req.body

      const newManufacture = new Manufacture({
        imgUrl: images,
        title,
        name,
        price,
        priceValue,
        colections,
        clothesType,
        description,
        sizingText,
        sizingImg,
        materials,
        care,
        options,
        titleEng,
        nameEng,
        priceEng,
        priceValueEng,
        colectionsEng,
        clothesTypeEng,
        descriptionEng,
        sizingTextEng,
        sizingImgEng,
        materialsEng,
        careEng,
        optionsEng
      })  

      await newManufacture.save()

      return res.json({newManufacture})
  }
  catch(error){
    res.json({message: `something went wrong:${error}`})
    console.log(error);
  }
}


//ChangeManufacture
export const ChangeManufacture = async (req, res) => {
  try{
    const {_id, images, title, name, price, priceValue, colections, clothesType, description, sizingText, sizingImg, materials, care, options, titleEng, nameEng, priceEng, priceValueEng, colectionsEng,clothesTypeEng, descriptionEng, sizingTextEng, sizingImgEng, materialsEng, careEng, optionsEng} = req.body


    const manufacture = await Manufacture.findById(_id)
      if (manufacture) {
        manufacture.imgUrl = images;
        manufacture.title = title;
        manufacture.name = name;
        manufacture.price = price;
        manufacture.priceValue = priceValue;
        manufacture.colections = colections;
        manufacture.clothesType = clothesType;
        manufacture.description = description;
        manufacture.sizingText = sizingText;
        manufacture.sizingImg = sizingImg;
        manufacture.materials = materials;
        manufacture.care = care;
        manufacture.options = options;
        manufacture.titleEng = titleEng;
        manufacture.nameEng = nameEng;
        manufacture.priceEng = priceEng;
        manufacture.priceValueEng = priceValueEng;
        manufacture.colectionsEng = colectionsEng;
        manufacture.clothesTypeEng = clothesTypeEng;
        manufacture.descriptionEng = descriptionEng;
        manufacture.sizingTextEng = sizingTextEng;
        manufacture.sizingImgEng = sizingImgEng;
        manufacture.materialsEng = materialsEng;
        manufacture.careEng = careEng;
        manufacture.optionsEng = optionsEng
      }
    await manufacture.save()

    return res.json({manufacture})
  }
  catch(error){
    res.json({message: `something went wrong:${error}`})
    console.log(error);
  }
}

export const deleteManufacture = async (req, res) => {
  try{
    const {_id} = req.body

    await Manufacture.deleteOne( {'_id': _id } )

    return res.json({_id})
  }
  catch(error){
    res.json({message: `something went wrong:${error}`})
    console.log(error);
  }
}

//Get all manufactures
export const getManufactures = async (req, res) => {
  try {
    const manufactures = await Manufacture.find()
    if(!manufactures){
      return res.json({ message: 'something went wrong' })
    }



    res.json({ manufactures })
  } catch (error) {
    res.json({message: `something went wrong: ${error}`})
  }
}




