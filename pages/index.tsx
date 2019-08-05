import React from 'react'
import Shows from 'Components/Shows'
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
  <Shows shows={props.shows} />
)

Index.getInitialProps = async () => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default Index