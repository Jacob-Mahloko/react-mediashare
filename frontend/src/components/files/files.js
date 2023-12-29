import React from 'react'
import './files.css'
export default function Files({fName,Ftype,date}) {
  return (
    <div className='Files'>
        <hr/>
        <h4>Filename:{fName}</h4>
        <h4>Type of files: {Ftype}</h4>
        <h4>Date uploaded: {date}</h4>
        <hr/>
    </div>
  )
}
