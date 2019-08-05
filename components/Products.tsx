import React from 'react'
import Controls from 'Src/components/Controls'
import ProductsList from 'Src/components/ProductsList'

const Products = (props: any) => {
  return (
    <div>
      <Controls />
      <ProductsList/>
    </div>
  )
}

export default Products
