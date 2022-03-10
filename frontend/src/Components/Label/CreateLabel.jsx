import React, { useState } from 'react'
import FlexDiv from '../../Styled/FlexDiv'
import styles from "./label.module.css"
import CreateLabelTitle from './CreateLabelTitle'
import LabelSearch from './LabelSearch'
import CreateLabelColorBox from './CreateLabelColorBox'


const CreateLabel = ({handleShowCreateLabel}) => {
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

  const handleColorSelect = (name) => { 
      const temp = defaultColors.map( el => el.name == name ? {...el, selected: true} : {...el, selected: false})
      setDefaultColors(temp)      
  }
  return (
    <>
      <CreateLabelTitle handleShowCreateLabel={handleShowCreateLabel} />
      <div className ={styles.popOverContent}>
            <h4>Name</h4>
            <LabelSearch placeholder="" />
            <div className= {styles.labelSection} >
                <h4>Select a color</h4>
                <div style={{display:"flex", flexWrap:"wrap", marginTop:"8px" }}>
                {defaultColors.map(el => <CreateLabelColorBox handleColorSelect={handleColorSelect} {...el} />)}
                </div>
            </div>
      </div>
    </> 
  )
}

export default CreateLabel