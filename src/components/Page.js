import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react'
import useWindowDimensions from '../utils/useWindowDimensions'
import { useSpring, animated } from 'react-spring'
import '../styles/tailwind.css'
import * as icons from '../styles/icons.modules.css'

//start with just left

//props: tW for classes to add to tailwind, side for where it lives offscreen

function Page(props, ref){

    const [active, toggleActive] = useState(true)

    const { height, width } = useWindowDimensions()

    useImperativeHandle(ref, () => ({
      toggleFromLanding(){
        toggleActive()
      }
    }),[])

    let pagePosPreSpring
    let backBarPos
    let arrowTx

    if(props.side==='left'){
      pagePosPreSpring = {
        left: active ? -width : 0,
        top: 0
      }
      backBarPos= "h-full w-12 inset-y-0 right-0 transform hover:scale-x-125 hover:-translate-x-0.25"
      arrowTx= " scale-y-125 rotate-180 mt-4"

    }
    else if (props.side==='right') {
      pagePosPreSpring = {
        left: active ? width : 0,
        top: 0
      }

      backBarPos= "h-full w-12 inset-y-0 left-0 transform hover:scale-x-125 hover:translate-x-0.25"
      arrowTx= " scale-y-125 mt-4"
    }
    else if (props.side==='bottom') {
      pagePosPreSpring = {
        left: 0,
        top: active ? height : 0,
      }

      backBarPos = "w-full h-12 inset-x-0 top-0 transform hover:scale-y-125 hover:translate-y-0.25"
      arrowTx= " scale-y-125 rotate-90 m-auto"
    }

    const pos = useSpring(pagePosPreSpring);



  return (
    <animated.div className={props.tW+" w-screen min-h-screen fixed z-10 pt-4 md:pt-8"} style={pos}>

      <div
        className={backBarPos+" items-center cursor-pointer absolute bg-black bg-opacity-5 transition ease-in-out duration-500 hover:bg-opacity-25  "}
        onClick={toggleActive}
      >
      <svg
      className={" opacity-80 transform "+ arrowTx}
      width="3rem"
      height="3rem"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
  <path
    d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z"
    fill="white"
  />
</svg>
    </div>
      {props.children}
    </animated.div>
  )
}

export default forwardRef(Page)
