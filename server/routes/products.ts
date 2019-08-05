import express from 'express'
import ProductController from '../controllers/product.controller'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    console.log('fetching products') // tslint:disable-line:no-console
    // const products = await ProductController.GetAllProducts()
    const products = await ProductController.GetAllProductsV3()
    return res.json(products)
  } catch (err) {
    return res.status(400).json(err.message)
  }
})

// router.post('/', async (req, res) => {
//   try {
//     const Product = await ProductController.CreateProduct({
//       description: req.body.description,
//       title: req.body.title,
//       date: req.body.date
//     })
//     return res.json(Product)
//   } catch (err) {
//     return res.status(400).json(err.message)
//   }
// })

// router.post('/save', async (req, res) => {
//   try {
//     const result = await ProductController.UploadProductsFromJSON()
//     return res.json({ result })
//   } catch (err) {
//     return res.status(400).json(err.message)
//   }
// })

router.get('/:ProductId', async (req, res) => {
  try {
    const productId = req.params.productId
    const product = await ProductController.GetProductById(productId)
    return res.json(product)
  } catch (err) {
    return res.status(400).json(err.message)
  }
})

router.delete('/:ProductId', async (req, res) => {
  try {
    const ProductId = req.params.ProductId
    await ProductController.RemoveProductById(ProductId)
    return res.json({ message: 'Succes!' })
  } catch (err) {
    return res.status(400).json(err.message)
  }
})

export default router
