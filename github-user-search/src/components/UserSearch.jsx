// src/components/UserSearch/UserSearch.jsx
import { useState } from 'react';
import { fetchUserData } from '../../services/githubService';
import './UserSearch.css'; // Optional styling

const UserSearch = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="user-search-container">
      <form onSubmit={handleSubmit} className="search-form">
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
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {loading && <div className="loading-message">Loading...</div>}
      
      {error && (
        <div className="error-message">
          Looks like we can't find the user. Error: {error}
        </div>
      )}

      {userData && (
        <div className="user-profile">
          <img 
            src={userData.avatar_url} 
            alt={`${userData.login}'s avatar`} 
            className="user-avatar"
          />
          <div className="user-info">
            <h2 className="user-name">{userData.name || userData.login}</h2>
            <p className="user-bio">{userData.bio}</p>
            <div className="stats">
              <span>Followers: {userData.followers}</span>
              <span>Following: {userData.following}</span>
              <span>Repos: {userData.public_repos}</span>
            </div>
            <a 
              href={userData.html_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="profile-link"
            >
              View GitHub Profile
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserSearch;S