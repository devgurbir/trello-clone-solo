import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import styles from './label.module.css'

const GoBackButton = ({handleShowCreateLabel}) => {
  return (
    <span onClick={() => handleShowCreateLabel(false)} className={styles.popOverGoBack} style={{marginTop:"4px"}}>
        <ArrowBackIosNewIcon sx={{fontSize:"14px"}} />
    </span>
  )
}

export default GoBackButton