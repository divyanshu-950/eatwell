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

import Header from '../Header';
function Home(props) {
  return (
    <>
       <Header/>
  
      <MostLiked/>
     
   
      <HealthNews cardbreak={6} cardspilit={6}/>
    

   
      <Best10/>
   
    
   
      <DietPlans/>
    
    

    </>

  )
}

export default Home
