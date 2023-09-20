import React from 'react'
import Cell from "./cell.jsx"
function Input(prop) {
    const row=[]
    for(let i=0;i<3;i++){
        row.push(<Cell key={`${prop.row} ${prop.column_start} ${i}`} row={prop.row} col={prop.column_start*3 + i}/>)
    }
  return (
    <>
    <tr>
        {row}
    </tr>
    </>
  )
}
export default Input