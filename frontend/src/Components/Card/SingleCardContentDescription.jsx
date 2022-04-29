// import React, { useEffect } from 'react'
import FlexDiv from '../../Styled/FlexDiv'
import { useState } from 'react'
import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined';
import styles from "./card.module.css"
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { updateDesc } from '../../Redux/Card/actions';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useRef } from 'react';

import Loading from "../Loading"
const SingleCardContentDescription = ({description}) => {
  const isLoading = useSelector(state => state.singleCard.isLoading)
  const dispatch = useDispatch()
  const {card_id} = useParams()
  const [val, setVal] = useState("")
  const [isEditing, setIsEditing] = useState(false)
  const [temp, setTemp] = useState(description);
  const inputRef = useRef(null)
  
  const handleEdit = () => {
    setIsEditing(!isEditing);
    setVal(temp)
  }

  useEffect( () => {
    setVal(description)
    setTemp(description)
  }, [description])

  
  return (
    <div style={{width:"100%", marginTop:"14px"}}>
      
        <FlexDiv gap="15px">
          <ReorderOutlinedIcon fontSize="medium" />
            <h3>Description</h3>
            {val && !isEditing && isLoading && <button style={{cursor: "not-allowed"}} onClick={() => setIsEditing(true)} disabled={true}>Edit</button>}
            {val && !isEditing && !isLoading && <button style={{cursor: "pointer"}} onClick={() => setIsEditing(true)} >Edit</button>}
        </FlexDiv>
        <div style={{marginLeft:"30px", marginTop:"15px", position:"relative"}}>
        {isLoading && <Loading />}
              {isEditing && <textarea  value={val} autoFocus onChange = {(e) => setVal(e.target.value) } onBlur = { () => {
                handleEdit();
                if(val !== description) dispatch(updateDesc(card_id, val)); 
              }}  placeholder="Add a more detailed description" className={styles.descriptionBeingEdited} />   }
              {!isEditing && <textarea value={val}  onClick = {() => {                
                setIsEditing(true)
                }} onChange = {(e) => setVal(e.target.value) } onBlur = {() => handleEdit()}  placeholder="Add a more detailed description" className={styles.descriptionNotBeingEdited} />  }
              {/* Save or Close */} 
            {isEditing && (<FlexDiv gap="10px" align="center">
              <button className={styles.saveButton} onClick = {() => {
                  if(val !== description)  dispatch(updateDesc(card_id, val));
                  setIsEditing(false)           
              }}>Save</button>  
              <FontAwesomeIcon icon={faXmark} size="xl" />
            </FlexDiv>)}
        </div>
    </div>
  )
}

export default SingleCardContentDescription