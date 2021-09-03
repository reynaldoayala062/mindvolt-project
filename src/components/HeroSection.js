import React from 'react'
import '../App.css'

const HeroSection = () => {
    return (
        <div id='container'>
          <div id='strip'></div><br/>
          <img id='rectangular' src={require('../images/pexels-andrea-piacquadio-3807763.jpg').default} alt='hero'/> 
          <div id="hero-title">
            <h1>Safe and smart way to pay online.</h1>
            <h1>For just about everything.</h1>
            <h4>Your FirstBank Visa® Debit Card.</h4>
            <img id='debit-card' src={require('../images/personal_debit_card_firstbank2.png').default} alt=''/> 
          </div>
            
        </div>
    )
}

export default HeroSection
