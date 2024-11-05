import React from "react";
import bg from "../img/best10.jpg";
import { Link } from "react-router-dom";
function Best10() {
   return (
    <div className="container-fluid">
    <Link to= "/collection/overnighoats" style={{textDecoration:'none',color:'black'}}>
   <div className="row my-5" >
    <div className="col-12 col-md-8 p-0">
      <img src={bg} alt="img" className="my-0" style={{height:'100%',width:'100%'}}/>
    </div>
    <div className="col-12 col-md-4 p-0">
         
    <div className="card px-2" style={{backgroundColor:"lavenderblush"}}>
          <div className="card-body">
            <p className="card-subtitle mb-2 text-muted" style={{fontWeight:'700'}}>  Healthy Lifestyle | Overnight Oats</p>
            <p className="card-title fs-3" style={{  fontFamily: "'Playpen Sans', 'cursive'",fontSize:'1.7em'}}><strong>6 Quick & Easy Overnight Oats Recipes, Simplify your Morning Routine with these Effortless Nutritious Breakfast. </strong> </p>
            <p className="card-title t-content fn-2" >Overnight oats are simply oats that are left to soak overnight instead of cooked in the morning, which makes them perfect for a quick, filling and nutritious breakfast. </p>
            
          </div>
        </div>
    </div>
  </div>
        
            </Link>
            </div>

  );

}

export default Best10;
