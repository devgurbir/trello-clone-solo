import React, { useEffect, useRef } from 'react'
import styles from './card.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowMaximize } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { updateTitle } from '../../Redux/Card/actions'

const SingleCardTitle = () => {

const title = useSelector(state => state.singleCard?.card.title) 
const dispatch = useDispatch();
const [isEditing, setIsEditing] = useState(false)
const [val, setVal] = useState(title)
const {card_id} = useParams()
const inputRef = useRef(null)

useEffect( () => {
  setVal(title)
}, [title])

useEffect( () => {
  if(inputRef.current){
    console.log(inputRef.current)
    inputRef.current.focus()
    inputRef.current.select()
  }
}, [inputRef.current])

  return (
    <div className={styles.flexClass} style={{ flexGrow: "1"}}>
        <div>
        <FontAwesomeIcon icon={faWindowMaximize} size="lg" />
        </div>
        <div style={{display: "flex", flexDirection: 'column', flexGrow: "1"}}>
            <textarea className = {styles.singleCardTextarea} value={val} onChange={e =>setVal(e.target.value) } onBlur = {() => {
              if(val !== title) dispatch(updateTitle(card_id, val));
            }} onFocus = {(e) => e.currentTarget.select() } />
            <span className = {styles.singleCardInList}>in list To Do</span>   
        </div>
    </div>
    
  )
}

export default SingleCardTitle