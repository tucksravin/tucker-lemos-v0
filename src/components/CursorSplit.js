import React from 'react'
import "../styles/tailwind.css"
import { styled } from 'emotion/styled'

const CursorSplit = props => {

  const Div = styled.div`
    
  `



    return (
      <Div className = {props.tW+" animation"}> {props.children} </Div>
    )

}


export default CursorSplit
