import React, {useState,useEffect, useRef } from "react";
import logo from './img/homelogo.svg'
import { Link ,useLocation,useNavigate} from "react-router-dom";


export default function Navbar() {
  const searchdata = useRef();
  const[text,setText] = useState()
  const[background,setBackground] = useState(false)
   const device = window.matchMedia("(max-width: 990px)").matches;
  const changeBackground = () =>{
    if(window.scrollY >= 20)
      setBackground(true)
    else
    setBackground(false)

  }
  const navigate = useNavigate();
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

  const change = (event)=>{
    setText(event.target.value);
    
}
const submit = (event)=>{
  const search = searchdata.current.value
  const search1 = search.toLowerCase()
  setText("")
  navigate(`/search/`, { state: search1 });
  event.preventDefault();
}

  return (
    <div >
    
      <nav
        className={`navbar navbar-expand-lg fixed-top `}
        style={background?{backgroundColor:'whitesmoke'}:{backgroundColor:"inherit"}}
      >
        <div className="container-fluid ">
          <Link className="navbar-brand " to="/eatwell">
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
                  <span  className="healthtips ">Recipes</span>
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className={`dropdown-item  ${location.pathname==="/eatwell/quick_easy"?"active":""}`} to="/eatwell/quick_easy">
                      Quick & Easy
                    </Link>
                  </li>
                  <li>
                    <Link className={`dropdown-item  ${location.pathname==="/eatwell/breakfastbrunch"?"active":""}`} to="/eatwell/breakfastbrunch">
                      Breakfast & Brunch
                    </Link>
                  </li>
                  <li>
                    <Link className={`dropdown-item  ${location.pathname==="/eatwell/lunch"?"active":""}`}to="/eatwell/lunch">
                      Lunch
                    </Link>
                  </li>
                  <li>
                    <Link className={`dropdown-item  ${location.pathname==="/eatwell/smoothies"?"active":""}`} to="/eatwell/smoothies">
                      Smoothies
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className={`nav-link  ${location.pathname==="/eatwell/healthylifestyle"?"active":""}`} aria-current="page" to="/eatwell/healthylifestyle">
                  <span className="healthtips">Healthy Lifestyle</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link  ${location.pathname==="/eatwell/news"?"active":""}`} aria-current="page" to="/eatwell/news">
                  <span className="healthtips">News </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link  ${location.pathname==="/eatwell/about"?"active":""}`} aria-current="page" to="/eatwell/about">
                  <span className="healthtips">About us</span>
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={submit}>
        <input className="form-control me-2" ref={searchdata} type="search" placeholder="Search" value={text} onChange={change}aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit" >Search</button>
      </form>
          </div>
        </div>
      </nav>
      
    </div>
  );
}
