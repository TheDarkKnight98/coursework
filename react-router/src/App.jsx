import { Routes, Route } from 'react-router-dom'
import Blue from './components/Blue'
import Green from './components/Green'
import Red from './components/Red'
import Yellow from './components/Yellow'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <div id="container">
      <Navbar />
      
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/green" element={<Green />} />
          <Route path="/red" element={<Red />} />
          <Route path="/yellow" element={<Yellow />} />
        </Routes>
      </div>

      <Footer />
    </div>    
  )
}

export default App
