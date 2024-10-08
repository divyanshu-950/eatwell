import React, { useState, useEffect } from "react";
import HealthNews from "../Home/HealthNews";
import Blog from "../Blog";
import { useNavigate } from "react-router-dom";

function Collection() {
  const [title, setTitle] = useState();
  const [description, setdescription] = useState();
  const [image, setImage] = useState();
  const [recipes, setRecipes] = useState();
  const navigate = useNavigate();
  const getData = async () => {
    let url = `https://divyanshu-950.github.io/RecipeAPI/HealthyLifestyle/overnighoats.json`;
    let data = await fetch(url);
    let parseddata = await data.json();
    setTitle(parseddata.title);
    setdescription(parseddata.Description);
    setImage(parseddata.image);
    setRecipes(parseddata.recipes);
  };

  useEffect(() => {
    getData();
  }, []);
  const handleclick = (recipe) => {
    navigate("/blog", { state: recipe });
  };

  return (
    <div>
      <div className="container-md">
        <p className="mt-5" style={{ textAlign: "center" }}>
          <span
            className=" heading fn-2 "
            style={{
              margin: "0 0 0 0",
              fontWeight: "500",
              borderBottom: "2px solid darkgrey",
            }}
          >
            {title}
          </span>
        </p>
        <p className="mx-1 fn-1  text-center t-content ">
          This collection of {title} recipes is designed to Provide you
          Varition, Different Flavour and unique Taste while delivering the
          nourishment and taste you crave.{" "}
        </p>
        <hr className="mx-2" />
        <div className="row">
          <div className="col-12 col-md-8">
            <div className="container">
              <img
                src={image}
                alt="img"
                style={{ height: "100%", width: "100%", aspectRatio: "3/2" }}
              />
              <p
                className="fn-3 my-4"
                style={{ textAlign: "justify", lineHeight: "25px" }}
              >
                {description}
              </p>
            </div>

            {recipes &&
              recipes.map((element, index) => {
                return (
                  <div key={index}>
                    <div className="container" style={{ objectFit: "contain" }}>
                      <strong>
                        {" "}
                        <p style={{ fontSize: "1.5em" }}>
                          {index + 1}. {element.name}{" "}
                        </p>
                      </strong>
                      <hr className="mt-0" />
                      <img
                        src={element.image}
                        style={{
                          height: "100%",
                          width: "100%",
                          aspectRatio: "3/2",
                        }}
                        alt="img"
                      />
                      <p
                        className="mt-5 mb-2"
                        style={{ textAlign: "justify", lineHeight: "25px" }}
                      >
                        {element.description}
                      </p>
                      <button
                        className="btn btn-sm mb-4"
                        style={{
                          backgroundColor: "darkslategrey",
                          color: "white",
                        }}
                        onClick={() => {
                          handleclick(element);
                        }}
                      >
                        {" "}
                        View Recipe
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="col-12 col-md-4 px-2">
            <HealthNews cardbreak={6} cardspilit={12} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
