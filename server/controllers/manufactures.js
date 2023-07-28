import Manufacture from "../models/Manufacture.js";
import path, {dirname} from 'path'
import { fileURLToPath } from 'url'

//Create Manufactur
export const CreateManufacture = async (req, res) => {
  try{
    const {title, name, price, priceValue, colections, clothesType, description, sizingText, sizingImg, materials, care, options, titleEng, nameEng, priceEng, priceValueEng, colectionsEng, clothesTypeEng, descriptionEng, sizingTextEng, sizingImgEng, materialsEng, careEng, optionsEng, outOfStock, preOrder, preOrderTime, preOrderTimeEng} = req.body

    const __dirname = dirname(fileURLToPath(import.meta.url));
    const {images} = req.files;

  
    const saveImagePromises = images.map((image) => {
      return new Promise((resolve, reject) => {
        const filename = Date.now().toString() + image.name;
        const savePath = path.join(__dirname, '..', 'uploads', filename);
  
        // Move the image to the new folder.
        image.mv(savePath, (err) => {
          if (err) {
            reject(err);
          } else {
            resolve(filename);
          }
        });
      });
    });

    Promise.all(saveImagePromises)
      .then(async(filenames) => {
        const newManufacture = new Manufacture({
          imgUrl: filenames,
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
          optionsEng,
          outOfStock,
          preOrder,
          preOrderTime,
          preOrderTimeEng
        })  
  
        await newManufacture.save()
  
        return res.json({newManufacture})
      })
      .catch((error) => {
        console.error('Error saving images:', error);
        res.status(500).send('Error saving images.');
      })
  }
  catch(error){
    res.json({message: `something went wrong:${error}`})
    console.log(error);
  }
}


//ChangeManufacture
export const ChangeManufacture = async (req, res) => {
  try{
    const {_id, oldImages, title, name, price, priceValue, colections, clothesType, description, sizingText, sizingImg, materials, care, options, titleEng, nameEng, priceEng, priceValueEng, colectionsEng,clothesTypeEng, descriptionEng, sizingTextEng, sizingImgEng, materialsEng, careEng, optionsEng, outOfStock, preOrder, preOrderTime, preOrderTimeEng} = req.body

    const __dirname = dirname(fileURLToPath(import.meta.url));
    const images = req?.files?.images;

    const manufacture = await Manufacture.findById(_id)

    const updateManu = (updatedImages) => {
      if (manufacture) {
        manufacture.imgUrl = updatedImages;
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
        manufacture.optionsEng = optionsEng;
        manufacture.outOfStock = outOfStock;
        manufacture.preOrder = preOrder;
        manufacture.preOrderTime = preOrderTime;
        manufacture.preOrderTimeEng = preOrderTimeEng;    
      }
    }

    console.log(images?.length);
    console.log(images);
    console.log(images?.[0]);

    if(images === undefined) {
      updateManu(oldImages)
      await manufacture.save()
  
      return res.json({manufacture})
    }else if(images.length === undefined) {
      const filename = Date.now().toString() + images.name;
      const savePath = path.join(__dirname, '..', 'uploads', filename);
      images.mv(savePath);
      updateManu([...oldImages, filename])
      await manufacture.save()
  
      return res.json({manufacture})
    }else if (images.length > 1) {
      const saveImagePromises = images.map((image) => {
        return new Promise((resolve, reject) => {
          const filename = Date.now().toString() + image.name;
          const savePath = path.join(__dirname, '..', 'uploads', filename);
    
          // Move the image to the new folder.
          image.mv(savePath, (err) => {
            if (err) {
              reject(err);
            } else {
              resolve(filename);
            }
          });
        });
      })

      Promise.all(saveImagePromises)
      .then(async(filenames) => {
        
        updateManu([...filenames, ...oldImages])
  
        await manufacture.save()
  
        return res.json({manufacture})
      })
    }

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
    const manufactures = await Manufacture.find().sort({ outOfStock: 1 })
    if(!manufactures){
      return res.json({ message: 'something went wrong' })
    }



    res.json({ manufactures })
  } catch (error) {
    res.json({message: `something went wrong: ${error}`})
  }
}




