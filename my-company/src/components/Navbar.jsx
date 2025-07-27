import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: '#1976d2',
        display: 'flex',
        justifyContent: 'center',
        padding: '10px 0',
        gap: '30px',
      }}
    >
      <Link style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }} to="/">Home</Link>
      <Link style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }} to="/about">About</Link>
      <Link style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }} to="/services">Services</Link>
      <Link style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }} to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;