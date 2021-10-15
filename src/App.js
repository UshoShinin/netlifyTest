import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { saveAs } from 'file-saver';
const App=()=> {
  const [value,setValue] = useState('');
  const createFile = () =>{
    const blob = new Blob([value],{type:'text/plain;charset=utf-8'});
    saveAs(blob,'archivoTest.txt');
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Area de texto</h1>
        <textarea value={value} onChange={(e)=>{setValue(e.target.value)}}>

        </textarea>
        <button onClick={createFile}>Guardar</button>
      </header>
    </div>
  );
}

export default App;
