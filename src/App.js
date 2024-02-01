import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './views/home'
import Contact from './views/contact'
import Job from './views/job'
import Printing from './views/printing'
import CardFlip from './views/purewater'


function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/job' element={<Job />}/>
      <Route path='/purewater' element={<CardFlip />}/>
      <Route path='/printing' element={<Printing />}/>


      </Routes>
   </Router>
  );
}

export default App;
