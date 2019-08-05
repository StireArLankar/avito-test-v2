import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import FiltersContext, { IFiltersValues, initialFilters, filtersData } from 'Context/filters'

const withSorting = (Component: any) => (props: any) => {
  const [ filters, setFilters ] = useState<IFiltersValues>(initialFilters)

  const updateFilters = (name: string, value: any) => {
    const newFilters = { ...filters, [name]: value }
    setFilters(newFilters)
  }

  useEffect(() => {
    const { query } = queryString.parseUrl(props.router.asPath)
    const init = filtersData.reduce((acc, fil) => {
      if (fil.type === 'sum_range') {
        acc[fil.name] = {
          from: query.sum_from || fil.default_value.from,
          to: query.sum_to || fil.default_value.to
        }
      }
      const valueFromQuery = query[fil.name] === 'false' ? false : query[fil.name]
      acc[fil.name] = valueFromQuery || fil.default_value
      return acc
    }, {})
    setFilters(init)
  }, [])

  useEffect(() => {
    const { query, url } = queryString.parseUrl(props.router.asPath)
    Object.entries(filters).forEach(([key, value]) => {
      if (key === 'sum') {
        query.sum_from = value.from
        query.sum_to = value.to
      } else {
        query[key] = value
      }
    })
    const stringified = queryString.stringify(query)
    const href = url + '?' + stringified
    const as = href
    props.router.replace(href, as, { shallow: true })
  }, [filters])

  return (
    <FiltersContext.Provider value={{ filters, updateFilters }}>
      <Component {...props} />
    </FiltersContext.Provider>
  )
}

export default withSorting
