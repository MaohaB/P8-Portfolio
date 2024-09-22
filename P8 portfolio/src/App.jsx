import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About/';
import Portfolio from './pages/Portfolio/';
import Contact from './pages/Contact/';
import Error from './components/Error'
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="body"> 
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
        <Route path="/error" element={<Error />} />
      </Routes>

      </div>
    
      <Footer/>
    </BrowserRouter>
  )
}

export default App
