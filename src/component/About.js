import React from "react";
import meimg from "./img/about.jpg";
import fruit from "./img/about2.png";
import { Fade } from "react-awesome-reveal";
import me from'./img/me.png'
function About(props) {
  return (
    <>
    {props.setProgress(10)}
    <div className="mb-3 " style={{backgroundColor:'lavender'}}>
      <p
        className="fs-1 text-center pt-5"
        style={{
          fontWeight: "700",
          fontFamily: '"Playfair Display", "serif"',
        }}
      >
        {" "}
        <span style={{borderBottom:'2px solid lightgrey'}}>About</span>
      </p>
     
      <div
        className="container"
        style={{  padding: "30px 10px" }}
      >
        <div className="row  ">
          <div className="col-12 col-md-6">
            <div className="container" style={{ objectFit: "contain" }}>
              <img
                src={meimg}
                style={{ height: "100%", width: "100%" }}
                alt="img"
              />
            </div>
          </div>
          {props.setProgress(25)}
          <div
            className="col-12 col-md-6 my-5 "
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: " space-evenly",
            }}
          >
            <Fade direction="up" triggerOnce duration={1000}>
              {" "}
              <div
                className="container"
                style={{ objectFit: "contain", height: "6rem", width: "8rem" }}
              >
                <img
                  src={fruit}
                  style={{ height: "100%", width: "100%" }}
                  alt="img"
                />
              </div>
              <p className="fn-4 fs-1 text-center fw-bolder">
                Welcome to EatWell
              </p>
            </Fade>
            <p className="fs-5 fn-2 text-center">
              I believe that a healthy lifestyle starts in the kitchen. Whether
              you're a seasoned chef or just starting your culinary journey, our
              collection of wholesome recipes and expert health tips will
              inspire you to make nourishing choices every day. Our mission is
              to provide you with delicious, easy-to-follow recipes that are as
              good for your body as they are for your taste buds. From
              nutrient-packed meals to mindful eating advice, we're here to
              support your journey to a healthier,happier you. Let's cook up
              some health together!
            </p>
          </div>
        </div>
      </div>
      {props.setProgress(40)}
    </div>
    <div className="container">
    <p
        className="fs-1  pt-5"
        style={{
          fontWeight: "700",
          fontFamily: '"Playfair Display", "serif"',
        }}
      >
        {" "}
        <span style={{borderBottom:'2px solid lightgrey'}}>My Story</span>
      </p>
      <Fade direction="up" triggerOnce duration={1000}>
      <p className="fs-5 fn-2 text-center">Back in 2021, when I started college with an ambition to achieve something, my friends and I decided to rent a flat instead of going to the college hostel. However, as we began our journey, the biggest challenge we faced was preparing food that would keep us both full and healthy. It wasn't that we didn’t have the time; we simply didn’t know what to make or how to make it. Sometimes we would go an entire day without eating, or we would rely on junk food, not realizing how harmful it was.   </p>
      </Fade>
      <Fade direction="left" triggerOnce duration={1000}>
      <p className="fs-5 fn-2 text-center">After some time, we started looking for weddings to crash. At night, we would go to the terrace, look for wedding lights in the distance, and then follow them. We would sneak into the weddings uninvited, fill our stomachs, and leave quietly.</p>
      </Fade>
      <Fade direction="left" triggerOnce duration={1000}>
      <p className="fs-5 fn-2 text-center">After graduating, I decided to create this website to help students who come from far away to pursue their dreams and face similar food challenges. The website provides healthy recipes, breakfast ideas, lunch, dinner, desserts, and many more recipes they can explore and try.</p>
    </Fade>
    </div>
    {props.setProgress(65)}
     <div className="container" style={{backgroundColor:'lavenderblush'}}>
     <p
       className="fs-1 text-center pt-5"
       style={{
         fontWeight: "700",
         fontFamily: '"Playfair Display", "serif"',
       }}
     >
       {" "}
       <span style={{borderBottom:'2px solid lightgrey'}}>About Me</span>
     </p>
     <div className="row">
      <div className="col-12 col-md-6"> 
        <div className="container" style={{ objectFit: "contain",height:'350px',width:'350px' }}>
              <img
                src={me}
                style={{ height: "100%", width: "100%" }}
                alt="img"
              />
            </div></div>
            {props.setProgress(85)}
      <div className="col-12 col-md-6">
      <Fade direction="up" damping={200}triggerOnce duration={1000} >
        <p className="fs-5 fn-2 text-center"> Hi! I am Divyanshu Kpoor.</p>
        <p className="fs-5 fn-2 text-center">I am a Software Devloper and Part Time Blogger</p>
        <p className="fs-5 fn-2 text-center">I am from India, Born in Dehri-On-Sone, Bihar. I have a Bachelor's degree in Computer Applications from Uttaranchal University, Dehradun</p>
        <p className="fs-5 fn-2 text-center">Eatwell is my little corner of interest. I'm the voice, author & creator of Eatwell. </p>
        <p className="fs-5 fn-2 text-center">I love everything from green leafy vegetables to smoothies & desserts. I'm addicted to traveling, Exploring different cuisine & devloping new applications</p>
     </Fade>
      </div>
     </div>
     </div>
     <hr />
     {props.setProgress(100)}
     </>
  );
}

export default About;
