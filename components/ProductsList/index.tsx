import React, { useContext, useState, useEffect } from 'react'
import ProductsContext from 'Context/products'
import SortingContext from 'Context/sorting'
import ProductPreview from './ProductPreview'

import styles from './products.module.scss'

const ProductsList = () => {
  const [shownAmount, setShownAmount] = useState(10)
  const { products } = useContext(ProductsContext)
  const { value: sortingValue } = useContext(SortingContext)

  useEffect(() => {
    setShownAmount(10)
  }, [products.length, sortingValue])

  const renderProducts = () => {
    return products.slice(0, shownAmount).map((product) => (
      <li key={product.id} className={styles.item}>
        <ProductPreview {...product} />
      </li>
    ))
  }

  const renderFlexFixers = () => {
    return (new Array(5).fill(1)).map((_el, index) => <li key={index} className={styles.item} />)
  }

  const showMore = () => {
    setShownAmount(shownAmount + 10)
  }

  const renderShowMoreButton = () => {
    return products.length > shownAmount
      ? <button type='button' onClick={showMore} className={styles.showMore}>Показать еще</button>
      : null
  }

  return (
    <div>
      <ul className={styles.list}>
        {renderProducts()}
        {renderFlexFixers()}
      </ul>
      {renderShowMoreButton()}
    </div>
  )
}

export default ProductsList
