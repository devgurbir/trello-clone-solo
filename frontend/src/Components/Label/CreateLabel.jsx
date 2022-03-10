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
    {name: "green", color:"#61bd4f", selected:false},
    {name: "yellow", color:"#f2d600", selected:false},
    {name: "orange", color:"#ff9f1a", selected:false},
    {name: "red", color:"#eb5a46", selected:false},
    {name: "purple", color:"#c377e0", selected:false},
    {name: "blue", color:"#0079bf", selected:false},
    {name: "lightblue", color:"#00c2e0", selected:false},
    {name: "lightgreen", color:"#51e898", selected:false},
    {name: "pink", color:"#ff78cb", selected:false},
    {name: "black", color:"#344563", selected:false},
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
      labels.push({...selectedEl[0]})
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