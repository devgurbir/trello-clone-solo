import React from 'react'
import styles from './loginSignup.module.css'
import { useState } from 'react'
import getBearerToken from '../../Utils/GetBearerToken'
import { createWorkspace } from '../../Redux/Workspace/actions'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
const Workspace = () => {
    const token = getBearerToken();
    const dispatch = useDispatch();
    const workspace = useSelector(state => state.workspace.workspace);    
    const [val, setVal] = useState("Trello Workspace")
  return (
    <div className={styles.workspaceWrapper}>
        <div className={styles.workspaceMain}>
            <header className={styles.header}>
                <img alt="Trello" src="https://a.trellocdn.com/prgb/dist/images/trello-logo-gray-spirit.14909038c90bfc8856f4.svg" className={styles.logoImg} />
            </header>
            <div className={styles.workspaceContent}>
                <div className={styles.workspaceForm}>
                    <img className={styles.workspaceFormImg} alt="Taco" src="https://a.trellocdn.com/prgb/dist/images/moonshot/invite-to-workspace.99e5e84b3bde65af8d5b.svg" />
                    <div className={styles.workspaceInfo}>
                        <h1>Let’s set up your Workspace</h1>
                        <p>Your Trello Workspace is the place where you and your collaborators can quickly organize and start getting things done.</p>
                    </div>
                    <div className={styles.workspaceFormDiv}>
                        <label>Name your workspace</label>
                        <input onChange = {(e) => setVal(e.target.value)} value={val} placeholder="Trello Workspace" maxLength="100" minLength="1" autoComplete="off" spellCheck="false" />
                    </div>
                    <div style={{marginTop: "12px"}} className={styles.workspaceFormDiv}>
                        <label>Send email invites</label>
                        <input style={{backgroundColor: "#fafbfc"}} placeholder="Enter as many email addresses as you want" spellCheck="false" />
                        
                    </div>
                    <button className={styles.continueBtn} onClick={ () => dispatch(createWorkspace(val, token))}>Continue</button>
                </div>
            </div>
        </div>        
    </div>
  )
}

export default Workspace