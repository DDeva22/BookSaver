import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import AddBook from "./pages/AddBook.js"
import Navbar from "./components/navbar.js";


const App = () => (
  <Router>
    <div className = "container">
      <Navbar/>
      <Route exact path = "/" component = {AddBook} />
      




    </div>


  </Router>
  
  
);

export default App;
