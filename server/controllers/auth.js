import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

//Register user
export const register = async (req, res) => {
  try {
    const { email, password, firstName, secondName } = req.body

    const isUsed = await User.findOne({email})

    if(isUsed){
      return res.json({
        message: "this email alredy used",
      })
    }

    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
      // username: user._id,
    const newUser = new User({
      firstName,
      secondName,
      email,
      number:'no info',
      adress1:'no info',
      adress2:'no info',
      country:'no info',
      city:'no info',
      state:'no info',
      zipcode:'no info',
      password:hash,
      isStaff: false,
    })

    const token = jwt.sign({
      id: newUser._id,
      },process.env.JWT_SECRET,
      {expiresIn: '30d'},
    )


    await newUser.save()

    res.json({
      newUser, message: 'register is success'
    })
  }
  catch (error) {
    res.json({message: `error while creating user${error}`})
  }
}


//login user
export const login = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({email})

    const isStaff = user.isStaff

    if(!user){
      return res.json({
        message: 'this user is not exist',
        status: false,
      })
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password)

    if(!isPasswordCorrect) {
      res.json({
        message:"incorrect password",
        status: false,
      })
    }

    const token = jwt.sign({
      id: user._id,
      },process.env.JWT_SECRET,
      {expiresIn: '30d'},
    )

    res.json({
      token, user, isStaff, message: "You success enter in system",status: true,
    })

  }
  catch (error) {
    res.json({message: 'incorrect email or password', status: false})
  }
}

//get me
export const getMe = async (req, res) => {
  try {
    const {user} = await User.findById(req.userId)

    if(!user){
      return res.json({
        message: 'this user is not exist'
      })
    }

    const token = jwt.sign({
      id: _id,
      },process.env.JWT_SECRET,
      {expiresIn: '30d'},
    )


    res.json({
      user, token
    })


  }
  catch (error) {
    res.json({
      message: "no permision"
    })
    
  }
}

//getUserInfo
export const getUserInfo = async (req, res) => {
  try {
    const user = await User.findById(req.userID)

    if(!user){
      return res.json({ message: 'something went wrong' })
    }



    return res.json( user )

  }
  catch (error) {
    res.json({
      message: "no permision"
    })
    
  }
}

//deliveryInfo
export const deliveryInfo = async (req, res) => {
  try {
    const { firstName, secondName, number, adress1, adress2, country, city, state, zipcode } = req.body
    const user = await User.findById(req.userID)

    if(!user){
      return res.json({ message: 'something went wrong' })
    }

    user.firstName = firstName

    user.secondName = secondName
    
    user.number = number

    user.adress1 = adress1

    user.adress2 = adress2

    user.country = country

    user.city = city

    user.state = state

    user.zipcode = zipcode


    await user.save()

    
    res.json({user, status: true})
  }
  catch (error) {
    res.json({
      message: "${error}",
      status: false,
    })
    
  }
}


//login user
export const changeMail = async (req, res) => {
  try {
 
    const { email } = await req.body
    console.log(email);
    const user = await User.findById(req.userID)

    if(!user){
      return res.json({
        message: 'this user is not exist',
        status: false,
      })
    }

    const isUsed = await User.findOne({email})

    if(isUsed){
      return res.json({
        message: "this email alredy used",
        status: false,
      })
    }

    // const isPasswordCorrect = await bcrypt.compare(password, user.password)

    // if(!isPasswordCorrect) {
    //   res.json({
    //     message:"incorrect password"
    //   })
    // }

    // const token = jwt.sign({
    //   id: user._id,
    //   },process.env.JWT_SECRET,
    //   {expiresIn: '30d'},
    // )

    user.email = await email

    console.log(user.email);

    console.log(user);

    await user.save()

    if(user) {
      res.json({user, message: 'succes', status: true})
    }
    
  }
  catch (error) {
    console.log(error);
    res.json({message: `error while login:${error}`})
  }
}


export const verifyPass = async (req, res) => {
  try {

    const {token, password} = req.body
    let userID = 0
    console.log(req.body);

    jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
      if (err) {
        console.log('Invalid token:', err);
      } else {
        console.log('Decoded token:', decoded);
        userID = decoded
      }
    });


    const user = await User.findById(userID.id)

    if(!user){
      return res.json({
        message: 'this user is not exist',
        status: false,
      })
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password)

    if(!isPasswordCorrect) {
      res.json({
        message:"incorrect password",
        isPasswordCorrect,
        status: false,
      })
    }

    if(isPasswordCorrect && user) {
      res.json({user, message: 'correct', status: true})
    }
    
  }
  catch (error) {
    res.json({message: `error while login:${error}`, status: false})
  }
}