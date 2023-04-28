import { Router } from 'express'
import { Payments } from '../controllers/payments.js'
import { checkAuth } from '../utils/checkAuth.js'

const router = new Router()

//Login
router.post('/payment', Payments)


export default router