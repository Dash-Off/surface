import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar.jsx/Sidebar';
import TextEditor from './components/TextEditor/TextEditor';
import Assistant from './components/Assistant/Assistant';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Test from './pages/Test/Test';


const App = () => {

  const routes = (
    <Router>
      <Routes>
      <Route path="/" exact element={<Test/>}/>
        <Route path="/home" exact element={<Home/>}/>
      </Routes>
    </Router>
  
  );

  return (
    <>

      {routes}

     </> 
  ) 
}

export default App