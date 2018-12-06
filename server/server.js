const express = require("express");
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname,'..')));
app.use(function(req, res, next) {
    res.writeHead(200, {'content-Type': 'text/plain' });
    res.end("Looks like you didn't find a static file.");
});
app.listen(port, () => console.log('Server started at ' + port));