
import React from 'react';
import profile from '../images/video.mp4'; // Make sure to use the correct path
import facebook from '../images/facebook-logo.png'; // Replace with your actual Facebook logo path
import instagram from '../images/instagram-logo.png'; // Replace with your actual Instagram logo path
import twitter from '../images/twitter-logo.png'; // Replace with your actual Twitter logo path

function Footer() {
  return (
    <footer className="footer bg-color py-4">
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex align-items-center justify-content-end">
            <h6>&copy; All rights reserved by @WEB3MKR</h6>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            {/* Use 'img' instead of 'image' */}
            <img src={profile} alt="profile" />
          </div>
          <div className="social-icons col-sm-12 col-md-6 col-lg-6">
            {/* Move the social icons div to the correct position */}
            <img src={facebook} alt="Facebook" />
            <img src={instagram} alt="Instagram" />
            <img src={twitter} alt="Twitter" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
