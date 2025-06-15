import React from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { fetchUsers, createUser } from './api';
import { ToastContainer, toast } from 'react-toastify';

const UserForm = () => {
  const [form, setForm] = React.useState({ name: '', email: '', password: '' });
  const queryClient = useQueryClient();

const { data: users, isLoading } = useQuery({
  queryKey: ['users'],
  queryFn: fetchUsers,
});


const mutation = useMutation({
  mutationFn: createUser,
  onSuccess: () => {
    toast.success("User added successfully!");
    queryClient.invalidateQueries({ queryKey: ['users'] });
  },
  onError: () => {
    toast.error("Failed to add user");
  }
});


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(form);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" /><br />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" /><br />
        <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Password" /><br />
        <button type="submit">Add</button>
      </form>

      <h3>User List</h3>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users?.map((u) => (
            <li key={u._id}>{u.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserForm;
