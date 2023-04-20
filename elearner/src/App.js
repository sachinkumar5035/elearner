import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home/Home.jsx';
import Header from './component/Layout/Header/Header.jsx';
import Courses from './component/Courses/Courses.jsx';
import Footer from './component/Layout/Footer/Footer.jsx';
import Login from './component/Auth/Login.jsx';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
