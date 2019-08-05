import express, { Request, Response } from 'express'
import cors from 'cors'

import sellersRoute from './routes/sellers'
import productsRoute from './routes/products'

const router = express.Router()

router.use('/seller', cors(), sellersRoute)
router.use('/product', cors(), productsRoute)

router.get('/hello', (req: Request, res: Response) => {
  res.send('hello')
})

export default router
