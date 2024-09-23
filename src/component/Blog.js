import React from "react";
import { useLocation } from "react-router-dom";
import cook from "./img/cooking.png";
import HealthNews from "./Home/HealthNews";
function Blog() {
  let location = useLocation();
  let data = location.state;
  console.log(data)
  return (
    <div className=" row mt-5">
      <div className="container" style={{ padding: "10px 10vw" }}>
        <div className="col-12 col-md-8">
          <p className="text-center my-4 mb-5">
            <span
              className="fs-2 "
              style={{ borderBottom: "2px solid lightgrey" }}
            >
              {" "}
              <strong>{data.name}</strong>
            </span>
          </p>

          <p className="my-3">
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
              by Divyanshu kapoor
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
          <div
            className="mb-1 my-4 p-2 shadow-lg "
            style={{ lineHeight: "40px", backgroundColor: "lavenderblush" }}
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
              <span className=" fn-5 mx-2 fs-5">Serving: <i class="fa-solid fa-bowl-food" style={{ color: "#7d9211" }}></i> {data.serving}</span>
            </strong>
          </div>
          <p className="mx-2 fs-3 fn-4 fw-bolder mb-1 mt-4">Ingredients </p>
          <hr className="mt-0" />
          {Object.values(data.ingredients).map((element, index) => {
            return (
              <p className=" fn-5 mx-1" style={{ fontSize: "1.2em" }}>
                <i
                  class="fa-solid fa-chevron-right"
                  style={{ color: "#3caf59" }}
                ></i>{" "}
                {element}{" "}
              </p>
            );
          })}
          <p className="mx-2 fs-3 fn-4 fw-bolder mb-1 mt-4">Directions </p>
          <hr className="mt-0" />
          {Object.values(data.steps).map((element, index) => {
            return (<>
              <p className=" fn-5 mx-1 fs-5"><strong>STEP: {index+1}</strong></p>
              <p className=" fn-5 mx-2" style={{ fontSize: "1.2em", textAlign:'justify'}}>
                <i
                  class="fa-solid fa-chevron-right"
                  style={{ color: "#3caf59" }}
                ></i>{" "}
                {element}{" "}
              </p>
              </>
            );
          })}
        </div>
        <div className="col-12 col-md-4"></div>
        <hr />
        <hr />
        <HealthNews cardbreak={6} cardspilit={6}/>
      </div>
    </div>
  );
}

export default Blog;
