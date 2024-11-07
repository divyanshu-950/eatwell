import React, { useState, useEffect } from "react";
import HealthNews from "../Home/HealthNews";
import Minilifestyle from "./Minilifestyle";
import { useNavigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { useParams } from "react-router-dom";
function Collection(props) {
  const params = useParams();

  const [title, setTitle] = useState();
  const [type, setType] = useState();
  const [description, setdescription] = useState();
  const [image, setImage] = useState();
  const [recipes, setRecipes] = useState();
  const navigate = useNavigate();
  const getData = async () => {
    console.log(await props.location);
    let url = `https://divyanshu-950.github.io/RecipeAPI/HealthyLifestyle/vlogpages/${params.page}.json`;
    let data = await fetch(url);
    let parseddata = await data.json();
    setTitle(parseddata.title);
    setdescription(parseddata.description);
    setImage(parseddata.image);
    setRecipes(parseddata.content);
    setType(parseddata.type);
  };

  useEffect(() => {
    getData();
  }, []);
  const handleclick = (recipe) => {
    navigate("/blog", { state: recipe });
  };

  return (
    <div className=" container mt-5">
      {props.setProgress(20)}
      <div className="row" style={{ padding: "10px 1vw" }}>
        <div className="col-12 col-md-8">
          <p className="text-center my-4 mb-4">
            <Fade triggerOnce direction="up" duration={1000}>
              <span
                className="fs-2 "
                style={{ borderBottom: "2px solid lightgrey" }}
              >
                {" "}
                <strong>{title}</strong>
              </span>
            </Fade>
          </p>

          <div className="container" style={{ objectFit: "contain" }}>
            <img
              src={image}
              style={{ height: "100%", width: "100%", aspectRatio: "3/2" }}
              alt="img"
            />
          </div>
          <p className=" blog-text">
            <span>{description}</span>
          </p>
          {recipes &&
            recipes.map((element, index) => {
              return (
                <div key={index}>
                  <div
                    className="container mb-5"
                    style={{ objectFit: "contain" }}
                  >
                    <strong>
                      {" "}
                      <p style={{ fontSize: "1.5em" }}>
                        {index + 1}. {element.name}{" "}
                      </p>
                    </strong>
                    <hr className="mt-0 mb-4" />
                    {element.image && (
                      <img
                        src={element.image}
                        style={{
                          height: "100%",
                          width: "100%",
                          aspectRatio: "3/2",
                        }}
                        alt="img"
                      />
                    )}
                    <p
                      className="mt-3 mb-3 blog-text"
                      style={{ textAlign: "justify", lineHeight: "30px" }}
                    >
                      {element.description}
                    </p>
                    {type && (
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
                    )}
                  </div>
                </div>
              );
            })}
          
        </div>
        <div className="col-12 col-md-4 mt-5 pt-5 px-3">
            {props.setProgress(80)}
            <Minilifestyle cardbreak={6} cardspilit={12} mt={2}/>
            <HealthNews cardbreak={6} cardspilit={12} mt={2} />
          </div>
        {props.setProgress(100)}
      </div>
    </div>
  );
}

export default Collection;
