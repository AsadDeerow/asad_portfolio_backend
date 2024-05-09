// src/server.ts

import express from 'express';
import dotenv from 'dotenv';
import { createProfile, updateProfile, deleteProfile } from './routes/profileRoutes'; // Import the controller functions

const app = express();
const PORT = process.env.PORT || 3000;

// Load environment variables from .env file
dotenv.config();

// Middleware
app.use(express.json());

// Routes
app.post('/api/profiles', createProfile);
app.put('/api/profiles/:id', updateProfile);
app.delete('/api/profiles/:id', deleteProfile);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
