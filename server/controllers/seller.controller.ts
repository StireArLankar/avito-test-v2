import Seller, { ISeller } from '../models/seller.model'
// const sellers = require('../../sellers.json')

// interface ICreateSellerInput {
//   category: ISeller['category']
//   isCompany: ISeller['isCompany']
//   name: ISeller['name']
//   rating: ISeller['rating']
//   created_at: ISeller['created_at']
// }

// const CreateSeller = async (data: ICreateSellerInput): Promise<ISeller> => {
//   const { category, isCompany, name, rating } = data
//   return Seller.create({
//     category, isCompany, name, rating
//   })
//     .then((result) => result)
//     .catch((error) => { throw error })
// }

const GetAllSellers = async (): Promise<ISeller[]> => {
  return Seller.find()
    .then((data) => data)
    .catch((error) => { throw error })
}

// const UploadSellersFromJSON = async (): Promise<any> => {
//   return Seller.insertMany(sellers)
//     .then(() => sellers)
//     .catch(() => false)
// }

const GetSellerById = async (SellerId: string): Promise<ISeller> => {
  return Seller.findById(SellerId)
    .then((data) => {
      if (data) return data
      throw Error('No such Seller')
    })
    .catch((error) => { throw error })
}

const RemoveSellerById = async (SellerId: string): Promise<any> => {
  return Seller.deleteOne({ _id: SellerId })
    .then((data) => data)
    .catch((error) => { throw error })
}

export default {
  // CreateSeller,
  // UploadSellersFromJSON,
  GetAllSellers,
  GetSellerById,
  RemoveSellerById
}
