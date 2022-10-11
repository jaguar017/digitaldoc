import { React, useState } from "react";
import "./FileSearch.scss";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../FileUpload/FileUpload.scss';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
function FileSearch({files}) {
    const[records,setRecords]=useState([]);
    const filteredProducts=[];
    function searchHandler(event)
    {
        const record=event.target.value;
        setRecords([...records,record])

        axios.get(`http://localhost:8080/upload?name=${record}`)
        .then((res )=> {
            const filteredProducts = files.filter((file) => {
                return file.name.includes(record);
            });
        })
        .catch((err) => console.error(err));

        
    }
  return (
    <div>
     <div>
        <input type="text" id="form1" onChange={searchHandler}  placeholder="search record" style={{backgroundColor:"#ececec"}}/>
        <button type="button" className="search">
            <i>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            </i>
   </button>
   </div>
    <div>
    <div className="results-wrap">
                <ul>
                    {filteredProducts.map((product) => {
                        return <li key={product} className='list-item'><a href='#'>{product}</a></li>
                    })}
                </ul>
            </div>
    </div>
    </div>
  );
}

export default FileSearch;


