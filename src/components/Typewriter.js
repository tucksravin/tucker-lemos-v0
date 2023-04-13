import React, {
  useState,
  useEffect
} from 'react'
import "../styles/tailwind.css"
import "../styles/typewriterCursor.css"

const Typewriter = props => {

  //state
  const [tick, nextTick] = useState(0)
  const [delta, setDelta] = useState(1000)
  const [text, setText] = useState("")
  
  const input = props.children

  var clear;
  
  if(props.clear)
    clear = true;
  else
    clear = false;



  useEffect(() => {
      console.log("mounted")
    },
    []
  )

  useEffect(() => {

      if (props.active !== 0) {
        nextTick(tick => tick + 1)
      }
    },
    [props.active])


  useEffect(() => {
      if (input !== '') {
        if (tick === 1) {
          setText(input.substring(0, tick))
          setDelta(3000)
        } else if (tick < input.length - 1) {
          setText(input.substring(0, tick))
          setDelta(190 - Math.random() * 40)

          if (/\s/.test(input.charAt(tick)))
            setDelta(delta => delta + 15)
        } else if (tick === input.length - 1) {
          setText(input)
          setDelta(3000)
          console.log('pause')
        } else if (tick <= input.length + 2 && tick <= input.length * 2) {
          setText(input.substring(0, input.length * 2 - tick))
          setDelta(150)
        } else if (tick <= input.length + 10 && tick <= input.length * 2) {
          setText(input.substring(0, input.length * 2 - tick))
          setDelta(80)
        } else if (tick <= input.length * 2) {
          setText(input.substring(0, input.length * 2 - tick))
          setDelta(45)
        } else {
          nextTick(0)
        }


        //clears all timeouts in the case of overlap from random
        var id = window.setTimeout(function() {}, 0);

        while (id--) {
          window.clearTimeout(id);
        }


        if (tick > 0 && (tick <= input.length || (tick <= input.length * 2 && clear))) {
          console.log("call again, tick = " + tick + " \n and delta = " + delta)
          setTimeout(
            () => nextTick(tick => tick + 1),
            delta
          )
        }
      }
    },
    [tick]
  )





  return ( <
    div className = {
      props.tW + " 2xl"
    }
    id = "typewriter" > {
      text
    } < /div>
  )
}

export default Typewriter
