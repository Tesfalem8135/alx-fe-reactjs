
import Header from './components/Header';
import MainContent from '.components/MainContent';
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <UserProfile 
        name="Alice" 
        age={25} 
        bio="Loves hiking and photography" 
      />
      
    </div>
  );
}

export default App;