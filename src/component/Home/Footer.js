import React from 'react'
import logo from'../img/homelogo.svg'
import { Link } from 'react-router-dom'
function Footer() {
  return (

      
<div className=" mt-5">


  <footer
          className="text-center text-lg-start text-white"
          style={{backgroundColor: "#1c2331"}}
          >

    <section
             className="d-flex justify-content-center pb-1 pt-3"
             style={{backgroundcolor: "#6351ce"}}
             >

      <div>
        <Link to="/" className="text-white me-4 alink">
          <i className="fab fa-google"></i>
        </Link>
        <Link to="/" className="text-white me-4 alink">
          <i className="fab fa-instagram"></i>
        </Link>
        <Link to="https://www.linkedin.com/in/divyanshuk006/" className="text-white me-4 alink">
          <i className="fab fa-linkedin"></i>
        </Link>
        <Link to="https://github.com/divyanshu-950" className="text-white me-4 alink">
          <i className="fab fa-github"></i>
        </Link>
      </div>

    </section>



    <section className="">
      <div className="container text-center text-md-start mt-3">

        <div className="row mt-3">

          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto my-5">

            
            <p className='fn-4' style={{textAlign:'center'}}>
           <h2>Eat
           <img style={{marginTop:'10px'}}
              src={logo}
              alt="Logo"
              width="60"
              height="26"
              className="d-inline-block align-text-top "
            />Well</h2>
            </p>
          </div>


          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

            <h6 className="text-uppercase fw-bold">Recipes</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: '60px', backgroundColor:' #7c4dff', height: '2px'}}
                />
            <p>
              <Link to="/breakfastbrunch" className="text-white alink">Breakfast & Brunch</Link>
            </p>
            <p>
              <Link to="/lunch" className="text-white alink">Lunch</Link>
            </p>
            <p>
              <Link to="/quick_easy" className="text-white alink">Quick&Easy</Link>
            </p>
            <p>
              <Link to="/smoothies" className="text-white alink">Smoothies</Link>
            </p>
          </div>



          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

            <h6 className="text-uppercase fw-bold">Contact</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: '60px', backgroundColor:' #7c4dff', height: '2px'}}
                />
            <p><i className="fas fa-home mr-3"></i> DEHRI, BIHAR 821305, INDIA</p>
            <p><i className="fas fa-envelope mr-3"></i> devkp006@gmail.com</p>
            <p><i className="fas fa-phone mr-3"></i> +91 95083 92466</p>
          </div>
         
        </div>
       
      </div>
    </section>



    <div
         className="text-center p-3"
         style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}
         >
      © 2024 Copyright: 
      <Link className="text-white alink" to="/"
         > EatWell.com</Link >
    </div>

  </footer>

</div>

   
  )
}

export default Footer
