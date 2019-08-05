import React, { Fragment } from 'react'
import cn from 'classnames'
import Link from 'Src/components/link'
import styles from './header.scss'

const Header = () => {
  return (
    <Fragment>
      <ul className='nav nav-pills nav-fill col-xl-12 mb-2 mt-2 p-0'>
        <li className='nav-item'>
          <Link href='/' activeClassName='active'>
            <a className={cn('nav-link', styles.link)}>Home Page</a>
          </Link>
        </li>
        <li className='nav-item'>
          <Link href='/about' activeClassName='active'>
            <a className={cn('nav-link', styles.link)}>About</a>
          </Link>
        </li>
      </ul>
    </Fragment>
  )
}

export default Header
