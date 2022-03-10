import React from 'react'
import styles from './checklist.module.css'
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addChecklist } from '../../Redux/Card/actions'

const AddButton = ({title}) => {
  const {card_id} = useParams();
  const dispatch = useDispatch();
  return (
    <div>
        <button className={styles.addButtonBlue} onClick={() => {
            dispatch(addChecklist(card_id, title))
        }} >Add</button>
    </div>
  )
}

export default AddButton