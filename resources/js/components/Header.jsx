import React from 'react';
import { Link } from 'react-router-dom';

import '../../css/header.css';

function Header() {
  return (
    <div>
      
       <nav className='' >

        {/* <a class="nav-item nav-link text-warning" href="#">Work</a>
        <a class="nav-item nav-link text-warning" href="#">About</a>
        <a class="nav-item nav-link text-warning" href="#">Service</a>
        <a class="nav-item nav-link text-warning" href="#">Contact</a> */}
        <ul className="nav navbar">

          <li className="logo">
          {/* <a  href="/">Logo</a> */}
          <Link to="/">logo</Link>
          </li>
        
          <ul className='links'>

              <li className="work ">
                <Link to="/">Home</Link>
              </li>
            
              <li className="services">
                <Link to="/services">Services</Link>
              </li>

              {/* <li className="careers">
                {/* <Link to="/careers">Careers</Link> */}
              {/*</li> */}

              <li className="about">
                <Link to="/about">About</Link>
              </li>

            </ul>

          <li>
           <button className='get-in-touch'>Get in touch</button>
          </li>

        </ul>
        
      </nav>
    </div>

  )
}

export default Header