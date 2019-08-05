import express from 'express'
import SellerController from '../controllers/seller.controller'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const sellers = await SellerController.GetAllSellers()
    return res.json(sellers)
  } catch (err) {
    return res.status(400).json(err.message)
  }
})

// router.post('/', async (req, res) => {
//   try {
//     const Seller = await SellerController.CreateSeller({
//       description: req.body.description,
//       title: req.body.title,
//       date: req.body.date
//     })
//     return res.json(Seller)
//   } catch (err) {
//     return res.status(400).json(err.message)
//   }
// })

// router.post('/save', async (req, res) => {
//   try {
//     const result = await SellerController.UploadSellersFromJSON()
//     return res.json({ result })
//   } catch (err) {
//     return res.status(400).json(err.message)
//   }
// })

router.get('/:SellerId', async (req, res) => {
  try {
    const sellerId = req.params.SellerId
    const seller = await SellerController.GetSellerById(sellerId)
    return res.json(seller)
  } catch (err) {
    return res.status(400).json(err.message)
  }
})

router.delete('/:SellerId', async (req, res) => {
  try {
    const sellerId = req.params.SellerId
    await SellerController.RemoveSellerById(sellerId)
    return res.json({ message: 'Succes!' })
  } catch (err) {
    return res.status(400).json(err.message)
  }
})

export default router
