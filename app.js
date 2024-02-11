const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000; // Use the environment port or 3000 as a fallback

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Candle Light Project running at http://localhost:${port}`);
});
