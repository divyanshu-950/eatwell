import './App.css';
import Blog from './component/Blog';
import Collection from './component/HealthyLifestyle/Collection';
import QuickEasy from './component/HealthyRecipe/QuickEasy';
import Footer from './component/Home/Footer';
import Home from "./component/Home/Home";
import Navbar from "./component/Navbar";
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import News from './component/News';
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';
import About from './component/About';
import Header from './component/Header';
import Lifestyle from './component/HealthyLifestyle/Lifestyle';
import Search from './component/Home/Search';
function App() {
  const[progress,setProgress] =useState(0);
  return (
    <Router basename='/'>
    <Navbar/>
    <LoadingBar
     color='#f11946'
     progress={progress}
   />
   <div className="container-fluid p-0">
   <Routes>
      <Route exact path='/eatwell' element={< Home setProgress = {setProgress}/>}/>
      <Route exact path='/eatwell/quick_easy' element={<QuickEasy setProgress = {setProgress}  key={"quickeasy"} url={'quickeasy'} title={"QUICK & EASY RECIPES"}  />}/>
      <Route exact path='/eatwell/breakfastbrunch' element={<QuickEasy setProgress = {setProgress}  key={"breakfastbrunch"} url={'breakfastbrunch'} title={"Breakfast & Brunches"}  />}/>
      <Route exact path='/eatwell/smoothies' element={<QuickEasy setProgress = {setProgress}  key={"smoothie"} url={'smoothies'} title={"Smoothies"}  />}/>
      <Route exact path='/eatwell/lunch' element={<QuickEasy setProgress = {setProgress}  key={"lunch"} url={'lunch'} title={"Lunch"}  />}/>
      <Route exact path='/eatwell/collection/:page' element={<Collection setProgress = {setProgress} />}/>
      <Route exact path='/eatwell/blog' element={<Blog setProgress = {setProgress} />}/>
      <Route exact path='/eatwell/search' element={<Search setProgress = {setProgress} key={"search"} />}/>
      <Route exact path='/eatwell/news' element={<News setProgress = {setProgress} />}/>
      <Route exact path='/eatwell/healthylifestyle' element={<Lifestyle setProgress = {setProgress} />}/>
      <Route exact path='/eatwell/about' element={<About setProgress = {setProgress} />}/>
      
    </Routes>
   </div>
    <Footer/>
   </Router>
      
  );
}

export default App;
