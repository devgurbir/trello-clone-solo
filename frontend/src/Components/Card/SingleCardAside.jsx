import React from 'react'
import { faArchive, faArrowRight, faFilm, faShareAlt, faTag } from '@fortawesome/free-solid-svg-icons'
import { faPaperclip } from '@fortawesome/free-solid-svg-icons'
import { faCopy, faEye, faUser } from '@fortawesome/free-regular-svg-icons'
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons'
import { faGift } from '@fortawesome/free-solid-svg-icons'
import SingleCardAsideOption from './SingleCardAsideOption'
import styles from './card.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AddIcon from '@mui/icons-material/Add';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import FlexDiv from '../../Styled/FlexDiv'
import ChecklistAsideOption from './ChecklistAsideOption'
import CoverAsideOption from './CoverAsideOption'
import LabelAsideOption from './LabelAsideOption'

const SingleCardAside = () => {
  return (
    <div style={{width:"23%", marginTop: "-18px"}}>
        <div>
          <h5>Add to card</h5>
          {/* Options */}
          <div>
              <SingleCardAsideOption icon={faUser} text="Members" />
              <LabelAsideOption />
              <ChecklistAsideOption />
              <SingleCardAsideOption icon={faClock} text="Dates" />
              <SingleCardAsideOption icon={faPaperclip} text="Attachments" />
              <CoverAsideOption />
              <SingleCardAsideOption icon={faFolderOpen} text="Custom Fields" disabled = "disabled" />
          </div>
        </div>
        <div style={{marginTop:"10px"}}>
            <p className={styles.cardBack}>Add dropdowns, text fields, dates, and more to your cards.</p>
            <button className={styles.freeTrialBtn} style={{display:"flex", alignItems:"center"}}>
              <FontAwesomeIcon icon={faGift } size="sm" />
              <p style={{paddingLeft: "4px"}}>Start Free Trial</p>
            </button>
        </div>

        <div style={{marginTop:"24px"}}>
          <h5>Power-Ups</h5>
          <button className={styles.addButtonLink + " " + styles.buttonLink}>
            <AddIcon fontSize="small" />
            <span>Add Power-Ups</span>
          </button>
        </div>

        <div style={{marginTop:"24px"}}>
          <FlexDiv justify="space-between">
          <h5>Automation</h5>
          <InfoIcon fontSize="small" />
          </FlexDiv>
          <button className={styles.addButtonLink + " " + styles.buttonLink}>
            <AddIcon fontSize="small" />
            <span>Add button</span>
          </button>
        </div>

        <div style={{marginTop:"24px"}}>
          <h5>Actions</h5>
          {/* Options */}
          <div>
              <SingleCardAsideOption icon={faArrowRight} text="Move" />
              <SingleCardAsideOption icon={faCopy} text="Copy" />
              <SingleCardAsideOption icon={faFilm} text="Make template" />
              <SingleCardAsideOption icon={faEye} text="Watch" />
              <SingleCardAsideOption icon={faArchive} text="Archive" />
              <SingleCardAsideOption icon={faShareAlt} text="Share" />
          </div>
        </div>
    
    </div>
  )
}

export default SingleCardAside