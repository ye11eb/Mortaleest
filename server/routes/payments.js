import { Router } from 'express'
import { Payments, callBack, finalResponse } from '../controllers/payments.js'
import bodyParser from 'body-parser'

const router = new Router()

//payments
router.post('/payment', Payments)

var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.post('/callback', urlencodedParser, callBack)

router.post('/finalResponse', urlencodedParser, finalResponse)


export default router