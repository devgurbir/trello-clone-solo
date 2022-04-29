import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';



const Loading = () => {
  console.log("loading..")
  return (
    
    <div style={{ height: "100%", width: "100%", position: "absolute", zIndex: "100", backgroundColor: "inherit", opacity: "0.5", display: "flex", justifyContent:"center", alignItems:"center"}}>
      <CircularProgress />
    </div>
  )
}

export default Loading