import React, { Fragment } from 'react'
import ShowLink from './ShowLink'
import './Shows.module.scss'

const Shows = (props) => (
  <Fragment>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(({show}) => (
        <ShowLink key={show.id} show={show} />
      ))}
    </ul>
  </Fragment>
)

export default Shows
