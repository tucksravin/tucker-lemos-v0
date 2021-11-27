import React from 'react'
import "../styles/tailwind.css"


const CursorSplit = props => {



    return (
      <div className = {props.tW+" animation"}> {props.children} </div>
    )

}


export default CursorSplit
