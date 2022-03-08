import React from 'react'
import FlexDiv from '../../Styled/FlexDiv'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListUl } from '@fortawesome/free-solid-svg-icons'
import styles from './card.module.css'
import Avatar from '@mui/material/Avatar';
import FocusableTextArea from '../FocusableTextArea'
import SingleCardContentActivityLog from './SingleCardContentActivityLog'

const SingleCardContentActivity = () => {
  return (
    <FlexDiv direction="column" gap="15px">
        <FlexDiv  gap="15px" align="center" >
            <FlexDiv justify="center" style={{width:"24px"}}><FontAwesomeIcon icon={faListUl} size="lg" style={{margin: "0 auto"}} /></FlexDiv>
            <div><h3>Activity</h3></div>
            <button style={{marginLeft: "auto"}} className="button">Hide Details</button>
        </FlexDiv>

        {/* Comment */}
        <FlexDiv gap="15px" align="center" >
            <FlexDiv justify="center" style={{width:"24px"}}><Avatar alt="Remy Sharp" src="/broken-image.jpg" sx={{ width: "28px", height: "28px" }} /></FlexDiv>
            <FocusableTextArea width="100%" height="42px" placeholder="Write a comment..." background="#fff" />
        </FlexDiv>
        {/* Activity Log */}
        <SingleCardContentActivityLog user="Gurbir Singh" text="moved this card from To Do to Done"/>
        <SingleCardContentActivityLog user="Gurbir Singh" text="moved this card from To Do to Done"/>
        <SingleCardContentActivityLog user="Gurbir Singh" text="moved this card from To Do to Done"/>
    </FlexDiv>
  )
}

export default SingleCardContentActivity