import React from "react";
import img from "./img/H1.png";
import { Fade } from "react-awesome-reveal";
function Header(props) {
  return (
    <div>
      <div className=" " >
       

        <div className="container-fluid">
          <div className="row pt-5 pb-2 mb-3"  style={{backgroundColor:' rgb(255, 240, 245, 0.2)',
    border: '2px solid rgb(211, 211, 211, 0.1)',
    borderRadius: '10px'
    }}>
          <div
              className="col-12 col-md-12 my-5 "
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: " space-evenly",
              }}
            >
              <Fade direction="up" triggerOnce duration={1600}>
                {" "}
                <div
                  className="container"
                  style={{
                    objectFit: "contain",
                    height: "6rem",
                    width: "8rem",
                  }}
                >
                  <img
                    src={img}
                    style={{ height: "100%", width: "100%" }}
                    alt="img"
                  />
                </div>
                <p className="fn-4 fs-1 text-center fw-bolder">
                  Welcome to EatWell
                </p>
              </Fade>
              <p className="fs-3 fn-2 text-center">
                To Ensure Good Health: Eat Lightly, Breathe Deeply, Live
                moderately, Cultivate Cheerfulness and Maintain an Interest in
                Life.
              </p>
              <p className="fs-3 fn-2 text-center">Healthy Eating Keeps the Heart Beating.

</p>
            </div>

            
          
           
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default Header;
