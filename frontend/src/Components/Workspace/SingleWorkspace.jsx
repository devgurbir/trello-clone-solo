import React from 'react'
import styles from "./workspace.module.css"
const SingleWorkspace = () => {
  return (
    <div>
        {/* Workspace Title */}
        <div className={styles.header}>
            <h1>Workspace Title</h1>
        </div>
        <div className={styles.wrapper}>
            <div className={styles.left}></div>
            <div className={styles.right}>
                <h2>Boards</h2>

            </div>
        </div>
    </div>
  )
}

export default SingleWorkspace