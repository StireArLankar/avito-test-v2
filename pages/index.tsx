import React from 'react'
// import fetch from 'isomorphic-unfetch'
import App from 'Components/app'

const Index = (props: any) => {
  return <App {...props} />
}

// Index.getInitialProps = async () => {
//   const res = await fetch(`${process.env.BASE_URL}/api/products`)
//   const data = await res.json()

//   return {
//     products: data
//   }
// }

export default Index
