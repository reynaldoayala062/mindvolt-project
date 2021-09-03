import React from 'react'
import '../App.css'

const HeroSection = () => {
    return (
        <div id='container'>
          <div id='strip'></div>
          <img id='rectangular' src="https://mindvolt-project.s3.us-east-2.amazonaws.com/pexels-andrea-piacquadio-3807763.jpg" alt='hero'/> 
          <div id="hero-title">
            <h1>Safe and smart way to pay online.</h1>
            <h1>For just about everything.</h1>
            <h4>Your FirstBank Visa® Debit Card.</h4>
            <img id='debit-card' src="https://mindvolt-project.s3.us-east-2.amazonaws.com/personal_debit_card_firstbank2.png" alt=''/> 
          </div>
            
        </div>
    )
}

export default HeroSection
