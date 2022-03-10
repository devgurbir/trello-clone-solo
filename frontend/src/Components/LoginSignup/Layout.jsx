import React from 'react'
import styles from './loginSignup.module.css'

const Layout = ({children}) => {
  return (
    <main className={styles.main}>
        <div>
        <img alt="Logo" className={styles.logo} src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/167dc7b9900a5b241b15ba21f8037cf8/trello-logo-blue.svg" />
        <section className={styles.inner}>
            {children}
        </section>
        </div>
    </main>
  )
}

export default Layout