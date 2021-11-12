import React from 'react'
import '../styles/tailwind.css'
import useWindowDimensions from '../utils/useWindowDimensions'

//start with just left

export default function Page(props){
    const { height, width } = useWindowDimensions();



  return (
    <div className="w-screen absolute -left-full">
      {props.children}
    </div>
  )
}
