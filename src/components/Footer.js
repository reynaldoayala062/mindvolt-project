import React from 'react'
import '../App.css'

const Footer = () => {
    return (
        <div id='footer-container'>
            <div id='footer-logos'>
                <img src="https://mindvolt-project.s3.us-east-2.amazonaws.com/firstbank-logo-2016.png" alt='' width='15%'/>
                <img src='https://mindvolt-project.s3.us-east-2.amazonaws.com/Visa-Logo.png' alt='' width='10%'/>
            </div><br/>
            <div id='footer-text'>
                <p>*Visa's Zero Liability Policy does not apply to certain commercial card and anonymous prepaid card transaction or transactions not processed by Visa. Cardholders must use care in protecting their card and notify their issuing financial institution immediately of any unauthorized use. Contact your Issuer for more detail.
                </p>
            </div>
            
        </div>
    )
}

export default Footer
