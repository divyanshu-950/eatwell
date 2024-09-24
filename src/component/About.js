import React from "react";
import me from "./img/aboutme.jpg";
function About(props) {
  return (
    <div className="container-fluid my-5 ">
                <p
            className="headline text-center"
            style={{
              fontWeight: "700",
               fontFamily: '"Playfair Display", "serif"',
            }}
          >
            {" "}
            About
          </p>
          <hr className="mb-4 mt-0" />
        <div className="container" >
      <div className="row  " >
        <div className="col-12 col-md-6 ">we are the warrior</div>
        <div className="col-12 col-md-6">
          <div className="container" style={{ objectFit: "contain" }}>
            <img src={me} style={{ height: "100%", width: "100%" }} alt="img" />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default About;
