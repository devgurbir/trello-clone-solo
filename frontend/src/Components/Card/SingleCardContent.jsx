import React from 'react'
import FlexDiv from '../../Styled/FlexDiv'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowMaximize } from '@fortawesome/free-solid-svg-icons'
import FocusableTextArea from '../FocusableTextArea'
import { useState } from 'react'
import SingleCardContentDescription from './SingleCardContentDescription'
import SingleCardContentActivity from './SingleCardContentActivity'
import { useSelector } from 'react-redux'
import ChecklistWrapper from '../Checklist/ChecklistWrapper'
import AddChecklistPopup from '../Checklist/AddChecklistPopup'
import SingleCardLabel from './SingleCardLabel'

const SingleCardContent = () => {
  const card = useSelector(state => state.singleCard.card)
  let labels = useSelector( state => state.singleCard?.card?.labels);
  if(labels){
    labels = labels.filter( el => el.selected == true)
  }
  const checklists = card.checklist;
  console.log(card)
  
  return (
    <FlexDiv style={{width:"74%"}} direction="column" gap="15px">
    {/* Description */}
    {labels?.length > 0 && <SingleCardLabel /> }
    <SingleCardContentDescription description={card.description} />
    {/* <AddChecklistPopup /> */}
    {checklists?.map(el => <ChecklistWrapper {...el} key={el.id} />)}
    
    <SingleCardContentActivity activity={card.activity} />
    </FlexDiv>
  )
}

export default SingleCardContent