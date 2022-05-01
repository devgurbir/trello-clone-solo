import { useState } from "react";
import styles from "./attachments.module.css"
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { fileUploadThunk } from "../../Redux/Card/actions";
import { useDispatch } from "react-redux";
import ReactS3 from 'react-s3'
import axios from 'axios'
// import { uploadFile } from 'react-s3';
import S3 from 'react-aws-s3';
global.Buffer = global.Buffer || require('buffer').Buffer






const config = {
    bucketName: process.env.BUCKET_NAME,
    region: 'ap-south-1',
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY
,
    // s3Url: 'https:/your-custom-s3-url.com/', /* optional */
  } 

  const ReactS3Client = new S3(config);




const Attachments = ({handleShowPopup}) => {
    console.log(process.env.BUCKET_NAME)
    const dispatch= useDispatch();
    const [selectedFile, setSelectedFile] = useState(false);
    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);        
    }
    const handleUpload = async (file) => {
        const data = await ReactS3Client
    .uploadFile(file, "new")
    .then(data => console.log(data))
    .catch(err => console.error(err))

    console.log(data)
    }

    return (
        <div className={styles.popup}>
            <div className={styles.popupHeaderTitle}>
            <span style={{textAlign:"center"}}>Attachments</span>
            <CloseOutlinedIcon onClick = {() => handleShowPopup(false)} className={styles.popUpHeaderClose} fontSize="small" sx={{color:"#6b778c", textAlign:"right"}}/>
        </div>

            <div className ={styles.popOverContent}>
                <label htmlFor="fileUpload" style={{cursor: "pointer"}}>
                    Computer
                    <input type="file" onChange={handleFileInput} />
                    <button onClick={() => (handleUpload(selectedFile))}>Submit</button>
                </label>
            </div>
        </div>
    )
}

export default Attachments