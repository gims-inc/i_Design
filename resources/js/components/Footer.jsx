import React,{ Component }  from 'react'
import {FaLinkedinIn ,FaDribbble,FaFacebookF,FaTwitter,FaInstagram,FaBehance} from 'react-icons/fa'



import '../../css/footer.css';

function Footer() {
  return (
    <div className='footer'>

        <h6 className='hy text-center'>iDesign</h6>

        <div className='gh'>
          <h5 className='talk'>Let`s Talk</h5>
          <h6 id="together">We'd love to learn more about you and what we can design and build together.</h6>
        </div>

        <div className='icons'>
            <a href="" target="blank" className=''><FaDribbble /></a>
            <a href="" target="blank" className=''><FaLinkedinIn /></a>
            <a href="" target="blank" className=''><FaTwitter /></a>
            <a href="" target="blank" className=''><FaFacebookF /></a>
            <a href="" target="blank" className=''><FaInstagram /></a>
            <a href="" target="blank" className=''><FaBehance /></a>
            
        </div>

        <div className='client'>
          <h5>Become a client </h5>

          {/* <br /> */}

          <a href="mailto:info@iDesign.co.ke"><span><h6>info@iDesign.co.ke</h6></span></a>

        </div>

        <div className="lastline">
          <h5 className='copy'>&copy; 2023 iDesign | All rights reseved</h5>

          <h5 className='locale'>Nairobi, Kenya </h5>
        </div>

    </div>
  )
}

export default Footer
