import { Router } from 'express'
import { checkAuth } from '../utils/checkAuth.js'
import { CreateOrder, GetOrders } from '../controllers/orders.js'

const router = new Router()

//GetOrders
router.get('/getOrders',checkAuth, GetOrders)

//post order
router.post ('/createOrder',checkAuth, CreateOrder)

export default router