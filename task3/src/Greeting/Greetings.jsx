import React from 'react'
import styles from './Greeting.module.css';

export const Greetings = () => {
  return (
    <div>
      <div className={styles.App}>Greetings with greeting css</div>
      <div>Greetings with App css</div>
    </div>
  )
}
