import React from 'react'
import '../App.css'

const TextSection = ({title, paragraph}) => {
    return (
        <div id='text-container'>
            <h1>{title}</h1>
            <p>{paragraph}</p>
        </div>
    )
}

export default TextSection
