import React, { useEffect, useRef, useState, useImperativeHandle } from 'react'
import styled from 'styled-components'
import './InputField.css'

export default function InputField({name, type, placeholder, value, onUpdateInput }) {

    const [isInputValid, setIsInputValid] = useState(null)
    const inputRef = React.useRef();
         
    const getInput = (e) => {
        onUpdateInput(e.target.value, name)
        e.target.value.length > 0 ? setIsInputValid(true) : setIsInputValid(false)

        if (e.target.value.length > 0) {
            setTimeout(() => {
                setIsInputValid(null)
            }, 3000)
        }
    }

    useEffect(() => {
         console.log('[inputField] inputRef', inputRef.current.value)
    }, [isInputValid])

  

    const getValidString = (stateBool) => {

        if (stateBool === null)
            return "form-control"
        return stateBool ? "is-valid" : "is-invalid"
    }

    let feedback;
    switch (isInputValid) {
        case null:
            feedback = <div></div>
            break;
        case true:
            feedback = <div className="valid-feedback">Good!</div>
            break;
        case false:
            feedback = <div className="invalid-feedback">Please provide a valid {name}!</div>
            break;
    }

    return (
        <div>
            <input ref={inputRef} type={type} name={name} value={value} className={getValidString(isInputValid)} placeholder={placeholder} onChange={getInput} />
            {feedback}
        </div>
    )
}