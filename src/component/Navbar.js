import React, {useState,useEffect } from "react";
import logo from './img/homelogo.svg'
import { Link ,useLocation} from "react-router-dom";

export default function Navbar() {
 
  const[background,setBackground] = useState(false)
   const device = window.matchMedia("(max-width: 990px)").matches;
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
 },400)
  },[location])



  return (
    <div >
    
      <nav
        className={`navbar navbar-expand-lg fixed-top `}
        style={background?{backgroundColor:'whitesmoke'}:{backgroundColor:"inherit"}}
      >
        <div className="container-fluid ">
          <Link className="navbar-brand " to="/">
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
          
          <div className={`collapse navbar-collapse ${device?'bg-light px-3 my-2 shadow rounded':'' }`} id="navbarSupportedContent" >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <Link
                  className={`nav-link dropdown-toggle `}
                  
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span  className="healthtips ">Healthy Recipes</span>
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className={`dropdown-item  ${location.pathname==="/quick_easy"?"active":""}`} to="/quick_easy">
                      Quick & Easy
                    </Link>
                  </li>
                  <li>
                    <Link className={`dropdown-item  ${location.pathname==="/breakfastbrunch"?"active":""}`} to="/breakfastbrunch">
                      Breakfast & Brunch
                    </Link>
                  </li>
                  <li>
                    <Link className={`dropdown-item  ${location.pathname==="/lunch"?"active":""}`}to="/lunch">
                      Lunch
                    </Link>
                  </li>
                  <li>
                    <Link className={`dropdown-item  ${location.pathname==="/appetizer"?"active":""}`} to="/appetizer">
                      Appetizers
                    </Link>
                  </li>
                  <li>
                    <Link className={`dropdown-item  ${location.pathname==="/smoothies"?"active":""}`} to="/smoothies">
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
                    <Link className={`dropdown-item ${location.pathname==="/highprotein"?"active":""}`} to="/highprotein">
                      High-Protein
                    </Link>
                  </li>
                  <li>
                    <Link className={`dropdown-item ${location.pathname==="/weightloss"?"active":""}`} to="/weightloss">
                      Weight-Loss
                    </Link>
                  </li>
                  <li>
                    <Link className={`dropdown-item ${location.pathname==="/antiinflammatory"?"active":""}`}  to="/antiinflammatory">
                      Anti-Inflammatory
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className={`nav-link  ${location.pathname==="/healthylifestyle"?"active":""}`} aria-current="page" to="/healthylifestyle">
                  <span className="healthtips">Healthy Lifestyles</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link  ${location.pathname==="/news"?"active":""}`} aria-current="page" to="/news">
                  <span className="healthtips">News </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link  ${location.pathname==="/about"?"active":""}`} aria-current="page" to="/about">
                  <span className="healthtips">About us</span>
                </Link>
              </li>
            </ul>
           
          </div>
        </div>
      </nav>
      
    </div>
  );
}
