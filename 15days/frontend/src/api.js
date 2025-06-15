// frontend/src/api.js
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/v1/users';

export const fetchUsers = async () => {
  const res = await fetch("http://localhost:3000/api/v1/users");
  const data = await res.json();

  // If your backend wraps the array inside an object (e.g., { users: [...] })
  // You should return data.users instead of data
  return data; // or return data.users if that's the case
};

export const createUser = (userData) =>
  axios.post(BASE_URL, userData).then(res => res.data);
