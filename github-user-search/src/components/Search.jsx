import { useState } from "react";

export default function Search({ onSearch }) {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ username, location, minRepos });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row gap-3 bg-white p-4 rounded-xl shadow-lg"
    >
      {/* Username Input */}
      <div className="flex flex-col flex-1">
        <label htmlFor="username" className="text-sm font-medium text-gray-700">
          Username
        </label>
        <input
          id="username"
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Location Input */}
      <div className="flex flex-col flex-1">
        <label htmlFor="location" className="text-sm font-medium text-gray-700">
          Location
        </label>
        <input
          id="location"
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Min Repos Input */}
      <div className="flex flex-col w-32">
        <label htmlFor="minRepos" className="text-sm font-medium text-gray-700">
          Min Repos
        </label>
        <input
          id="minRepos"
          type="number"
          placeholder="0"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Submit Button */}
      <div className="flex items-end">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full md:w-auto"
        >
          Search
        </button>
      </div>
    </form>
  );
}