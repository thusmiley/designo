import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import AppDesign from './pages/AppDesign.jsx';
import Contact from './pages/Contact.jsx';
import Graphic from './pages/Graphic.jsx';
import Locations from './pages/Locations.jsx';
import Web from './pages/Web.jsx';


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="locations" element={<Locations />} />
        <Route path="graphic" element={<Graphic />} />
        <Route path="web" element={<Web />} />
        <Route path="app-design" element={<AppDesign />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
