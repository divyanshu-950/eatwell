import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
function HealthNews(props) {
  const navigate = useNavigate();
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
  const handleclick =()=>{
    navigate('/news')
  }

  return (
    <div>
      <div className="container-md">
       
           <p
            className=" fs-2 mt-5 text-center"
            style={{
              fontWeight: "700",
               fontFamily: '"Playfair Display", "serif"',
            }}
          >
            {" "}
          <span>  NEWS </span>
         
          </p>     
          <hr className="mb-5" />
        <div className="row">
          {articles &&
            articles.map((e,i) => {
              return (
                <div className={`col-${props.cardbreak} col-md-${props.cardspilit}`}  key={i}>
                  <Link className='alink' to={e.url} target="_blank" rel="noreferrer">
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
                  </Link>
                  <hr />
                </div>
              );
            })}
        </div>
       <div className="d-flex justify-content-center my-4"> <button className="btn  btn-outline-secondary fn-2" onClick={handleclick}> <strong>View More</strong></button></div>
      </div>
    </div>
  );
}

export default HealthNews;
