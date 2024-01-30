import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './views/home'
import Contact from './views/contact'
function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/contact' element={<Contact />}/>


      </Routes>
   </Router>
  );
}

export default App;
