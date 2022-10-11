import { faFileAlt, faSpinner, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './FileItem.scss'
function FileItem({file,deleteFile}) {
  return (
    <div>
    <li className="list-item" key={file.name}>
        <FontAwesomeIcon icon={faFileAlt} /> 
        <p>{file.name}</p>
        <div className='actions'>
            <div className='loading'></div>
            {file.isUploading && 
            <FontAwesomeIcon icon={faSpinner} className="fa-spin"
            onClick={()=> deleteFile(file.name)}/>
          }
          {!file.isUploading &&
            <FontAwesomeIcon icon={faTrash}
            onClick={() => deleteFile(file.name)} />
          }
        </div>
    </li>
    </div>
  )
}

export default FileItem