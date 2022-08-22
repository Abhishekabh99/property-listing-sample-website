import TopBar from "./components/topbar/TopBar";
import React from "react";
import Home from "./pages/homepage/Home"
import Detail from "./pages/listingdetail/Detail";
import CreateListing from "./pages/create-listing/CreateListing";

import {BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
  
    <Router>
    <div >
    <TopBar />
    <Routes>
    <Route exact path="/" element ={ <Home /> } />
    <Route exact path="/detail" element ={<Detail />} />
    <Route exact path="/create" element={<CreateListing />} />
    </Routes>
    </div>
    </Router>
 
    
    
  );
}

export default App;
// as it is JSX not java script so anything we want to be read as java script should be in curly braces that why there comments are in curly braces above