const express = require("express");
const app = express();
const port = process.argv.length > 2 ? process.argv[2] : 3000;

app.use(express.json());
app.use(express.static('public'));





// Find the port and serve up the web server

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});