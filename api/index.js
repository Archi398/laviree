const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();

// Initialize CORS middleware
app.use(cors());

// API handler for Vercel
app.get('/api/images', (req, res) => {
  console.log(`Request method: ${req.method}`);
  console.log(`Request URL: ${req.url}`);

  const { year } = req.query;

  if (!year) {
    return res.status(400).json({ error: 'Year parameter is required' });
  }

  const imagesDir = path.join(__dirname, '..', 'public', 'images', 'editions', year);
  console.log(`Images directory: ${imagesDir}`);

  fs.readdir(imagesDir, (err, files) => {
    if (err) {
      console.error('Error reading images directory:', err);
      return res.status(500).json({ error: 'Failed to list images' });
    }

    const imageFiles = files.filter((file) =>
      /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
    );
    res.json(imageFiles);
  });
});

// Handle 404
app.use((req, res) => {
  console.log('Route not found');
  res.status(404).send('Not Found');
});

// Export the handler to be used by Vercel
module.exports = app;
