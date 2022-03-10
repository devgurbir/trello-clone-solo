import React from 'react'
import styles from "./label.module.css"
import GoBackButton from "./GoBackButton"
import FlexDiv from '../../Styled/FlexDiv'

const CreateLabelTitle = ({handleShowCreateLabel}) => {
  return (
    <div style={{padding:"2px 12px"}}>
      <FlexDiv align="center" justify="space-between" className={styles.popOverHeader} style={{borderBottom:"1px solid rgba(9,30,66,.13)"}}>
            <GoBackButton handleShowCreateLabel={handleShowCreateLabel} />
            <span className={styles.popOverHeaderTitle} style={{border: "0"}}>Create Label</span>
            <span >X</span>
      </FlexDiv>
      </div>
  )
}

export default CreateLabelTitle