import React from 'react'
import FlexDiv from '../../Styled/FlexDiv'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowMaximize } from '@fortawesome/free-solid-svg-icons'
import FocusableTextArea from '../FocusableTextArea'
import { useState } from 'react'
import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined';

const SingleCardContentDescription = () => {
  const [val, setVal] = useState(false)
  return (
    <div style={{width:"100%"}}>
        <FlexDiv gap="15px">
          <ReorderOutlinedIcon fontSize="medium" />
            <h3>Description</h3>
            {val && <button>Edit</button>}
        </FlexDiv>
        <div style={{marginLeft:"30px", marginTop:"15px"}}>            
            { val || val != "" 
            ? <FocusableTextArea onChange = { (e) => {setVal(e.target.value)} } value = {val} width="100%" background="#0000" minHeight="40px" paddingX="12px" paddingY="8px"/>
            : <FocusableTextArea onChange = { (e) => {setVal(e.target.value)} } placeholder={ "Add a more detailed description" } width="100%" background="#091e420a" height="108px" minHeight="40px" paddingX="12px" paddingY="8px"/>}
            {/* <FocusableTextArea onChange = { (e) => {setVal(e.target.value)} } placeholder={ "Add a more detailed description" } width="100%" background="#091e420a" height="108px" minHeight="40px" paddingX="12px" paddingY="8px"/> */}
        </div>
    </div>
  )
}

export default SingleCardContentDescription