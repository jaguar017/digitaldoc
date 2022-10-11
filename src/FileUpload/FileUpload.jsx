import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './FileUpload.scss'
import axios from 'axios'
function FileUpload({files,setFiles,removeFile}) {
     function uploadHandler(event){
        const file = event.target.files[0];
        if(!file) return;
        file.isUploading=true;
        setFiles([...files,file])

        //upload file
        const formData= new FormData();
        formData.append(
            "newFile",
            file,
            file.name
        )

        axios.post('http://localhost:8080/upload',formData)
        .then((res) => {
            file.isUploading = false;
            setFiles([...files,file])
        })
        .catch((err) =>{
            console.error(err)
            removeFile(file.name)

        })
     }
  return (
    <div>
        <div className='file-card'>
            <div className="file-inputs">
                <input type="file" onChange={uploadHandler}/>
                <button>
                    <i>
                        <FontAwesomeIcon icon={faPlus} />
                    </i> Upload
                </button>
            </div>
            <p className="main">Support files</p>
            <p className="info">PDF</p>
        </div>
    </div>
  )
}

export default FileUpload