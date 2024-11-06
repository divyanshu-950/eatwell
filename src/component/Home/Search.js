import React, { useState, useEffect } from "react";
import cook from "../img/cooking.png";
import { Fade } from "react-awesome-reveal";
import { useNavigate,useLocation } from "react-router-dom";
import Spinner from "../Spinner";
function Search(props) {
    const[loading,setloading] =useState(false);
    const [recipes, setRecipes] = useState([]);
    const navigate = useNavigate();
    let location = useLocation();
    let data = location.state;

    //Fetch

    
    
    const getData = async () => {
      props.setProgress(20);
      setloading(true)
                let url1 = `https://divyanshu-950.github.io/RecipeAPI/healthyrecipe/smoothies.json`;
                let url2 = `https://divyanshu-950.github.io/RecipeAPI/healthyrecipe/breakfastbrunch.json`;
                props.setProgress(30);
                let url3 = `https://divyanshu-950.github.io/RecipeAPI/healthyrecipe/lunch.json`;
                let data1 = await fetch(url1);
                let data2 = await fetch(url2);
                let data3 = await fetch(url3);
                props.setProgress(50);
                let parseddata = await data3.json();
                let parseddata1 = await data1.json();
                let parseddata2 = await data2.json();
                const recipedata =parseddata.recipes.concat(parseddata1.recipes);
                const recipedata1 = recipedata.concat(parseddata2.recipes);
                const filterData = []
                props.setProgress(60);
                for(let i = 0; i < recipedata1.length; i++){
                  if(recipedata1[i].keywords.includes(data)){
                    filterData.push(recipedata1[i])
                  
                  }

                }
                props.setProgress(80);
              setRecipes(filterData)
              props.setProgress(100);
              setloading(false)
               
      };
      
      useEffect(() => {
            getData()
            console.log(recipes)
        
      }, []);
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
        <p className="mx-1 fn-4  fs-2 text-center t-content ">
          {<strong>{`You Searched For ${data}`}</strong>}
        </p>
        <hr className="mx-2" />
        <div className="row">
          {loading && <Spinner/>}
          {recipes &&
            recipes.map((e, i) => {
              return (
                <div className="col-6 col-md-3 col-sm-4" key={i}>
                  <Fade duration={100*(i+5)} triggerOnce direction="right">
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
            {recipes.length == 0 && <p className="fs-2 text-center fn-3"> Sorry! We're Workin on it....</p>}
            </div>
      </div>
    </div>
  )
}

export default Search
