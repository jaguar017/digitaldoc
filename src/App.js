import { useState } from 'react';
import './App.css';
import FileUpload from './FileUpload/FileUpload.jsx';
import FileList from './FileList/FileList';
function App() {
  const [files,setFiles]= useState([])

  function removeFile(filename){

    setFiles(files.filter(file => file.name !== filename))
  }
  return (
    <div className="App">
      <p className='title'>Upload File</p>
      <h1> hi hii Hello </h1>
      <FileUpload files={files} setFiles={setFiles} removeFile={removeFile}/>
      <FileList files={files} removeFiles={removeFile} />
    </div>
  );
}

export default App;
