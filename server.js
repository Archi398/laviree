const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');  // Import cors
const app = express();
const PORT = process.env.PORT || 5000;

// Apply CORS middleware to allow requests from any origin
app.use(cors());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// API endpoint to list files in the images folder for a specific year
app.get('/api/images', (req, res) => {
  const { year } = req.query; // Extract year from query parameter

  if (!year) {
    return res.status(400).json({ error: 'Year parameter is required' });
  }

  const imagesDir = path.join(__dirname, `public/images/editions/${year}`);
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

// Catch-all handler to serve the React app for any other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
