import React, { useState, useEffect } from "react";
import cook from "../img/cooking.png";
import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";

function MostLiked() {
  const [recipes, setRecipes] = useState();
  const navigate = useNavigate();
  const getData = async () => {
    let url = `https://divyanshu-950.github.io/RecipeAPI/healthyrecipe/quickeasy.json`;
    let data = await fetch(url);
    let parseddata = await data.json();
    setRecipes(parseddata.recipes.slice(0, 6));
  };

  useEffect(() => {
    getData();
  }, []);
  const handleclick=(recipe)=>{
    
    navigate('/blog',{state:recipe});
   } 
  return (
    <div className="container-md  ">
      <p
        className="ml-2 fn-4 text-center fs-2"
        style={{
          margin: "0 0 0 0",
          fontWeight: "500",
        
        }}
      >
        What's Popular
      </p>
      <hr className="mb-4 mt-1"/>
     
      <div className="row">
        {recipes &&
          recipes.map((e,i) => {
            return (
              <div className="col-6 col-sm-4 col-md-3" key={e.image}>
                <Fade delay={i*250} triggerOnce direction="right">
                
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
                    <button className="btn btn-sm my-4" style={{backgroundColor:'darkslategrey',color:'white'}} onClick={()=>{handleclick(e)}}> View Recipe</button>
                  </div>
                </div>
                
                </Fade>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default MostLiked;
