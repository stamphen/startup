// Make sure express is working
const express = require("express");
const cors = require("cors")
const app = express();
app.use(cors());

// Bring up the web static files
app.use(express.json());
app.use(express.static('public'));

// Set up a router so I can make web server requests to my own code
var MagicMirror = express.Router();
app.use(`/self`, MagicMirror);

// Comments/Pictures fetch
MagicMirror.get('/comments', (req,res) => {
    res.send(comments);
})

MagicMirror.post('/comment', (req,res) => {
    comments.push(req.body);
    res.send(comments);
})

MagicMirror.get('/pictures', (_req,res) => {
    res.send(pictures)
})

MagicMirror.post('/photograph', (req,res) => {
    pictures.push(req.body);
    res.send(pictures);
})
MagicMirror.delete('/dl', (_req,_res) => {
    comments = []
    pictures = []
})


// Find the port and serve up the web server
const port = process.argv.length > 2 ? process.argv[2] : 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

let comments = []
let pictures = []
