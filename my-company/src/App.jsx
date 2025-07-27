


import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';

function RecipeSharing() {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/recipes" element={<RecipeSharing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
