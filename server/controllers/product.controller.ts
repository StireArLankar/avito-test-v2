import Product, { IProduct } from '../models/product.model'
import Seller from '../models/seller.model'
const products = require('../../products.json')

// interface ICreateProductInput {
//   title: IProduct['title']
//   description: IProduct['description']
//   date?: IProduct['date']
// }

// const CreateProduct = async (data: ICreateProductInput): Promise<IProduct> => {
//   return Product.create({
//     ...data
//   })
//     .then((result) => result)
//     .catch((error) => { throw error })
// }

const UploadProductsFromJSON = async (): Promise<boolean> => {
  const sellers = await Seller.find()
  const mappedProducts = products.map((product) => {
    const seller = sellers[+product.relationships.seller]._id
    return {
      ...product,
      relationships: {
        seller
      }
    }
  })
  return Product.insertMany(mappedProducts)
    .then(() => true)
    .catch(() => false)
}

const GetAllProducts = async (): Promise<IProduct[]> => {
  return Product.find()
    .then((data) => data)
    .catch((error) => { throw error })
}

const GetAllProductsV2 = async (): Promise<IProduct[]> => {
  return Product
    .find()
    .populate('relationships.seller')
    .then((data) => data)
    .catch((error) => { throw error })
}

const GetAllProductsV3 = async (): Promise<IProduct[]> => {
  return Product
    .find()
    .populate({ path: 'relationships.seller', select: 'rating name' })
    .select('category relationships price title pictures created_at')
    .then((data) => data)
    .catch((error) => { throw error })
}

const GetProductById = async (ProductId: string): Promise<IProduct> => {
  return Product.findById(ProductId)
    .then((data) => {
      if (data) return data
      throw Error('No such Product')
    })
    .catch((error) => { throw error })
}

const RemoveProductById = async (ProductId: string): Promise<any> => {
  return Product.deleteOne({ _id: ProductId })
    .then((data) => data)
    .catch((error) => { throw error })
}

export default {
  // CreateProduct,
  UploadProductsFromJSON,
  GetAllProductsV2,
  GetAllProductsV3,
  GetAllProducts,
  GetProductById,
  RemoveProductById
}
