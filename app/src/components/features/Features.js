import React from 'react'
import './features.css'
import brandImg from '../../images/icon-brand-recognition.svg'
import recordsImg from '../../images/icon-detailed-records.svg'
import customImg from '../../images/icon-fully-customizable.svg'
import Results from '../results/Results'

function Features() {


    return (
        <div className='features-container'>

            <Results/>

            
            <div className="features-title">
                <h2>Advanced Statistics</h2>
                <p>
                    Track how your links are performing across the web with our 
                    advanced statistics dashboard.
                </p>
            </div>

            <div className='feature-cards'>

                <div className="feature-card one">
                    <div className="feature-img-container">
                        <img src={brandImg} alt="brand-recognition" />
                    </div>
                    <h2>Brand Recognition</h2>
                    <p>
                        Boost your brand recognition with each click. Generic links don’t 
                        mean a thing. Branded links help instil confidence in your content.
                    </p>
                </div>

                <div className="feature-card two">
                    <div className="feature-img-container">
                        <img src={recordsImg} alt="detailed-records"/>
                    </div>
                    <h2>Detailed Records</h2>
                    <p>
                        Gain insights into who is clicking your links. Knowing when and where 
                        people engage with your content helps inform better decisions.              
                    </p>
                </div>

                <div className="feature-card three">
                    <div className="feature-img-container">
                        <img src={customImg} alt="fully-customizable" />
                    </div>
                    <h2>Fully Customizable</h2>
                    <p>
                        Improve brand awareness and content discoverability through customizable 
                        links, supercharging audience engagement.
                    </p>
                </div>

            </div>



        </div>
    )
}

export default Features
