import React from 'react'
import '../styles/tailwind.css'
import { styled } from 'emotion/styled'

const TEMPLATE =  props => {

    //add any css here
    const Div = styled.div`
      
    `

    return (
      <Div className = {props.tW+" "}> </Div>
    )

}

export default TEMPLATE
