// App.js
import './index.css'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleProductPage from "./pages/SingleProductPage";
import Home from "./pages/Home";
import WishList from './pages/WishList';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/product/:Id" element={<SingleProductPage/>} />
        <Route path="/wishlist/:wish" element={<WishList/>} />
        </Routes>
    </Router>
  );
};

export default App;
