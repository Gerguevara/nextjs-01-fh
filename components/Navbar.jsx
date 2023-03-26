import React from 'react'
import { ActiveLink } from './ActiveLink'
import style from './Navabar.module.css'

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];


export const Navbar = () => {
  return (
    <nav className={style.container}>
    {menuItems.map((item) => (
      <ActiveLink key={item.href} href={item.href} text={item.text} />
    ))}
  </nav>
  )
}

