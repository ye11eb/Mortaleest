import { Router } from 'express';
import { CreateManufacture, getManufactures , ChangeManufacture, deleteManufacture} from '../controllers/manufactures.js';
import { checkAuth } from '../utils/checkAuth.js';


const router = new Router()
//CreateManufacture
router.post('/createManufacture',checkAuth, CreateManufacture)

//ChangeManufacture https://contest-drilling-agrees-physically.trycloudflare.com/
router.post('/changeManufacture',checkAuth, ChangeManufacture)

//GetManufactures
router.get('/getAllManufactures', getManufactures)


//DeleteManufactures
router.post ('/deleteManufacture', deleteManufacture)

export default router