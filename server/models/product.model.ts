import mongoose, { Schema, Document } from 'mongoose'

export interface IProduct extends Document {
  address: {
    lat: number
    lng: number
  }
  category: string
  pictures: string[]
  price: number
  relationships: {
    seller: Schema.Types.ObjectId
  }
  title: string

  body_type?: string
  gearbox?: string
  year?: number

  laptop_type?: string
  processor?: string
  ram?: string
  screen?: string

  camera_type?: string
  matrix_resolution?: number
  video_resolution?: string

  property_type?: string
  rooms?: number
  square?: number

  created_at: string
}

const ProductSchema = new Schema({
  address: {
    lat: Number,
    lng: Number
  },
  category: String,
  pictures: [String],
  price: Number,
  relationships: {
    seller: { type: Schema.Types.ObjectId, ref: 'sellers' }
  },
  title: String,

  body_type: String,
  gearbox: String,
  year: Number,

  laptop_type: String,
  processor: String,
  ram: String,
  screen: String,

  camera_type: String,
  matrix_resolution: Number,
  video_resolution: String,

  property_type: String,
  rooms: Number,
  square: Number,
}, { timestamps: { createdAt: 'created_at' } })

ProductSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {
    ret.id = ret._id
    delete ret._id
  }
})

export default mongoose.model<IProduct>('products', ProductSchema)
