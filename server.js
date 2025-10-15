const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000; 

// Serve static files from a 'public' directory (where index.html would reside)
app.use(express.static(path.join(__dirname, 'public')));

// Catch-all route to serve index.html for all other requests (useful for SPAs)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
