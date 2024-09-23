import React from 'react'

function Footer() {
  return (
    <div>
      
<div className=" my-1 mt-5">


  <footer
          className="text-center text-lg-start text-white"
          style={{backgroundColor: "#1c2331"}}
          >

    <section
             className="d-flex justify-content-center pb-1 pt-3"
             style={{backgroundcolor: "#6351ce"}}
             >

    



      <div>
        <a href="/" className="text-white me-4 alink">
          <i className="fab fa-google"></i>
        </a>
        <a href="/" className="text-white me-4 alink">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="/" className="text-white me-4 alink">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="/" className="text-white me-4 alink">
          <i className="fab fa-github"></i>
        </a>
      </div>

    </section>



    <section className="">
      <div className="container text-center text-md-start mt-5">

        <div className="row mt-3">

          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

            <h6 className="text-uppercase fw-bold">EatWell</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: '60px', backgroundColor:' #7c4dff', height: '2px'}}
                />
            <p style={{textAlign:'justify'}}>
            We believe that a healthy lifestyle starts in the kitchen. Whether you're a seasoned chef or just starting your culinary journey, 
      our collection of wholesome recipes and expert health tips will inspire you to make nourishing choices every day.
            </p>
          </div>



          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

            <h6 className="text-uppercase fw-bold">Healthy Diet Plan</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: '60px', backgroundColor:' #7c4dff', height: '2px'}}
                />
            <p>
              <a href="/" className="text-white alink">Hight-Protein Diet Plan</a>
            </p>
            <p>
              <a href="/" className="text-white alink">Weight-Loss Diet Plan</a>
            </p>
            <p>
              <a href="/" className="text-white alink">AntiInflammatory Diet Plan</a>
            </p>
            <p>
              <a href="/" className="text-white alink">Gut Healthy Diet Plan</a>
            </p>
          </div>



          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

            <h6 className="text-uppercase fw-bold">Healthy Recipes</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: '60px', backgroundColor:' #7c4dff', height: '2px'}}
                />
            <p>
              <a href="/" className="text-white alink">Breakfast & Brunch</a>
            </p>
            <p>
              <a href="/" className="text-white alink">Lunch</a>
            </p>
            <p>
              <a href="/" className="text-white alink">Desserts</a>
            </p>
            <p>
              <a href="/" className="text-white alink">Smoothies</a>
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
      <a className="text-white alink" href="/"
         > EatWell.com</a >
    </div>

  </footer>

</div>

    </div>
  )
}

export default Footer
