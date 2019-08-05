import { IProduct } from 'Context/products'

const popularitySorting: sortingRule = (array) => array.slice()

const sortByRule = (cb: (arg: IProduct) => any, reverse?: boolean): sortingRule => (array): IProduct[] => {
  const one = reverse ? -1 : 1
  return array.slice().sort((a, b) => {
    const first = cb(a)
    const second = cb(b)
    if (!first) return one
    if (!second) return -one
    if (first > second) return one
    if (first < second) return -one
    return 0
  })
}

const priceSorting = sortByRule((prod) => prod.price)
const dateOldToNewSorting = sortByRule((prod) => new Date(prod.created_at))
const dateNewToOldSorting = sortByRule((prod) => new Date(prod.created_at), true)
const sellerSorting = sortByRule((prod) => prod.relationships.seller.rating, true)

const sorting: ISortingData = {
  popularity: {
    title: 'По популярности',
    value: 'popularity',
    rule: popularitySorting
  },
  price: {
    title: 'По возрастанию цены',
    value: 'price',
    rule: priceSorting
  },
  dateOldToNew: {
    title: 'По дате (от старых к новым)',
    value: 'dateOldToNew',
    // disabled: true,
    rule: dateOldToNewSorting
  },
  dateNewToOld: {
    title: 'По дате (от новых к старым)',
    value: 'dateNewToOld',
    rule: dateNewToOldSorting
  },
  seller: {
    title: 'По рейтингу продавца',
    value: 'seller',
    rule: sellerSorting
  }
}

export type sortingValue = 'popularity' | 'price' | 'dateOldToNew' | 'dateNewToOld' | 'seller'

export type ISortingData = {
  [key in sortingValue]: ISorting
}

export interface ISorting {
  title: string
  value: sortingValue
  disabled?: boolean
  rule: sortingRule
}

type sortingRule = (array: IProduct[]) => IProduct[]

export default sorting
