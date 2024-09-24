import React from 'react'
import MostLiked from './MostLiked';
import HealthNews from './HealthNews';
import DietPlans from './DietPlans';
import Best10 from './Best10';

import Header from '../Header';
function Home(props) {
  return (
    <>
    {props.setProgress(20)}
       <Header/>
  
      <MostLiked/>
      {props.setProgress(60)}
   
      <HealthNews cardbreak={6} cardspilit={6}/>
    

   
      <Best10/>
   
      {props.setProgress(80)}
   
      <DietPlans/>
    
    
      {props.setProgress(100)}
    </>

  )
}

export default Home
