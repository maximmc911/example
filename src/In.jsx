import axios from 'axios';
import React, { useState } from 'react'

const In = () => {
    const URL = `http://localhost:5000/profiles`;
    const [use, setUse] = useState(``);
    const  HandleSent = async () =>{
        let aaaa ={
         
          "name": use,
          "position": "Chief Auditor",
          "contract": true,
          "job description": "Manages internal audit functions, assesses financial risk, and provides recommendations for improving organization performance and compliance."
        }
        await axios.post(URL, aaaa);
        setOpen2(true)
        setUse(``)
      }
       const handleWrite = (e)=>{
        setUse(e.target.value)
      
       }
  return (
    <div>
 <input type="text" value={use} onChange={(e) => handleWrite(e)}/>
      <button onClick={()=> HandleSent()}>Отправить</button>


    </div>
  )
}

export default In