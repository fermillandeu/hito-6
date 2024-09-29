import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; 
import NavbarApp from './components/navbar/Navbar'; 
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Profile from './components/profile/Profile';
import NotFound from './components/notfound/NotFound';
import Cart from './pages/cart/Cart';
import Pizza001 from './pages/pizza/Pizza001';
import './App.css';

function App() {
  return (
    <CartProvider>
      <div className='page-container'>
        <NavbarApp />
        <div className='content-wrap'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/p001" element={<Pizza001 />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
