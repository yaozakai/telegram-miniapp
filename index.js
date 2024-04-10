import express from 'express';
import path from 'path';

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'frontend/build')));

// Define your API routes
app.get('/api', (req, res) => {
  res.json({ message: 'API is working' });
});

// For any other requests, send the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
