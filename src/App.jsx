import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
import In from './In';


function App() {
  const URL = `http://localhost:5000/profiles`;
  const [count, setCount] = useState([]);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(true);


const example = async () =>{
 /*  count.current=[] */
  const {data} = await axios.get(URL);
  count.push(...data)
  setOpen(true)
  console.log(data);
 
}

example()



  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {
        open ?
      <div className="card">
        {
          count.map((e, index)=>  <p key={index}>{e.name}</p>)
        }
       
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

        :null
      }
     
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <In/>
    </>
  )
}

export default App
