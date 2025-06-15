import express from 'express';
import PocketBase from 'pocketbase';

const router = express.Router();
const pb = new PocketBase('http://localhost:8090');

router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await pb.collection('users').create({
      email,
      password,
      passwordConfirm: password,
    });

    res.status(201).json({ message: 'User registered', user });
  } catch (err: any) {
    console.error('Register error:', err.response?.data || err.message);
    res.status(400).json({ error: err.response?.data || 'Registration failed' });
  }
});

export default router;