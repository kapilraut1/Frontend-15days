import React, { useEffect, useState } from "react";
import './index.css'
export default function User() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch users");
        return res.json();
      })
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // empty array = run only once after mount

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div classname="container">
      <h2>👥 User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>🧑 {user.name}</li>
        ))}
      </ul>
    </div>
  );
}
