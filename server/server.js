const express = require('express');
const dotenv = require('dotenv');
const paymentRoutes = require('./paymentIntent'); // Update the path as needed

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use('/api', paymentRoutes); // Use the router for API routes

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
