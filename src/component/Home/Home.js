import React from 'react'
import MostLiked from './MostLiked';
import HealthNews from './HealthNews';
import Best10 from './Best10';

import Header from '../Header';
function Home(props) {
  return (
    <>
    {props.setProgress(20)}
       <Header/>
  
      <MostLiked/>
      {props.setProgress(60)}
   
      <HealthNews cardbreak={6} cardspilit={6} mt={5}/>
    

   
      <Best10/>
   
      {props.setProgress(80)}
   
     
    
    
      {props.setProgress(100)}
    </>

  )
}

export default Home
