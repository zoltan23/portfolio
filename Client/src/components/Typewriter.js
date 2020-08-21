import React, { useEffect, useState } from 'react'
import './Typewriter.css'

export default function Typewriter({str}) {
  
    const [{ content, cnt }, setContent] = useState({ content: '', cnt: 0 })

    //Sets the typewriter speed 
    const randomNum = () => Math.random() * 425

    const Test = () => {
        useEffect(() => {
            if (cnt < str.length) {
                setTimeout(() => {
                    setContent({ content: content + str[cnt], cnt: cnt + 1 })
                }, randomNum())
            }
        }, [])

    return <span className="typewriter">{content}<span className="cursor">|</span></span>}

    return (
        <Test {...{ str }} />
    )
}

//Why does this not work?

// export default function Typewriter() {
//      const [content, setContent] = useState('')
//      const [i, setI] = useState(0)
//      const str = "This is a test!"
//      const Test = (props) => {
 
//          useEffect(() => {
//              console.log("Use effect called!")
 
//              if (cnt < 10) {
//                  setTimeout(() => {
//                      console.log("Set timeout called")
//                      console.log('conente', cnt)
//                      setContent(prevState => prevState + 'a')
//                      setI(i + 1)
//                      console.log('i', i)
//                  }, 1000)
 
//              }
//          }, [])
 
//      return <div>{content}</div>}
 
//      return (
//          <Test {...{ str }} />
//      )
//  }
