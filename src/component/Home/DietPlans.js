import React from "react";
import img1 from "../img/hl2.jpg";
import img2 from "../img/sd1.jpg";
import img3 from "../img/sd2.jpg";
import { Fade } from "react-awesome-reveal";

function DietPlans() {
  return (
    <div className="container-md">
        
      <p
        className="fs-2 fn-4 text-center"
        style={{
          fontWeight: "700",
          
        }}
      >
        {" "}
      <span>  Diet Plans </span>
      </p>
      <hr className="mt-0 mb-5"/>
      <div className="row">
        <div className="col-12 col-sm-4">
          <Fade direction="right">
          <a className="alink" href="/" target="_blank" rel="noreferrer">
            <div className="card mb-3"  style={{ backgroundColor: "inherit", border: "none" }}>
              <img src={img1} className="card-img-top" alt=".img" />
              <div className="card-body p-2">
                <p className="card-title t-content">
                  <strong>High Protein Diet Plan: Rich In Protein, Amino Acid and Nutrition </strong>
                </p>
                <p className="card-text my-1">
                  <small  className="text-body-secondary text-decoration-underline">
                    {" "}
                   by Divyanshu kapoor
                  </small>
                </p>
              </div>
            </div>
          </a>
          </Fade>
        </div>

        <div className="col-12 col-sm-4">
        <Fade triggerOnce direction="right" delay={150}>
          <a className="alink" href="/" target="_blank" rel="noreferrer">
            <div className="card mb-3"  style={{ backgroundColor: "inherit", border: "none" }}>
              <img src={img2} className="card-img-top" alt=".img" />
              <div className="card-body p-2">
                <p className="card-title t-content">
                  <strong>Weight Loss Diet Plan: Low Fat, Low Calorie & High in Nutrition</strong>
                </p>
                <p className="card-text my-1">
                  <small  className="text-body-secondary text-decoration-underline" >
                    {" "}
                   by Divyanshu kapoor
                  </small>
                </p>
              </div>
            </div>
          </a>
          </Fade>
        </div>

        <div className="col-12 col-sm-4">
        <Fade direction="right" delay={400}>
          <a className="alink" href="/" target="_blank" rel="noreferrer">
            <div className="card mb-3"  style={{ backgroundColor: "inherit", border: "none" }}>
              <img src={img3} className="card-img-top" alt=".img" />
              <div className="card-body p-2">
                <p className="card-title t-content">
                  <strong>Anti-Inflammatory Diet Plan: A Path to Gut Health and Reduced Inflammation</strong>
                </p>
                <p className="card-text my-1">
                  <small  className="text-body-secondary text-decoration-underline">
                    {" "}
                   by Divyanshu kapoor
                  </small>
                </p>
              </div>
            </div>
          </a>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default DietPlans;
