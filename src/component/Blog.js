import React from "react";
import { useLocation } from "react-router-dom";
import cook from "./img/cooking.png";
import HealthNews from "./Home/HealthNews";
import { Fade } from "react-awesome-reveal";
function Blog(props) {
  let location = useLocation();
  let data = location.state;
 
  return (
    <div className=" container mt-5">
      { props.setProgress(20)}
      <div className="row" style={{ padding: "10px 1vw" }}>
        <div className="col-12 col-md-8">
          <p className="text-center my-4 mb-4">
          <Fade triggerOnce direction="up" duration={1000}>
          <span
              className="fs-2 "
              style={{ borderBottom: "2px solid lightgrey" }}
            >
              {" "}
              <strong>{data.name}</strong>
            </span>
          </Fade>
          </p>

          <p className="my-2">
            {" "}
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span
              className={`fa fa-star  ${
                data.rate > 4
                  ? data.rate < 4.6
                    ? "fa-star-half-o checked"
                    : "checked"
                  : ""
              }`}
              style={data.rate === 4 ? { color: "lightgrey" } : {}}
            ></span>
            <small className="mx-2">
              {" "}
              <strong
                style={{
                  borderRight: "1px solid #a0a6a6",
                  paddingRight: "10px",
                }}
              >
                {" "}
                {data.rate}/5
              </strong>{" "}
              by Eatwell
            </small>
          </p>
          <p className=" blog-text">
            <span>{data.description}</span>
          </p>
          <div className="container" style={{ objectFit: "contain" }}>
            <img
              src={data.image}
              style={{ height: "100%", width: "100%", aspectRatio: "3/2" }}
              alt="img"
            />
          </div>
          <Fade direction="up" triggerOnce duration={1000}>
          <div
            className="mb-1 my-4 p-2 shadow-lg "
            style={{ lineHeight: "40px", backgroundColor: "#d3d3d3",borderRadius:'15px'}}
          >
            <strong>
              <p className="d-flex fs-5 justify-content-between" >
                {" "}
                <span className=" fn-5 mx-2 ">
                  Preparation Time:   <i
                          className="fa-solid fa-utensils mx-1"
                          style={{ color: "#7d9211" }}
                        ></i>{data.time["preptime"]}
                </span>
                <span className=" fn-5 mx-2 ">
                  Cooking Time:<img className="mx-1" src={cook} alt="img" /> {data.time["cooktime"]}
                </span>
              </p>
              <p>
                {" "}
                <span className=" fn-5 mx-2 fs-5">
                  Total Time:  <i
                          className="fa-solid fa-clock mx-1"
                          style={{ color: "#7d9211" }}
                        ></i>{data.time["total time"]}
                </span>
              </p>
              <span className=" fn-5 mx-2 fs-5">Serving: <i className="fa-solid fa-bowl-food" style={{ color: "#7d9211" }}></i> {data.serving}</span>
            </strong>
          </div>
          </Fade>
          <Fade  triggerOnce duration={1000}>
          <p className="mx-2 fs-3 fn-4 fw-bolder mb-1 mt-4">Ingredients </p>
          <hr className="mt-0" />
          { props.setProgress(40)}
          {Object.values(data.ingredients).map((element, index) => {
            return (
              <p className=" fn-5 mx-1" style={{ fontSize: "1.2em" }}>
                <i
                  className="fa-solid fa-chevron-right"
                  style={{ color: "#3caf59" }}
                ></i>{" "}
                {element}{" "}
              </p>
            );
          })}
          <p className="mx-2 fs-3 fn-4 fw-bolder mb-1 mt-4">Directions </p>
          <hr className="mt-0" />
          </Fade>
          {Object.values(data.steps).map((element, index) => {
            return (<Fade triggerOnce direction="up" duration={1500}>
              <p className=" fn-5 mx-1 fs-5"><strong>STEP: {index+1}</strong></p>
              <p className=" fn-5 mx-2" style={{ fontSize: "1.2em", textAlign:'justify'}}>
                <i
                  className="fa-solid fa-chevron-right"
                  style={{ color: "#3caf59" }}
                ></i>{" "}
                {element}{" "}
              </p>
              </Fade>
            );
          })}
        </div>
        <div className="col-12 col-md-4 mt-5 pt-5 px-1">

        { props.setProgress(80)}
        <HealthNews cardbreak={6} cardspilit={12} mt={2}/>
        </div>
      </div>
      { props.setProgress(100)}
    </div>
  );
}

export default Blog;
