function Footer() {
  return (
    <footer style={{
      backgroundColor: '#34495e',
      color: '#ecf0f1',
      textAlign: 'center',
      padding: '15px 0',
      position: 'relative',
      bottom: '0',
      width: '100%'
    }}>
      <p style={{ margin: '0' }}>
        &copy; {new Date().getFullYear()} My Favorite Cities App
      </p>
      <p style={{ 
        margin: '5px 0 0',
        fontSize: '0.9rem',
        color: '#bdc3c7'
      }}>
        Created with React
      </p>
    </footer>
  );
}

export default Footer;