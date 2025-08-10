import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css' // Make sure this line exists

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
import { useState } from "react";
import Search from "./Search";
import UserCard from "./UserCard";
import { searchUsers } from "./githubService";

export default function App() {
  const [users, setUsers] = useState([]);
  const [searchParams, setSearchParams] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch data from API
  const fetchUsers = async (params, pageNum) => {
    setLoading(true);
    setError("");
    try {
      const data = await searchUsers({ ...params, page: pageNum });

      // Fetch extra details (location, repo count)
      const detailedUsers = await Promise.all(
        data.items.map(async (user) => {
          const res = await fetch(user.url);
          const details = await res.json();
          return {
            ...user,
            location: details.location,
            public_repos: details.public_repos
          };
        })
      );

      setUsers((prev) => (pageNum === 1 ? detailedUsers : [...prev, ...detailedUsers]));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle search form submit
  const handleSearch = (params) => {
    setSearchParams(params);
    setPage(1);
    setUsers([]);
    fetchUsers(params, 1);
  };

  // Load more pagination
  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchUsers(searchParams, nextPage);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Search onSearch={handleSearch} />

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {/* Results */}
      <div className="grid gap-4 mt-6">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>

      {/* Loading */}
      {loading && <p className="mt-4 text-blue-600">Loading...</p>}

      {/* Load More */}
      {users.length > 0 && !loading && (
        <div className="flex justify-center mt-6">
          <button
            onClick={loadMore}
            className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
