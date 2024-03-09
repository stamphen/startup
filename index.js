const express = require("express");
const app = express();
const port = process.argv.length > 2 ? process.argv[2] : 3000;
console.log('yo')
app.use(express.json());
app.use(express.static('public'));




setTimeout(() => {
    console.log('waited')
}, 2000);

// Find the port and serve up the web server
console.log('close')

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
console.log('after')
