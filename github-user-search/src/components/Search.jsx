import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <h1>GitHub User Search</h1>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="search-input"
        />
        <button 
          type="submit" 
          className="search-button"
          disabled={loading}
        >
          Search
        </button>
      </form>

      {/* Loading State */}
      {loading && <div className="loading-message">Loading...</div>}

      {/* Error State */}
      {error && (
        <div className="error-message">
          Looks like we can't find the user
        </div>
      )}

      {/* Success State */}
      {userData && (
        <div className="user-profile">
          <img 
            src={userData.avatar_url} 
            alt={`${userData.login}'s avatar`} 
            className="user-avatar"
          />
          <div className="user-info">
            <h2 className="user-name">{userData.name || userData.login}</h2>
            {userData.bio && <p className="user-bio">{userData.bio}</p>}
            <div className="user-stats">
              <span>Followers: {userData.followers}</span>
              <span>Following: {userData.following}</span>
              <span>Repositories: {userData.public_repos}</span>
            </div>
            <a 
              href={userData.html_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="profile-link"
            >
              View Profile on GitHub
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;