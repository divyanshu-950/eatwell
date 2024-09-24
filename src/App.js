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
function App() {
  const[progress,setProgress] =useState(0);
  return (
    <Router basename='/eatwell'>
    <Navbar/>
    <LoadingBar
     color='#f11946'
     progress={progress}
   />
   <div className="container-fluid p-0">
   <Routes>
      <Route exact path='/' element={< Home setProgress = {setProgress}/>}/>
      <Route exact path='/quick_easy' element={<QuickEasy setProgress = {setProgress}  key={"quickeasy"} url={'quickeasy'} title={"QUICK & EASY RECIPES"}  />}/>
      <Route exact path='/breakfastbrunch' element={<QuickEasy setProgress = {setProgress}  key={"breakfastbrunch"} url={'breakfastbrunch'} title={"Breakfast & Brunches"}  />}/>
      <Route exact path='/collection' element={<Collection setProgress = {setProgress} />}/>
      <Route exact path='/blog' element={<Blog setProgress = {setProgress} />}/>
      <Route exact path='/news' element={<News setProgress = {setProgress} />}/>
      <Route exact path='/about' element={<About setProgress = {setProgress} />}/>
    </Routes>
   </div>
    <Footer/>
   </Router>
      
  );
}

export default App;
