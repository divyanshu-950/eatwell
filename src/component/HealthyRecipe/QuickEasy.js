import React, { useState, useEffect } from "react";
import cook from "../img/cooking.png";
import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
import Spinner from "../Spinner";


function QuickEasy(props) {
  const [page,setpage] = useState(8);
  const[length,setlength] =useState(0)
  const[loading,setloading] =useState(false);
  const [recipes, setRecipes] = useState();
  const navigate = useNavigate();
  const getData = async () => {
    props.setProgress(10);
  
    setloading(true)
    let url = `https://divyanshu-950.github.io/RecipeAPI/healthyrecipe/${props.url}.json`;
    props.setProgress(40);
    let data = await fetch(url);
    let parseddata = await data.json();
    props.setProgress(60);
    setlength(parseddata.recipes.length)
    setRecipes(parseddata.recipes.slice(0,page));
    props.setProgress(100);
    setloading(false);
  };

  useEffect(() => {
    getData();
  }, []);
  
const handleclick1=async()=>{
  setloading(true)
  let url = `https://divyanshu-950.github.io/RecipeAPI/healthyrecipe/${props.url}.json`;
  let data = await fetch(url);
  let parseddata = await data.json();
  setRecipes(recipes.concat(parseddata.recipes.slice(page,(page+12))));
  setpage(page+12);
  setloading(false);
}

  const handleclick = (recipe) => {
    navigate("/blog", { state: recipe });
  };
  return (
    
    <div>
      <div className="container-md mt-5">
        <p style={{ textAlign: "center" }}>
          <span
            className="ml-2 heading fn-4"
            style={{
              margin: "0 0 0 0",
              fontWeight: "500",
              borderBottom: "2px solid darkgrey",
            }}
          >
            {props.title}
          </span>
        </p>
        <p className="mx-1 fn-2  text-center t-content ">
          This collection of {props.title} is designed to fit into your busy
          schedule while delivering the taste and nourishment you crave.{" "}
        </p>
        <hr className="mx-2" />
        <div className="row">
          {recipes &&
            recipes.map((e, i) => {
              return (
                <div className="col-6 col-md-3 col-sm-4" key={e.image}>
                  <Fade delay={i * 100} triggerOnce direction="right">
                    <div className="card mb-3" style={{ border: "none" }}>
                      <img
                        src={e.image}
                        className="card-img-top"
                        alt=".img"
                        style={{ aspectRatio: "5/4" }}
                      />
                      <div className="card-body">
                        <p
                          className="card-title fn-5"
                          style={{ fontSize: "1.1rem" }}
                        >
                          <strong>{e.name}</strong>
                        </p>
                        <p
                          className="card-text my-1 fs-6"
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
                          <span
                            className={`fa fa-star  ${
                              e.rate > 3
                                ? e.rate < 3.6
                                  ? "fa-star-half-o checked"
                                  : "checked"
                                : ""
                            }`}
                            style={e.rate === 3 ? { color: "lightgrey" } : {}}
                          ></span>
                          <span
                            className={`fa fa-star  ${
                              e.rate > 4
                                ? e.rate < 4.6
                                  ? "fa-star-half-o checked"
                                  : "checked"
                                : ""
                            }`}
                            style={e.rate <= 4 ? { color: "lightgrey" } : {}}
                          ></span>
                          <small>
                            {" "}
                            <strong> {e.rate}/5</strong>
                          </small>
                        </p>
                        <button
                          className="btn btn-sm my-4"
                          style={{
                            backgroundColor: "darkslategrey",
                            color: "white",
                          }}
                          onClick={() => {
                            handleclick(e);
                          }}
                        >
                          {" "}
                          View Recipe
                        </button>
                      </div>
                    </div>
                  </Fade>
                </div>
              );
            })}
            {loading&&<Spinner/>}
            <div className="d-flex justify-content-center my-4"> <button  style={page > length?{display:'none'}:{}}className="btn  btn-primary fn-2" onClick={handleclick1}> <strong>Load More <i class="fa-solid fa-chevron-down"></i></strong></button></div>
        </div>
      </div>
    </div>
  );
}

export default QuickEasy;
