import React, { useState, useEffect } from 'react'
import SortingContext from 'Context/sorting'
import sortingData, { sortingValue } from 'Context/sorting/sorting-data'
import queryString from 'query-string'

const sortingValues = Object.keys(sortingData)

const withSorting = (Component: any) => (props: any) => {
  const [value, setValue] = useState<sortingValue>('popularity')

  const updateSorting = (val: sortingValue) => {
    if (val === value) return
    setValue(val)
  }

  useEffect(() => {
    const { sorting } = props.router.query
    sortingValues.includes(sorting) && setValue(sorting)
  }, [])

  useEffect(() => {
    const { query, url } = queryString.parseUrl(props.router.asPath)
    query.sorting = value
    const stringified = queryString.stringify(query)
    const href = url + '?' + stringified
    const as = href
    props.router.replace(href, as, { shallow: true })
  }, [value])

  return (
    <SortingContext.Provider value={{ sortingData, value, updateSorting }}>
      <Component {...props} />
    </SortingContext.Provider>
  )
}

export default withSorting
