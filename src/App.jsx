import {HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import About from './pages/HomePage/About';
import Portfolio from './pages/HomePage/Portfolio';
import Contact from './pages/HomePage/Contact';
import Error from './components/Error'
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ProjectCard from './components/ProjectCard';
import ProjectPage from './pages/Projects/ProjectPage';
import Mentionslegales from './pages/LegalNotice/Mentionslegales';

import './App.css'

function App() {
  return (
    <HashRouter>
      <div className="body"> 
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
        <Route path="/error" element={<Error />} />
        <Route path="/project/:projectId" element={<ProjectPage />} />
        <Route path="/mentionslegales" element={<Mentionslegales />} />
      </Routes>

      </div>
    
      <Footer/>
    </HashRouter>
  )
}

export default App
