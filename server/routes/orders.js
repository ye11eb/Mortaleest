import { Router } from 'express'
import { checkAuth } from '../utils/checkAuth.js'
import { CreateOrder, GetOrders, ChangeOrders } from '../controllers/orders.js'

const router = new Router()

//GetOrders
router.get('/getOrders',checkAuth, GetOrders)

//post order
router.post ('/createOrder',checkAuth, CreateOrder)

//change order
router.post ('/changeOrder',checkAuth, ChangeOrders)


export default router