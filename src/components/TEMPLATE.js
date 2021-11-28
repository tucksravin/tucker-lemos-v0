import React from 'react'
import '../styles/tailwind.css'
import { styled } from 'emotion/styled'

const TEMPLATE =  props => {

    const Div = styled.div`
      /*
        write any css here
      */
    `

    return (
      <Div className = {props.tW+" "}> </Div>
    )

}

export default TEMPLATE
