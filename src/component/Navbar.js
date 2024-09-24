import React, {useState,useEffect } from "react";
import logo from './img/homelogo.svg'
import { Link ,useLocation} from "react-router-dom";
export default function Navbar() {
 
  const[background,setBackground] = useState(false)
   
  const changeBackground = () =>{
    if(window.scrollY >= 20)
      setBackground(true)
    else
    setBackground(false)

  }
  window.addEventListener('scroll',changeBackground)
  let location = useLocation();
  useEffect(()=>{
 setTimeout(()=>{
  const element = document.getElementById("navbarSupportedContent");
  if(element.classList.contains('show')){
    element.classList.remove('show');
  }
 },700)
  },[location])



  return (
    <div>
      <nav
        className={`navbar ${background?'bactive':''} navbar-expand-lg fixed-top`}
       
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
          <b>
            EAT
            <img
              src={logo}
              alt="Logo"
              width="60"
              height="26"
              className="d-inline-block align-text-top "
            />
            WELL
            </b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span  className="healthtips">Healthy Recipes</span>
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/quick_easy">
                      Quick & Easy
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/breakfastbrunch">
                      Breakfast & Brunch
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Lunch
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/header">
                      Appetizers
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Smoothies
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                 <span className="healthtips"> Special Diets</span>
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/">
                      High-Protein
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Weight-Loss
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Anti-Inflammatory
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  <span className="healthtips">Healthy Lifestyles</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/news">
                  <span className="healthtips">News </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/about">
                  <span className="healthtips">About us</span>
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{border:'#f8912b  1px solid',backgroundColor:'transparent'}}
              />
              <button className="btn btn-outline-warning" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      
    </div>
  );
}
