import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
    <div className="footer w-100">
      <div className='row justify-content-center mx-4' style={{borderBottom:'solid 1px #000000',padding:'60px 0'}}>
        <div className='col col-12 col-md-3 mb-4 mb-md-0 text-center text-md-start'><h1>CastME</h1></div>
        <div className='col col-12 col-md-3 mb-4 mb-md-0'>
          <ul><h5>Column One</h5>
            <li><a href="#">Link One</a></li>
            <li><a href="#">Link Two</a></li>
            <li><a href="#">Link Three</a></li>
            <li><a href="#">Link Four</a></li>
            <li><a href="#">Link Five</a></li>
          </ul>
        </div>
        <div className='col col-12 col-md-3 mb-4 mb-md-0'>
          <ul><h5>Column Two</h5>
            <li><a href="#">Link Six</a></li>
            <li><a href="#">Link Seven</a></li>
            <li><a href="#">Link Eight</a></li>
            <li><a href="#">Link Nine</a></li>
            <li><a href="#">Link Ten</a></li>
          </ul>
        </div>
        <div className='col col-12 col-md-3'>
          <ul><h5>Follow Us</h5>
            <li><a href="#"><i className="fa-brands fa-facebook f-icon"></i>Facebook</a></li>
            <li><a href="#"><i className="fa-brands fa-instagram f-icon"></i>Instagram</a></li>
            <li><a href="#"><i className="fa-brands fa-x-twitter f-icon"></i>X</a></li>
            <li><a href="#"><i className="fa-brands fa-linkedin f-icon"></i>LinkedIn</a></li>
            <li><a href="#"><i className="fa-brands fa-youtube f-icon"></i>YouTube</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="container mt-3">
      <div className="row justify-content-between">
        <div className="col col-12 col-md-auto text-center text-md-start mb-2 mb-md-0">
          <p>© 2024 INFOLITZ. All rights reserved.</p>
        </div>
        <div className="col col-12 col-md-auto">
          <ul className="list-inline text-center text-md-end">
            <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
            <li className="list-inline-item"><a href="#">Terms Of Service</a></li>
            <li className="list-inline-item"><a href="#">Cookies Settings</a></li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer
