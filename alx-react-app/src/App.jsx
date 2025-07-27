import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

function App() {
  return (
    <div style={{ 
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: '#f5f5f5',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;