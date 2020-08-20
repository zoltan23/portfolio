import React, { useEffect, useRef, useState } from 'react'
import './Test.css'

export default function Test() {

    const inputRef = useRef()

    const [valid, isValid] = useState(false)
    const [validClass, setValidClass] = useState('')

    const [userInput, setUserInput] = useState({
        input1: '',
        input2: '',
        input3: ''
    })

    useEffect(() => {
       //Object.values(userInput).
    }, [userInput])

    const getUser = (e) => {
        const name = e.target.name
        const value = e.target.value
        setUserInput(prevState =>  ({...prevState, [name]: value}))
        console.log('userInput', userInput)
    
    }

    const onSubmit = () => {
        setValidClass('valid')
    }

    return (
        <div id="test">
            <input className={validClass} ref={inputRef} type="text" name="input1" placeholder="input 1" onChange={getUser}/>
            <input ref={inputRef} type="text" name="input2" placeholder="input 2" onChange={getUser}/>
            <input ref={inputRef} type="text" name="input3" placeholder="input 3" onChange={getUser}/>
            <button onClick={onSubmit}>Submit</button>
        </div>
    )
}
