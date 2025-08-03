import axios from 'axios';

const API_URL = import.meta.env.VITE_APP_GITHUB_API_URL;

export const searchUsers = async (query) => {
  try {
    const response = await axios.get(`${API_URL}/search/users?q=${query}`);
    return response.data.items;
  } catch (error) {
    console.error('Error searching users:', error);
    return [];
  }
};

export const getUserDetails = async (username) => {
  try {
    const response = await axios.get(`${API_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user details:', error);
    return null;
  }
};