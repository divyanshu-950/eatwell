import React from 'react'
import img1 from "../img/img1.jpg";
import img2 from "../img/img9.jpg";
import img3 from "../img/img4.jpg";
import img4 from "../img/img10.jpg";
import img5 from "../img/img7.jpg";
import img6 from "../img/img8.jpg";
import MostLiked from './MostLiked';
import HealthNews from './HealthNews';
import DietPlans from './DietPlans';
import Best10 from './Best10';
import { Fade } from "react-awesome-reveal";
function Home() {
  return (
    <>
        <div className='container-md'>
      <div
        className="d-flex justify-content-between"
        style={{
          marginTop: "70px",
          flexWrap: "wrap",
          fontSize: "2vw",
          marginBottom: "2vw",
        }}
      >
        <div  style={{ boder: "2px solid" }}>
          <p
            className="animate__animated animate__backInRight"
            style={{
              paddingLeft: "10px",
              fontSize: "8vw",
              color: " #e9734c",
              fontWeight: "700",
              marginBottom: "1vw",
              fontFamily: "'Playpen Sans', 'cursive'"
            }}
          >
            EATWELL.
          </p>
          <p
            className="animate__animated animate__backInLeft"
            style={{
              paddingLeft: "10px",
              fontSize: "3vw",
              color: " inherit",
              fontWeight: "700",
              fontFamily:'emoji'
            }}
          >
            To Ensure Good Health: Eat<br /> Lightly, Breathe Deeply, Live 
            <br /> moderately, Cultivate Cheerfulness <br />
            and Maintain an Interest in Life.
          </p>
          <p
            className="animate__animated animate__fadeInUp"
            style={{
              paddingLeft: "10px",
              color: " inherit",
              fontWeight: "700",
            }}
          >
            Healthy Eating Keeps the Heart Beating.
          </p>
        </div>
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
          style={{ width: "30vw",marginRight:'2vw', }}
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="4000">
              <img src={img1} className="d-block" alt="Food_Image" />
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <img src={img2} className="d-block" alt="Food_Image" />
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <img src={img3} className="d-block " alt="Food_Image" />
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <img src={img4} className="d-block " alt="Food_Image" />
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <img src={img5} className="d-block " alt="Food_Image" />
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <img src={img6} className="d-block " alt="Food_Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  
      <MostLiked/>
      <Fade triggerOnce direction='left' cascade damping={0.4}>
   
      <HealthNews cardbreak={6} cardspilit={6}/>
    

   
      <Best10/>
   
    
   
      <DietPlans/>
    
    </Fade>
    

    </>

  )
}

export default Home
