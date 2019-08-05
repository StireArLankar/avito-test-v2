import React from 'react'
import Link from 'next/link'
import './ShowLink.module.scss'

interface IProps {
  show: {
    id: string
    name: string
  }
}

const ShowLink = (props: IProps) => {
  return (
    <li key={props.show.id}>
    <Link as={`/p/${props.show.id}`} href={`/post?id=${props.show.id}`}>
      <a>{props.show.name}</a>
    </Link>
  </li>
  )
}

export default ShowLink
