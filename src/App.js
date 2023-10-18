import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import Home from './Home';
import NavBar from "./NavBar"
import Tutorials from './Tutorials'
import Boxes from './Boxes'
import Footer from './Footer'
import { Route, Routes} from "react-router-dom"
function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route exact path='/' Component={Home}/>
      <Route exact path='/Tutorials' Component={Tutorials}/>
      <Route exact path='/Boxes' Component={Boxes}/>
      <Route exact path='/' Component={Footer}/>
    </Routes>
    </>
  );
}

export default App;
