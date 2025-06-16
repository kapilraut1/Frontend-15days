import React from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchUsers, createUser, updateUser } from './api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserForm = () => {
  const [form, setForm] = React.useState({ name: '', email: '', password: '' });
  const [editingUserId, setEditingUserId] = React.useState(null); // <-- Track the editing user
  const queryClient = useQueryClient();

  const { data: users, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  const createMutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      toast.success("User added successfully!");
      setForm({ name: '', email: '', password: '' });
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
    onError: () => {
      toast.error("Failed to add user");
    }
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => updateUser(id, data),
    onSuccess: () => {
      toast.success("User updated successfully!");
      setForm({ name: '', email: '', password: '' });
      setEditingUserId(null);
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
    onError: () => {
      toast.error("Failed to update user");
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingUserId) {
      updateMutation.mutate({ id: editingUserId, data: form });
    } else {
      createMutation.mutate(form);
    }
  };

  const handleEdit = (user) => {
    setForm({ name: user.name, email: user.email, password: user.password });
    setEditingUserId(user._id);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>{editingUserId ? "Edit User" : "Add User"}</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" /><br />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" /><br />
        <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Password" /><br />
        <button type="submit">{editingUserId ? "Update" : "Add"}</button>
      </form>

      <h3>User List</h3>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users?.map((u) => (
            <li key={u._id}>
              {u.name} - {u.email}
              <button onClick={() => handleEdit(u)} style={{ marginLeft: "1rem" }}>
                Edit
              </button>
            </li>
          ))}
        </ul>
      )}

      <ToastContainer />
    </div>
  );
};

export default UserForm;
