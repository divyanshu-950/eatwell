import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
function News(props) {
  const [page,setpage] = useState(12);
  const[length,setlength] =useState(0)
  const [articles, setarticles] = useState();
  const[loading,setloading] =useState(false);
  const getData = async () => {
    props.setProgress(20)
    setloading(true)
    let url = `https://divyanshu-950.github.io/RecipeAPI/News.json`;
    props.setProgress(40)
    let data = await fetch(url);
    let parseddata = await data.json();
    props.setProgress(60)
    setlength(parseddata.articles.length)
    setarticles(parseddata.articles.slice(0,page));

    props.setProgress(80)
    setloading(false);
    props.setProgress(100)
  };

  useEffect(() => {
    getData();
  }, []);
const handleclick=async()=>{
  setloading(true)
  let url = `https://divyanshu-950.github.io/RecipeAPI/News.json`;
  let data = await fetch(url);
  let parseddata = await data.json();
  setarticles(articles.concat(parseddata.articles.slice(page,(page+12))));
  setpage(page+12);
  setloading(false);
}
  return (
    <div>
      <div className="container-md">
        <Link
          to="/news"
          className="ml-2 headline mt-5"
          style={{
            margin: "10px 0 1vw 0",
            display: "flex",
            justifyContent: "center",
            textDecoration: "none",
            color: "black",
          }}
        >
          <p
            className="headline "
            style={{
              fontWeight: "700",
               fontFamily: '"Playfair Display", "serif"',
            }}
          >
            {" "}
            NEWS
          </p>
        
        </Link>
      <hr className="mt-0" />

        <div className="row">
       
          {articles && 
            articles.map((e,i) => {
              return (
                  <>
                 
                <div className="col-6 col-md-4 col-sm-4 my-2"  key={i}>
                <Fade delay={(i%12)*60} triggerOnce direction="right">
                  <Link className='alink' to={e.url} target="_blank" rel="noreferrer">
                  <div
                    className="card mb-3 mx-2 my-2"
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
                </Fade>
                </div>
                </>
              );
            })
          }
          {loading&&<Spinner/>}
           <div className="d-flex justify-content-center my-4"> <button  style={page > length?{display:'none'}:{}}className="btn  btn-primary fn-2" onClick={handleclick}> <strong>Load More <i className="fa-solid fa-chevron-down"></i></strong></button></div>
            
        </div>
      </div>
    </div>
  );
}

export default News;
