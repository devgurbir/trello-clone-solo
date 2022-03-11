// import React, { useEffect } from 'react'
import FlexDiv from '../../Styled/FlexDiv'
import { useState } from 'react'
import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined';
import styles from "./card.module.css"
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { updateDesc } from '../../Redux/Card/actions';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useRef } from 'react';
const SingleCardContentDescription = ({description}) => {

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
            {val && !isEditing && <button onClick={() => setIsEditing(true)}>Edit</button>}
        </FlexDiv>
        <div style={{marginLeft:"30px", marginTop:"15px"}}>
          {/* Conditionally rendering textarea for description. Using val & isEditing state to manage it        */}
            {/* {(val?.length == 0 && isEditing) && <textarea onChange = {(e) => setTemp(e.target.value) } onBlur = {() => handleEdit()}  placeholder="Add a more detailed description" className={styles.descriptionBeingEdited} /> } 
            {(val?.length == 0 && !isEditing) && <textarea onFocus = {() => {
              setIsEditing(!isEditing);
              
            }} placeholder="Add a more detailed description" className={styles.descriptionNotBeingEdited} /> }
            {(val?.length > 0 && isEditing) && <textarea onChange = {(e) => setTemp(e.target.value) } onBlur = {() =>{
               handleEdit()
              //  On blur, dispatching the updateDesc function to patch the desription in db.
               if(temp !== description) dispatch(updateDesc(card_id, temp));               
               }} value={temp} className={styles.descriptionBeingEdited} /> }
            {(val?.length > 0 && !isEditing) && <p onClick = {() => {
              setIsEditing(!isEditing);
              setTemp(val)
              }} className={styles.descriptionNotBeingEdited} style={{background:"none"}} >{val}</p> } */}
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