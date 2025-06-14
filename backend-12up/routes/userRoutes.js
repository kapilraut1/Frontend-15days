import express from 'express';
import User from '../models/User.js';

const router = express.Router();

// GET all users
router.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// POST new user
router.post('/', async (req, res) => {
  const { name, email, password } = req.body;
  const user = new User({ name, email, password });
  await user.save();
  res.status(201).json(user);
});

// PUT update user
router.put('/:id', async (req, res) => {
  const { name, email, password } = req.body;
  const updatedUser = await User.findByIdAndUpdate(
    req.params.id,
    { name, email, password },
    { new: true }
  );
  res.json(updatedUser);
});

// DELETE user
router.delete('/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: 'User deleted' });
});

export default router;
