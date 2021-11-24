import React, {useState, useEffect, useRef} from 'react'
import "../styles/tailwind.css"


export default function Typewriter(props) {

  const [tick, nextTick] = useState(0)
  const [delta, setDelta] = useState(1000)
  const [text, setText] = useState("")
  const input = props.text

  useEffect(()=> {
      console.log("mounted")
      console.log(text)
    },
    []
  )

  useEffect(()=> {
    if(props.active){
      console.log("start ticker")
      nextTick(tick=>tick+1)
    }
  },
[props.active])


  useEffect(()=> {

    if(tick<input.length-1){
      setText(input.substring(0, tick))
      setDelta( 200 - Math.random() * 100 )
    }
    else if(tick==input.length-1){
      setText(input)
      setDelta(2200)
      console.log('pause')
    }
    else if(tick==input.length||tick==input.length+1){
      setText(input.substring(0, input.length*2-tick))
      setDelta(300)
    }
    else if(tick<=input.length*2){
      setText(input.substring(0, input.length*2-tick))
      setDelta(120)
      }


      //clears all timeouts in the case of overlap from random
      var id = window.setTimeout(function() {}, 0);

      while (id--) {
        window.clearTimeout(id);
      }


    if(tick<=input.length*2){

      console.log("call again, tick = "+tick +" \n and delta = "+delta)
      setTimeout(
        ()=>nextTick(tick=>tick+1),
        delta
      )
    }


    },
    [tick]
  )




/*

  const ticker = function(){
    console.log(input.length)
    nextTick(tick=>tick+1)

    if(tick<input.length){
      setText(input.substring(0, tick))
      setDelta( 200 - Math.random() * 100 )
    }
    else if(tick<=input.length*2){
      setText(input.substring(0, input.length*2-tick))
      setDelta(500)
      }

    if(tick!==input.length*2){

      console.log("call again, tick = "+tick)
      setTimeout(
        ()=>ticker(),
        delta
      )
    }
    else {
      clearTimeout()
    }

  }
  */




  return(
    <h2 className={"text-center "+props.tW}> {text} </h2>
  )
}
