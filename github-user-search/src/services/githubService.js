/ src/services/githubService.js
import axios from 'axios';

const API_URL = import.meta.env.VITE_APP_GITHUB_API_URL || 'https://api.github.com';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${API_URL}/users/${username}`, {
      headers: {
        Authorization: import.meta.env.VITE_APP_GITHUB_TOKEN 
          ? `token ${import.meta.env.VITE_APP_GITHUB_TOKEN}`
          : undefined,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response?.status === 404) {
      throw new Error('User not found');
    }
    throw new Error('Failed to fetch user data');
  }
};