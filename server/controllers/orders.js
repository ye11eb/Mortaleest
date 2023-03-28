import Order from "../models/Order.js";
import User from "../models/User.js"

export const CreateOrder = async (req, res) => {
  try{
    const {firstName, secondName, number, adress1, adress2, country, city, state, zipcode, userEmail,manufactures,deliveryPrice,manufacturesPrice, totalPrice, orderStatus, trackNumber, priceValue} = req.body

      const user = await User.findOne({"email" : userEmail})

      const newOrder = new Order({
        firstName,
        secondName,
        number,
        adress1,
        adress2,
        country,
        city,
        state,
        zipcode,
        userEmail,
        manufactures,
        deliveryPrice,
        manufacturesPrice,
        totalPrice,
        payed: false,
        orderStatus,
        priceValue,
        trackNumber,
      })  

      user.orders.push(newOrder)

      await user.save()
      await newOrder.save()

      return res.json({newOrder})
  }
  catch(error){
    res.json({message: `something went wrong:${error}`})
    console.log(error);
  }
}

export const ChangeOrders = async (req, res) => {
  try{
    const {_id, firstName, secondName, number, adress1, adress2, country, city, state, zipcode, userEmail, manufactures, deliveryPrice, manufacturesPrice, totalPrice, priceValue, orderStatus, trackNumber} = req.body
    const order = await Order.findById(_id)
      if (order) {
        order._id = _id,
        order.firstName = firstName, 
        order.secondName = secondName, 
        order.number = number, 
        order.adress1 = adress1, 
        order.adress2 = adress2, 
        order.country = country, 
        order.city = city, 
        order.state = state, 
        order.zipcode = zipcode, 
        order.userEmail = userEmail, 
        order.manufactures = manufactures, 
        order.deliveryPrice = deliveryPrice, 
        order.manufacturesPrice = manufacturesPrice, 
        order.totalPrice = totalPrice, 
        order.priceValue = priceValue, 
        order.orderStatus = orderStatus,
        order.trackNumber = trackNumber
      }
    await order.save()

    return res.json({order})
  }
  catch(error){
    res.json({message: `something went wrong:${error}`})
    console.log(error);
  }
}


export const GetOrders = async (req, res) => {
  try{

    const orders = await Order.find()

      return res.json({orders})
  }
  catch(error){
    res.json({message: `something went wrong:${error}`})
    console.log(error);
  }
}