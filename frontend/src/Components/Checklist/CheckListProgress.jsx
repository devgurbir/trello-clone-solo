import React from 'react'
import styles from './checklist.module.css'

const CheckListProgress = () => {
  return (
    <div className = {styles.checkListProgress}>
        <span className = {styles.checklistProgressPercentage}>0%</span>
        <div className = {styles.checkListProgressBar}>
            <div style={{width:"20%"}} className = {styles.checklistProgresBarCurrent}></div>
        </div>
    </div>
  )
}

export default CheckListProgress  