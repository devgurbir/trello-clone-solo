import React from 'react'
import FlexDiv from '../../Styled/FlexDiv'
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';

const SingleCardContentActivityLog = ({user, text}) => {
  return (
    <FlexDiv gap="15px" align="center">
        <FlexDiv justify="center" style={{width:"24px"}}><Avatar alt="Gurbir Singh" src="/broken-image.jpg" sx={{ bgcolor: deepPurple[500], width: "28px", height: "28px", fontSize:"14px" }}>GS</Avatar></FlexDiv>
        <FlexDiv direction="column">
            <p><span style={{fontWeight: "700"}}>{user}</span> {text}</p>
        </FlexDiv>
    </FlexDiv>
  )
}

export default SingleCardContentActivityLog