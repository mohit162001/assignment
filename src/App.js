import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import Home from "./Home";
import NavBar from "./NavBar";
import Tutorials from "./Tutorials";
import Boxes from "./Boxes";
import Footer from "./Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Question from "./Question";
function App() {
  return (
    <>
    <NavBar/>
    <Home/>
    <Tutorials/>
    <Boxes/>
    <Question/>
    <Footer/>
    </>
  );
}

export default App;
