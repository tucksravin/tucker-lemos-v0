import React from 'react'
import Page from "../components/Page"
import "../styles/tailwind.css"


function slideIn(targetID)
{

}

export default function Home() {

let activePage;

  return (
    <>
    <div className="bg-gray-600 z-0 h-screen flex items-center">
      <button
        className="relative bg-blue-300 hover:bg-blue-400 text-center w-32 text-gray-700 rounded-lg shado-lg cursor-pointer duration-150 mx-auto"
        onClick={()=>
          {

          }
        }
        >
        Slide in
      </button>
   </div>
    <Page  className="bg-red-900 z-10 h-screen">
      <h1 className = "container sm mx-auto mt-4 text-white shadow-sm rounded-sm bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">height</h1>
    </Page>
    </>
)
}
