import React, { useState, useEffect } from "react";
import cook from "../img/cooking.png";
import { Fade } from "react-awesome-reveal";
function MostLiked() {
  const [recipes, setRecipes] = useState();
  const getData = async () => {
    let url = `https://divyanshu-950.github.io/RecipeAPI/healthyrecipe/quickeasy.json`;
    let data = await fetch(url);
    let parseddata = await data.json();
    setRecipes(parseddata.recipes.slice(0, 6));
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container-md">
      <p
        className="ml-2 heading"
        style={{
          margin: "0 0 0 0",
          fontWeight: "500",
          fontFamily: "'Playpen Sans', 'cursive'",
        
        }}
      >
        TOP VIEWED RECIPES
      </p>
      <div id="horizontal" className="mb-2" style={{ height: "4px" }}></div>
      <div className="row">
        {recipes &&
          recipes.map((e,i) => {
            return (
              <div className="col-6 col-md-4" key={e.image}>
                <Fade delay={i*250} triggerOnce direction="right">
                <a href="/" rel="nonreferrer" target="_blank" style={{textDecoration:'none',color:"inherit"}}>
                <div className="card mb-3">
                  <img src={e.image} className="card-img-top" alt=".img" />
                  <div className="card-body">
                    <p className="card-title">
                      <strong>{e.name}</strong>
                    </p>
                    <p
                      className="card-text my-1"
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        flexWrap: "wrap",
                      }}
                    >
                      <span>
                        <i
                          className="fa-solid fa-utensils mx-1"
                          style={{ color: "#7d9211" }}
                        ></i>
                        <strong> : {e.time["preptime"]}</strong>
                      </span>
                      <span>
                        <img className="mx-1" src={cook} alt="img" />
                        <strong> : {e.time["cooktime"]}</strong>
                      </span>
                      <span>
                        <i
                          className="fa-solid fa-clock mx-1"
                          style={{ color: "#7d9211" }}
                        ></i>
                        <strong> : {e.time["total time"]}</strong>
                      </span>
                    </p>
                    <p className="card-text my-1">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className={`fa fa-star  ${e.rate>3?(e.rate<3.6?'fa-star-half-o checked':'checked'):''}`}style={ e.rate<=3?{color:'lightgrey'}:{}}></span>
                      <span className={`fa fa-star  ${e.rate>4?(e.rate<4.6?'fa-star-half-o checked':'checked'):''}`}style={ e.rate<=4?{color:'lightgrey'}:{}}></span>
                      <small> <strong> {e.rate}/5</strong></small>
                    </p>
                  </div>
                </div>
                </a>
                </Fade>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default MostLiked;
