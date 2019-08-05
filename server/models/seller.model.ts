import mongoose, { Schema, Document } from 'mongoose'

export interface ISeller extends Document {
  category: string
  isCompany: boolean
  name: string
  rating: number
  created_at: string
}

const SellerSchema = new Schema({
  category: {
    required: true,
    type: String,
  },
  isCompany: {
    type: Boolean,
    required: true
  },
  name: {
    required: true,
    type: String,
  },
  rating: {
    required: true,
    type: Number,
  }
}, { timestamps: { createdAt: 'created_at' } })

SellerSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {
    ret.id = ret._id
    delete ret._id
  }
})

export default mongoose.model<ISeller>('sellers', SellerSchema)
