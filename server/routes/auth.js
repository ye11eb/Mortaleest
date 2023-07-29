import { Router } from 'express'
import { register, login, getMe, getUserInfo, deliveryInfo, changeMail, verifyPass} from '../controllers/auth.js'
import { checkAuth } from '../utils/checkAuth.js'

const router = new Router()

// Register
router.post('/register', register)

//Login
router.post('/login', login)

// Get My Orders
router.get('/me', checkAuth, getMe)

// Get My Orders
router.get('/myInfo', checkAuth, getUserInfo)

// Get My Orders
router.post('/deliveryInfo', checkAuth, deliveryInfo)

// Change Email
router.post('/verifyPass', checkAuth, verifyPass)

router.post('/changeMail', checkAuth, changeMail)


export default router