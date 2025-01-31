const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// API Endpoint
app.get("/", (req, res) => {
  res.json({
    email: "olorunfemiayomide045@gmail.com",  
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/Oorunfemi890/hng12-stage0-api.git",  
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
