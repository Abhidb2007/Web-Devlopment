const express = require('express');
const app = express();
app.post("health check", function (req, res) {
    const kindneys = req.body.kidneys;
    const liver = req.body.liver;
    const heart = req.body.heart;
    res.send("your heart is good and your liver is good and your kidneys are good");
});