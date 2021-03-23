import React from 'react'
import './hero.css'
import heroImg from '../../images/illustration-working.svg'

function Hero() {
    return (
        <div className='hero-section'>
            <img className='hero-image' src={heroImg}></img>
            <div className="hero-title-section">
                <h1>More than just shorter links</h1>
                <h2> Build your brand’s recognition and get detailed insights 
                    on how your links are performing.
                </h2>
                <button>Get Started</button>
            </div>
        </div>
    )
}

export default Hero
