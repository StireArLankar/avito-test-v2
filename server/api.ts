import express, { Request, Response } from 'express'

import sellersRoute from './routes/sellers'
import productsRoute from './routes/products'

const router = express.Router()

router.use('/seller', sellersRoute)
router.use('/product', productsRoute)

router.get('/hello', (req: Request, res: Response) => {
  res.send('hello')
})

export default router
