import React from 'react'
import './nav.css'

function Nav() {
    return (
        <div className="nav-mobile-container">
            <ul className='nav-mobile'>
                <li>Features</li>
                <li>Pricing</li>
                <li>Resources</li>
            </ul>
            <div className="login-container-mobile">
                <p>Login</p>
                <button>Sign up</button>
            </div>
        </div>
    )
}

export default Nav
