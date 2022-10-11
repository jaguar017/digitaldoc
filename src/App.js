import { useState } from 'react';
import './App.css';
import FileUpload from './FileUpload/FileUpload.jsx';
import FileList from './FileList/FileList';
import FileSearch from "./FileSearch/FileSearch.jsx"
function App() {
  const [files,setFiles]= useState([])

  function removeFile(filename){

    setFiles(files.filter(file => file.name !== filename))
  }
  console.log(files)
  return (
    <div className="App">
      <p className='title'>Upload File</p>
      <FileUpload files={files} setFiles={setFiles} removeFile={removeFile}/>
      <FileSearch files={files}/>
      <FileList files={files} removeFiles={removeFile} />
    </div>
  );
}

export default App;
