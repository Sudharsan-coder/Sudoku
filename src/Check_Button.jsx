import React, { useState } from 'react'
function Button() {
    const [board_validation,set_board_validation]=useState("")
    function Validity(i,j,val,main_board){
        for(let k=0;k<9;k++){
            if(k!==j && main_board[i][k]===val) //column
                return [false,`The value ${val} at row ${i+1} is duplicated`]
            if(k!==i && main_board[k][j]===val)  //row
                return [false,`The value ${val} at column ${j+1} is duplicated`]
        }
        let box_row=Math.floor(i/3)*3
        let box_col=Math.floor(j/3)*3
        for(let i1=0;i1<3;i1++)
            for(let j1=0;j1<3;j1++){
                let current_row=box_row+i1;
                let current_col=box_col+j1;
                if(current_row!==i && current_col!==j && main_board[current_row][current_col]===val)
                    return [false,`The value ${val} at row ${i+1} and column ${j+1}  matches with row ${current_row+1} and column ${current_col+1}`]
            }
        return [true,"It is a correct answer"]
    }
    function check(){
        let ans="It is a correct answer"
        let main_board=JSON.parse(localStorage.getItem("board"))
    loop1:for(let i=0;i<9;i++)
            for(let j=0;j<9;j++){
                let arr=Validity(i,j,main_board[i][j],main_board)
                if(main_board[i][j]!==0 && (!arr[0])){
                   ans=arr[1]
                   break loop1;
                }
            }
        console.log(board_validation)
        set_board_validation(ans)
    }
  return (
    <>
    <button onClick={check}>Check</button>
    <div>{board_validation}</div>
    </>
  )
}

export default Button