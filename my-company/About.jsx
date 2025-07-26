function About() {
  return (
    <div style={{ 
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '8px',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h1 style={{ color: '#333' }}>About Us</h1>
      <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
        Our company has been providing top-notch services since 1990. We specialize in various fields 
        including technology, marketing, and consultancy. With a team of dedicated professionals, 
        we strive to deliver innovative solutions to our clients.
      </p>
    </div>
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer'; // Optional
import './App.css';

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', position: 'relative' }}>
        <Navbar />
        <div style={{ paddingBottom: '60px' }}> {/* Adjust if using footer */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer /> {/* Optional */}
      </div>
    </Router>
  );
}

export default About;