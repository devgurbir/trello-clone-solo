import React, { useState } from 'react'
import FlexDiv from '../../Styled/FlexDiv'
import styles from "./label.module.css"
import CreateLabelTitle from './CreateLabelTitle'
import LabelSearch from './LabelSearch'
import CreateLabelColorBox from './CreateLabelColorBox'
import { useSelector } from 'react-redux'
import CreateLabelInput from './CreateLabelInput'
import { useDispatch } from 'react-redux'
import { updateLabels } from '../../Redux/Card/actions'
import { useParams } from 'react-router-dom'
const CreateLabel = ({handleShowCreateLabel}) => {
  const dispatch = useDispatch();
  const [defaultColors, setDefaultColors] = useState([
    {name: "green", color:"#61bd4f", selected:false, text:""},
    {name: "yellow", color:"#f2d600", selected:false, text:""},
    {name: "orange", color:"#ff9f1a", selected:false, text:""},
    {name: "red", color:"#eb5a46", selected:false, text:""},
    {name: "purple", color:"#c377e0", selected:false, text:""},
    {name: "blue", color:"#0079bf", selected:false, text:""},
    {name: "lightblue", color:"#00c2e0", selected:false, text:""},
    {name: "lightgreen", color:"#51e898", selected:false ,text:""},
    {name: "pink", color:"#ff78cb", selected:false, text:""},
    {name: "black", color:"#344563", selected:false, text:""},
  ])

  const [labelName, setLabelName] = useState("");
  const labels = useSelector(state => state.singleCard.card.labels)
  const {card_id} = useParams();

  const handleColorSelect = (name) => { 
      const temp = defaultColors.map( el => el.name == name ? {...el, selected: true} : {...el, selected: false})
      setDefaultColors(temp)
  }

  const handleCreate = () => {
      const selectedEl = defaultColors.filter( el => el.selected == true);
      console.log("The selectedEl is", selectedEl);
      labels.push({...selectedEl[0], text: labelName})
      dispatch(updateLabels(card_id, labels))
  }

  const handleLabelName = val => {
      setLabelName(val)
  }

  return (
    <>
      <CreateLabelTitle handleShowCreateLabel={handleShowCreateLabel} />
      <div className ={styles.popOverContent}>
            <h4>Name</h4>
            <CreateLabelInput value={labelName} placeholder="" handleLabelName = {handleLabelName}/>
            <div className= {styles.labelSection} >
                <h4>Select a color</h4>
                <div style={{display:"flex", flexWrap:"wrap", marginTop:"8px" }}>
                {defaultColors.map(el => <CreateLabelColorBox handleColorSelect={handleColorSelect} {...el} />)}
                </div>
                <button className={styles.createBtn} onClick = {() => handleCreate()} >Create</button>
            </div>
      </div>
    </> 
  )
}

export default CreateLabel