// src/services/githubService.js
import axios from 'axios';

const API_URL = import.meta.env.VITE_APP_GITHUB_API_URL || 'https://api.github.com';
const PER_PAGE = 10; // Number of results per page

export const advancedSearchUsers = async (params) => {
  try {
    // Construct the search query
    const queryParts = [];
    
    if (params.username) queryParts.push(`${params.username} in:login`);
    if (params.location) queryParts.push(`location:${params.location}`);
    if (params.minRepos) queryParts.push(`repos:>${params.minRepos}`);
    if (params.language) queryParts.push(`language:${params.language}`);
    
    const queryString = queryParts.join('+');
    
    if (!queryString) {
      throw new Error('Please provide at least one search parameter');
    }

    // Make the initial search request
    const searchResponse = await axios.get(`${API_URL}/search/users`, {
      params: {
        q: queryString,
        page: params.page || 1,
        per_page: PER_PAGE
      },
      headers: {
        Authorization: import.meta.env.VITE_APP_GITHUB_TOKEN 
          ? `token ${import.meta.env.VITE_APP_GITHUB_TOKEN}`
          : undefined,
        Accept: 'application/vnd.github.v3+json'
      }
    });

    // If no results found
    if (searchResponse.data.items.length === 0) {
      return { items: [], total_count: 0 };
    }

    // Fetch detailed information for each user
    const userDetailsRequests = searchResponse.data.items.map(user => 
      axios.get(`${API_URL}/users/${user.login}`, {
        headers: {
          Authorization: import.meta.env.VITE_APP_GITHUB_TOKEN 
            ? `token ${import.meta.env.VITE_APP_GITHUB_TOKEN}`
            : undefined
        }
      }).catch(() => null) // Gracefully handle failed requests
    );

    const userDetailsResponses = await Promise.all(userDetailsRequests);
    
    // Combine basic and detailed user information
    const enrichedUsers = searchResponse.data.items.map((user, index) => {
      const details = userDetailsResponses[index]?.data || {};
      return {
        ...user,
        name: details.name,
        location: details.location,
        public_repos: details.public_repos,
        followers: details.followers,
        html_url: details.html_url || user.html_url
      };
    });

    return {
      items: enrichedUsers,
      total_count: searchResponse.data.total_count
    };
  } catch (error) {
    console.error('GitHub API error:', error);
    throw new Error(
      error.response?.data?.message || 
      error.message || 
      'Failed to search GitHub users'
    );
  }
};