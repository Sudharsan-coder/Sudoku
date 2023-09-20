import React from 'react'
import Row from "./Row"
export default function table(prop) {
    let table=[]
    for(let i=0;i<3;i++)
        table.push(<Row key={`${prop.row_start} ${prop.column_start} ${i}`} col={i} column_start={prop.column_start} row={prop.row_start*3+i}/>)
  return (
    <>
    <table style={{margin:"10px"}}>
      <tbody>
        {table}
      </tbody>
    </table>
    </>
  )
}
