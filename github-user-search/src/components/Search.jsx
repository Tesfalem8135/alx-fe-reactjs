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
 max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.search-form {
  display: flex;
  margin-bottom: 20px;
}

.search-input {
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
}

.search-button {
  padding: 10px 20px;
  background-color: #0366d6;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
}

.search-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.user-profile {
  display: flex;
  gap: 20px;
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
}

.user-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.user-info {
  flex: 1;
}

.user-name {
  margin: 0 0 10px 0;
}

.user-bio {
  margin: 0 0 10px 0;
  color: #586069;
}

.stats {
  display: flex;
  gap: 15px;
  margin: 10px 0;
}

.profile-link {
  display: inline-block;
  margin-top: 10px;
  color: #0366d6;
  text-decoration: none;
}

.loading-message,
.error-message {
  padding: 10px;
  text-align: center;
}

.error-message {
  color: #cb2431;
}

export default UserSearch;S