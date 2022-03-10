import React, { useState } from 'react'
import styles from "./cover.module.css"
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import CoverColorBox from "./CoverColorBox"
import { updateCover } from '../../../Redux/Card/actions';

const CoverWrapper = ({handleShowPopup}) => {
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
    <div className={styles.popup}>
        <div className={styles.popupHeaderTitle}>
            <span style={{textAlign:"center"}}>Cover</span>
            <CloseOutlinedIcon onClick = {() => handleShowPopup(false)} className={styles.popUpHeaderClose} fontSize="small" sx={{color:"#6b778c", textAlign:"right"}}/>
        </div>
        <div className= {styles.labelSection} >
                <h4>Colors</h4>
                <div style={{display:"flex", flexWrap:"wrap", marginTop:"8px" }}>
                {defaultColors.map(el => <CoverColorBox handleColorSelect={handleColorSelect} {...el} />)}
                </div>
            </div>
    </div>
  )
}


export default CoverWrapper