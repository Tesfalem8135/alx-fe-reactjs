function Services() {
  return (
    <div style={{ 
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '8px',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h1 style={{ color: '#333' }}>Our Services</h1>
      <ul style={{ 
        listStyle: 'none',
        padding: 0,
        fontSize: '16px',
        lineHeight: '2'
      }}>
        <li style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>Technology Consulting</li>
        <li style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>Market Analysis</li>
        <li style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>Product Development</li>
        <li style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>Digital Marketing</li>
        <li style={{ padding: '8px' }}>Customer Support Solutions</li>
      </ul>
    </div>
  );
}

export default Services;