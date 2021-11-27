import React, { useRef, useState } from 'react'
import Page from "../components/Page"
import Typewriter from "../components/Typewriter"
import "../styles/tailwind.css"



export default function Home() {

const [typing, startTyping] = useState(0)



const sgRef = useRef()
const sgActive = () => sgRef.current.toggleFromLanding()


const wRef = useRef()
const wActive = () => {
  wRef.current.toggleFromLanding()
  startTyping(1)
}

const dRef = useRef()
const dActive = () => dRef.current.toggleFromLanding()

  return (
    <>
    <div className="bg-gray-700 z-0 h-screen flex items-center">


      <button
        className="relative bg-blue-300 hover:bg-blue-400 text-center w-32 text-gray-700 rounded-lg shado-lg cursor-pointer duration-150 mx-auto"
        onClick={sgActive}
        >
        left
      </button>
      <button
        className="relative bg-blue-300 hover:bg-blue-400 text-center w-32 text-gray-700 rounded-lg shado-lg cursor-pointer duration-150 mx-auto"
        onClick={dActive}
        >
        bottom
      </button>
      <button
        className="relative bg-blue-300 hover:bg-blue-400 text-center w-32 text-gray-700 rounded-lg shado-lg cursor-pointer duration-150 mx-auto"
        onClick={wActive}
        >
        right
      </button>
      </div>



   <Page ref={sgRef} tW="bg-blue-300" side="left">
     <h1 className = "container w-64 mx-auto mt-6 text-white text-center shadow-sm rounded-sm bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">scene play and storygames</h1>
   </Page>


   <Page ref={wRef} tW="bg-gray-900" side="right">
      <Typewriter tW="text-white" text="I should be written and deleted." active={typing}/>
   </Page>



  <Page ref={dRef} tW="bg-red-500" side="bottom">
   <h1 className="container w-64 mx-auto mt-6 text-white shadow-sm text-center rounded-sm bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500" >web development</h1>
 </Page>
    </>
)
}
