import React from 'react'
import StyledTextArea from '../Styled/StyledTextArea'
import { useState } from 'react'

const FocusableTextArea = (props) => {
    
  const [isEditing, setIsEditing] = useState(false)
  const handleEdit = () => {
      setIsEditing(!isEditing)      
  }
  return (
    <>
        {isEditing ? <StyledTextArea onBlur = {() => handleEdit()} isEditing={true} {...props} /> : <StyledTextArea onFocus = {() => handleEdit()} isEditing={false} {...props} />}
    </>
  )
}

export default FocusableTextArea