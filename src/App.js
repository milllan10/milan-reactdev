import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from './components/HeroSection';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/milan-reactdev" element={<Home />} />
        {/* Add more routes here */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
