import Order from "../models/Order.js";
import User from "../models/User.js"

export const CreateOrder = async (req, res) => {
  try{
    const {firstName, secondName, number, adress1, adress2, country, city, state, zipcode, userEmail,manufactures,deliveryPrice,manufacturesPrice, totalPrice} = req.body

      const user = await User.findOne({"email" : userEmail})

      // console.log(req);

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
      })  

      user.orders.push(newOrder)

      // user.orders = []

      console.log(user);


      await user.save()
      await newOrder.save()

      return res.json({newOrder})
  }
  catch(error){
    res.json({message: `something went wrong:${error}`})
    console.log(error);
  }
}


export const GetOrders = async (req, res) => {
  try{

    const orders = await Order.find()
    console.log(orders);
    // var orders = []
    // user.orders.forEach(async (item)=> {
    //   let order = await Order.findOne({"_id" : item})
    //   orders.push(order)
    //   console.log(order);
      
    // })
    // console.log(orders);
    // console.log(user);
      // const user = await User.findOne({"email" : userEmail})


      // user.orders.push(newOrder)

      // // user.orders = []

      // console.log(user);


      // await user.save()
      // await newOrder.save()

      return res.json({orders})
  }
  catch(error){
    res.json({message: `something went wrong:${error}`})
    console.log(error);
  }
}