import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import Boxes from "./Boxes";
import Tutorials from "./Tutorials";
import Footer from "./Footer";
import { Link } from "react-scroll";
function NavBar() {
  const tutorials = useRef(null);
  const support = useRef(null);
  const contact = useRef(null);
  const scrollTosection = (elementRef)=>{
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior:"smooth",
    })
  };
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                <i class="fa-solid fa-crown crown"></i>
                  Landguru
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink 
                        className="nav-link active"
                        aria-current="page"
                        to="/">
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink onClick={()=>scrollTosection(tutorials)} className="nav-link" to="/tutorials">
                        Advertise
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink onClick={()=>scrollTosection(support)} className="nav-link" to="/boxes">
                        Support
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink onClick={()=>scrollTosection(contact)} className="nav-link" to="/contact">
                        Contact
                      </NavLink>
                    </li>
                    </ul>
                    
                  
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
