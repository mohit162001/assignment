import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'
import Question from "./Question";

const Footer = () => {
  <Question/>
  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="foot-container">
              <div className="footer-links">
                <div className="footer-link-wrapper">
                  <div className="footer-link-items">
                    <h2>About us</h2>
                    <Link>Support Centre</Link>
                    <Link>Customer Support</Link>
                    <Link>About us</Link>
                    <Link>Copyright</Link>
                    <Link>Popular Campaign</Link>
                  </div>
                  <div className="footer-link-items">
                    <h2>Our Information</h2>
                    <Link>Return Policy</Link>
                    <Link>Privacy Policy</Link>
                    <Link>Terms & conditions</Link>
                    <Link>Site Map</Link>
                    <Link>Store Hours</Link>
                  </div>
                
               
                  <div className="footer-link-items">
                    <h2>My Account</h2>
                    <Link>Press inquiries</Link>
                    <Link>Social media </Link>
                    <Link>Directions</Link>
                    <Link>Images & B-roll</Link>
                    <Link>Permissions</Link>
                  </div>
                  <div className="footer-link-items">
                    <h2>Policy</h2>
                    <Link>Application security</Link>
                    <Link>Software Support</Link>
                    <Link>Unwanted Software</Link>
                    <Link>Responsible supply</Link>
                  </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
