function MainContent() {
  return (
    <main style={{
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto',
      backgroundColor: '#f9f9f9',
      minHeight: 'calc(100vh - 200px)'
    }}>
      <UserProfile 
        name="John Doe" 
        age={28} 
        bio="Loves traveling and exploring new cultures."
      />
      <UserProfile 
        name="Jane Smith" 
        age={32} 
        bio="Passionate about architecture and city planning."
      />
    </main>
  );
}

export default MainContent;