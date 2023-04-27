import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home/Home.jsx';
import Header from './component/Layout/Header/Header.jsx';
import Courses from './component/Courses/Courses.jsx';
import Footer from './component/Layout/Footer/Footer.jsx';
import Login from './component/Auth/Login.jsx';
import Register from './component/Auth/Register.jsx';
import ForgetPassword from './component/Auth/ForgetPassword.jsx';
import ResetPassword from './component/Auth/ResetPassword.jsx';
import Contact from './component/Contact/Contact.jsx';
import Request from './component/Request/Request.jsx';
import About from './component/About/About.jsx';
import Subscribe from './component/Payments/Subscribe.jsx';
import PaymentSuccess from './component/Payments/PaymentSuccess.jsx';
import PaymentFail from './component/Payments/PaymentFail.jsx';
import NotFound from './component/Layout/NotFound/NotFound.jsx';
import CourseDetail from './component/CoursePage/CourseDetail.jsx';

function App() {
  window.addEventListener('contextmenu',e=>{
    e.preventDefault();
  })

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgetpassword' element={<ForgetPassword />} />
        <Route path='/password/reset/:token' element={<ResetPassword />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/request' element={<Request />} />
        <Route path='/about' element={<About />} />
        <Route path='/subscribe' element={<Subscribe />} />
        <Route path='*' element={<NotFound/>} />
        <Route path='/paymentsuccess' element={<PaymentSuccess />} />
        <Route path='/paymentfail' element={<PaymentFail />} />
        <Route path='/course/:id' element={<CourseDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
