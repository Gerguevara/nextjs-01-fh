import React, { FC, ReactNode } from 'react'
import { LayoutProps } from '../interfaces/props'
import styles from './DarkLayout.module.css'



export const DarkLayout: FC<LayoutProps> = ({children}) => {
  return (
    <div className={styles.dark}>
      <h3>Dark Layout</h3>
      {children}
    </div>
  )
}
