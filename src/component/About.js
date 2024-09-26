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
            <Fade direction="up" triggerOnce duration={1800}>
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
      <p className="fs-5 fn-2 text-center">Back in 2021, when I started college with big ambitions, my friends and I made the decision to rent a flat instead of staying in the college hostel. However, as exciting as it was to begin this new chapter, we quickly encountered a major challenge: preparing meals that were both filling and healthy. It wasn’t a matter of time, but rather a lack of knowledge. We had no idea what to cook or how to go about it. Some days, we went without eating or resorted to junk food, completely unaware of the long-term effects it could have on our health.</p>
      </Fade>
      <Fade direction="up" triggerOnce duration={1100}>
      <p className="fs-5 fn-2 text-center">n desperation, we got creative—by crashing weddings. At night, we would gather on the terrace, scan the horizon for wedding lights, and then set off in search of them. We’d sneak in, enjoy a hearty meal, and leave quietly, with full stomachs and a bit of mischief.</p>
      </Fade>
      <Fade direction="up" triggerOnce duration={1200}>
      <p className="fs-5 fn-2 text-center">After graduating, I realized how common this struggle is for students who move far from home in pursuit of their dreams. That’s what inspired me to create a website designed to help students facing similar challenges with food. The website offers a variety of healthy, easy-to-make recipes—covering breakfast, lunch, dinner, desserts, and more—to make cooking accessible and enjoyable for them.</p>
    </Fade>
    </div>
    {props.setProgress(65)}
     <div className="container shadow-lg my-5" style={{backgroundColor:'lavenderblush'}}>
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
      <Fade direction="up" damping={200}triggerOnce duration={1200} >
        <p className="fs-5 fn-2 text-center"> Hi! I am <span className="fn-6 fw-bold fs-2">Divyanshu Kapoor.</span></p>
        <p className="fs-5 fn-2 text-center">I am a a Software Developer and part-time Blogger from India, born in Dehri-On-Sone, Bihar. I hold a Bachelor's degree in Computer Applications from Uttaranchal University, Dehradun.

</p>
        <p className="fs-5 fn-2 text-center">Eatwell is my personal space where I share my love for food. As the voice, author, and creator of Eatwell, I’m passionate about everything from fresh, green leafy vegetables to delicious smoothies and indulgent desserts. Beyond food, I have a deep love for traveling, exploring different cuisines, and, of course, developing new applications.</p>
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
