const express = require('express');
const app = express();
app.post("health check", function (req, res) {
    const kindneys = req.body.kidneys;
    const liver = req.body.liver;
    const heart = req.body.heart;
    res.send("your heart is good and your liver is good and your kidneys are good");
});

app.use((res.req.error.next)=>{
    //console.error("Error occurred:", error);
    res.status(500).send("Internal Server Error");
});
app.listen(3000);