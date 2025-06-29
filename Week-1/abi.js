if ( !(username=="abhi" && password=="12") )
if (username != "abhi" || password != "12") {
   res.status(401).json({ "msg": "I am bad boy" });
}

const express = require("express");
const app = express();
app.use(express.json()); 

let requestCount = 0; // This will store the number of requests

// Middleware to count every request
app.use((req, res, next) => {
  requestCount++;
  console.log("Request Count:", requestCount);
  next(); // move to the next middleware or route
});

app.get("/", (req, res) => {
  res.send("Hello! Total Requests: " + requestCount);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
