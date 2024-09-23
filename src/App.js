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

function App() {
  return (
    <Router basename='/eatwell'>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/quick_easy' element={<QuickEasy key={"quickeasy"} url={'quickeasy'} title={"QUICK & EASY RECIPES"}  />}/>
      <Route exact path='/breakfastbrunch' element={<QuickEasy key={"breakfastbrunch"} url={'breakfastbrunch'} title={"Breakfast & Brunches"}  />}/>
      <Route exact path='/collection' element={<Collection/>}/>
      <Route exact path='/blog' element={<Blog/>}/>
    </Routes>
    <Footer/>
   </Router>
      
  );
}

export default App;
