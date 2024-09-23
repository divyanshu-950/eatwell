import React, { useState, useEffect } from "react";

function HealthNews(props) {
  const [articles, setarticles] = useState();
  const getData = async () => {
    let url = `https://divyanshu-950.github.io/RecipeAPI/News.json`;
    let data = await fetch(url);
    let parseddata = await data.json();
    setarticles(parseddata.articles.slice(0, 6));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="container-md">
        <a
          href="/"
          className="ml-2 headline"
          style={{
            margin: "10px 0 1vw 0",
            display: "flex",
            justifyContent: "center",
            textDecoration: "none",
            color: "black",
          }}
        >
          <p
            className="healthtips headline arrow"
            style={{
              fontWeight: "700",
               fontFamily: '"Playfair Display", "serif"',
            }}
          >
            {" "}
            NEWS <i className="fa-solid fa-arrow-right fa-sm " style={{color: "#000000"}}></i>
          </p>
        
        </a>
      
        <div className="row">
          {articles &&
            articles.map((e) => {
              return (
                <div className={`col-${props.cardbreak} col-md-${props.cardspilit}`}  key={e.url}>
                  <a className='alink' href={e.url} target="_blank" rel="noreferrer">
                  <div
                    className="card mb-3"
                    style={{ backgroundColor: "inherit", border: "none" }}
                  >
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          style={{ aspectRatio: 2 / 1 }}
                          src={e.urlToImage}
                          className="img-fluid rounded-start"
                          alt="img"
                        />
                      </div>
                      <div className="col-md-8">
                        <div
                          className="card-body alink mx-1"
                          style={{ padding: "0px" }}
                        >
                         
                            <p
                              className="card-title t-content"
                              style={{ textAlign: "left" }}
                            >
                              {" "}
                              <strong>
                                {e.title.length > 60
                                  ? e.title.slice(0, 50) + "..."
                                  : e.title}
                              </strong>
                            </p>
                          
                          <p className="card-text">
                            <small className="text-body-secondary">
                              by {e.author}
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  </a>
                  <hr />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default HealthNews;
