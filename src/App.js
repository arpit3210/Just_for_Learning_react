import React,{useState} from 'react'
import './App.css';
// import About from './About'

import Contact from './Contact'
function App() {
  // let data ="Use of state"


  const [Name, setName]= useState("Arpit")
  return (
    <div className="App">
      <h1>Hello from react</h1>
      {/* <About   Name={Name}/> */}
       
       {/* <h1>{data}</h1> */}
      <Contact  Name={Name}/>


      <button onClick={()=>{setName("Arpit Singh") }}>Change full name</button>
    </div>
  );
}

export default App;
