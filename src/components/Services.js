import React from 'react'
import '../App.css'

const Services = () => {
    return (
        <div id='services-container'>
            <div id='service'>
                <img id='service-image' src={require('../images/undraw_my_app_re_gxtj (1).svg').default} alt='' />
                <h1>Cell phone bills</h1>
                <p>Take care of your monthly payments online, with ease</p>
            </div>
            <div id='service'>
                <img id='service-image' src={require('../images/undraw_Listening_re_c2w0.svg').default} alt='' />
                <h1>Streaming services</h1>
                <p>Pay for subcription such as music, movies and TV streaming</p>
            </div>
            <div id='service'>
                <img id='service-image' src={require('../images/undraw_sweet_home_dkhr.svg').default} alt='' />
                <h1>Utilities</h1>
                <p>It's simple to pay utility bills online, from water to electric</p>
            </div>
            
        </div>
    )
}

export default Services
