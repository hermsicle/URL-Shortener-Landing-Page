import React from 'react'
import './footer.css'
import fbIcon from '../../images/icon-facebook.svg'
import twitterIcon from '../../images/icon-twitter.svg'
import pinterestIcon from '../../images/icon-pinterest.svg'
import igIcon from '../../images/icon-instagram.svg'
import Logo from '../../images/footer_logo.svg'

function Footer() {
    return (
        <footer>
            <div className='footer-inner'>
                <div className="footer-title">
                    <img src={Logo} alt="footer-logo"/>
                </div>        

                <div className="footer-container features">
                    <h5 className='f-title'>Features</h5>
                    <p>Link Shortening</p>
                    <p>Branded Links</p>
                    <p>Analytics</p>
                </div>
        
                <div className="footer-container resources">
                    <h5 className='f-title'>Resources</h5>
                    <p>Blog</p>
                    <p>Developers</p>
                    <p>Support</p>
                </div>
        
                <div className="footer-container company">
                    <h5 className='f-title'>Company</h5>
                    <p>About</p>
                    <p>Our Team</p>
                    <p>Careers</p>
                    <p>Contact</p>
                </div>

                <div class="social-links">
                    <img src={fbIcon} alt="facebook"/>
                    <img src={twitterIcon} alt="twitter"/>
                    <img src={pinterestIcon} alt="pinterest"/>
                    <img src={igIcon} alt="instagram"/>
                </div>

            </div>
        </footer>
    )
}

export default Footer
