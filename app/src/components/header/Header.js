import React, {useContext} from 'react'
import Logo from '../../images/logo.svg'
import './header.css'
import {Context} from '../Context'

function Header() {

    const {toggleMenu} = useContext(Context)
    const {menuOpen} = useContext(Context)

    return (
        <header>
            <img className='logo' src={Logo}></img>
            <i  
                onClick={() => toggleMenu()}
                className="fas fa-bars nav-btn" id='nav-btn'
            ></i>
            <ul className='nav'>
                <li>Features</li>
                <li>Pricing</li>
                <li>Resources</li>
            </ul>
            <div className="login-container">
                <p>Login</p>
                <button>Sign up</button>
            </div>
        </header>
    )
}

export default Header
