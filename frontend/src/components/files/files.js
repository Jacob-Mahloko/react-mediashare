import React from 'react'
import { useState } from 'react'
import './files.css'
export default function Files(/*{fName,Ftype,date}*/) {
  
  const [item,itemFunction] = useState()
  const [state,stateFunction] = useState([])
  return (
    <div className='Files'>
        {/*<hr/>
        <h4>Filename:{fName}</h4>
        <h4>Type of files: {Ftype}</h4>
        <h4>Date uploaded: {date}</h4>
        <hr/>*/}
        <input type='text' onChange={(event)=>{
          itemFunction(event.target.value)
          console.log(item)}}/>
        <button type='submit' onClick={()=>{
          stateFunction([...state,item])
          console.log(state)
          itemFunction('')
        }} >Add to Cart</button>

        {state.map((value,key)=>{
          return <h2 key={key}>{value}</h2>
        })}
    </div>

    
  )
}
