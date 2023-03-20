import Link from 'next/link'
import React from 'react'
import { ActiveLink } from './ActiveLink'
import style from './Navabar.module.css'
export const Navbar = () => {
  return (
    <nav className={style.container}>
      <ActiveLink href="/" text={'Home'}/>
      <ActiveLink href="/contact" text={'Contact'}/>
      <ActiveLink href="/about" text={'About'}/>
  </nav>
  )
}

