import { withRouter, SingletonRouter } from 'next/router'
import Link from 'next/link'
import React, { Children } from 'react'

interface IProps {
  activeClassName?: string
  href: string
  children: React.ReactElement<any>
  router: SingletonRouter
}

const ActiveLink = ({ router, children, ...props }: IProps) => {
  const child = Children.only(children)

  let className = child.props.className || ''
  if (router.pathname === props.href && props.activeClassName) {
    className = `${className} ${props.activeClassName}`.trim()
  }

  delete props.activeClassName

  return <Link {...props}>{React.cloneElement(child, { className })}</Link>
}

export default withRouter(ActiveLink)
