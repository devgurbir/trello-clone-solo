import React from 'react'
import styles from "./workspace.module.css"
import { createBoard } from '../../Redux/Workspace/actions'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import getBearerToken from '../../Utils/GetBearerToken'
import { useState } from 'react'

const CreateBoardBox = () => {
  const [title, setTitle] = useState('')
  const dispatch = useDispatch();
  const {workspace_id} = useParams();
  const token = getBearerToken();
  return (
    <>
    <input value={title} onChange={ (e) => setTitle(e.target.value)} placeholder="Enter board title" />
    <div onClick = {() => dispatch(createBoard(title, workspace_id, token))} className={styles.boardBox}>
        Create new board
    </div>
    </>
  )
}

export default CreateBoardBox