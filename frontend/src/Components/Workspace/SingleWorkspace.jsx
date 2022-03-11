import React from 'react'
import styles from "./workspace.module.css"
import BoardBox from './BoardBox'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import getBearerToken from '../../Utils/GetBearerToken'
import { useDispatch } from 'react-redux'
import { getWorkspace } from '../../Redux/Workspace/actions'
import { useSelector } from 'react-redux'
const SingleWorkspace = () => {
    const {workspace_id} = useParams();
    const token = getBearerToken();
    const dispatch = useDispatch();
    const workspace = useSelector( state => state.workspace.workspace);

    useEffect( () => {
        dispatch(getWorkspace(workspace_id, token))
    }, [])
  return (
    <div>
        {/* Workspace Title */}
        <div className={styles.header}>
            <h1>{workspace.title}</h1>
        </div>
        <div className={styles.wrapper}>
            <div className={styles.left}></div>
            <div className={styles.right}>
                <h2>Boards</h2>
                <div className={styles.boardsList}>
                    <BoardBox text="Create new board" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleWorkspace