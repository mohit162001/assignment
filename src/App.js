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
    <Home/>
    <Tutorials/>
    <Boxes/>
    </>
  );
}

export default App;
