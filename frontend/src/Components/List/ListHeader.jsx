import React from 'react'
import styles from './list.module.css'
import ListTitleTextarea from './ListTitleTextarea'

const ListHeader = () => {
  return (
    <div className={styles.listHeader}>
        <ListTitleTextarea />
    </div>
  )
}

export default ListHeader