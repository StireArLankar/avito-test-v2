import React from 'react'

interface IBase {
  address: {
    lat: number
    lng: number
  }
  category: string
  id: string
  pictures: string[]
  price: number
  relationships: {
    seller: {
      name: string
      id: string
      rating: number
    }
  }
  title: string
}

interface IAuto extends IBase {
  body_type: string
  gearbox: string
  year: number
}

interface ILaptop extends IBase {
  laptop_type: string
  processor: string
  ram: string
  screen: string
}

interface ICamera extends IBase {
  camera_type: string
  matrix_resolution: number
  video_resolution: string
}

interface IImmovable extends IBase {
  property_type: string
  rooms: number
  square: number
}

export type IProduct = IAuto | ILaptop | ICamera | IImmovable

interface IContext {
  products: IProduct[]
}

const ProductsContext = React.createContext<IContext>({
  products: []
})

export default ProductsContext
