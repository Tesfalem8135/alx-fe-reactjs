import { useState } from "react";
import { fetchUserData } from "../services/githubService"; // ✅ Explicitly importing

export default function Search() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username.trim()) return;

    setLoading(true);
    setError("");
    setUserData(null);

    try {
      // ✅ Explicit usage of fetchUserData inside Search.jsx
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      {/* Search Form */}
      <form onSubmit={handleSubmit} className="flex items-center gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="flex-1 border border-gray-300 rounded p-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Search
        </button>
      </form>

      {/* Conditional Rendering */}
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {userData && (
        <div className="bg-white shadow p-4 rounded text-center">
          <img
            src={userData.avatar_url}
            alt={userData.login}
            className="w-24 h-24 mx-auto rounded-full"
          />
          <h2 className="mt-2 font-bold text-lg">{userData.name || userData.login}</h2>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  );
export default Search;