import { Router } from 'express';

const userRoutes = Router();

userRoutes.get('/', (req, res) => {
  res.send('Get all users');
});

userRoutes.get('/:id', (req, res) => {
  res.send(`Get user with ID ${req.params.id}`);
});

export default userRoutes;