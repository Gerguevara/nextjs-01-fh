import React from 'react'
import styles from './DarkLayout.module.css'


export const DarkLayout = ({children}) => {
  return (
    <div className={styles.dark}>
      <h3>Dark Layout</h3>
      {children}
    </div>
  )
}
