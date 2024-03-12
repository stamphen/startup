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
MagicMirror.get('/comments', (_req,res) => {        // return list of comments
    res.send(current_user.current_event.comments);
});
MagicMirror.post('/comment', (req,res) => {         // post new comment
    current_user.current_event.comments.push(req.body);
    res.send(current_user.current_event.comments);
});
MagicMirror.get('/pictures', (_req,res) => {        // return list of pictures
    res.send(current_user.current_event.pictures);
});
MagicMirror.post('/photograph', (req,res) => {      // post new picture
    current_user.current_event.pictures.push(req.body);
    res.send(current_user.current_event.pictures);
});
MagicMirror.delete('/dl', (_req,_res) => {          // delete saved lists of comm/pics
    current_user.current_event.comments = [];
    current_user.current_event.pictures = [];
});

// Events fetch
MagicMirror.get('/currEv', (_req,res) => {          // return current event
    res.send(current_user.current_event);
});
MagicMirror.post('/newEv', (req,res) => {           // post new event
    const newEv = new Event(req.body.name,req.body.url,req.body.d1,req.body.d2);
    newEv.addEv();
    res.send(current_user.current_event);
});
MagicMirror.delete('/delEv', (_req,_res) => {       // delete current event
    current_user.current_event.delEv();
});
MagicMirror.get('/switchEv', (req,_res) => {        // switch to a different event
    difEv = req.body;
    current_user.current_event = difEv;
});

// Login fetch
MagicMirror.post('/account_new', (req,_res) => {    // create new account
    const perp = new User(req.body.username, req.body.password);
    perp.addUz();
});
MagicMirror.get('/login', (req,res) => {            // login to existing account
    const try_user = req.body;
    if (try_user in users) {
        current_user = try_user;
        res.send(true);
    } else {
        res.send(false);
    }
});
MagicMirror.put('/logout', (_req,res) => {           // logout
    current_user = null;
    res.send(false);
});


// Find the port and serve up the web server
const port = process.argv.length > 2 ? process.argv[2] : 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});


// Variables in which to store data
let current_user = null
let users = [];


// Classes
class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.events = [];
        this.current_event = null;
    }
    addUz() {
        current_user = this;
        users.push(this);
    }
}
class Event {
    constructor(name, url, date1, date2) {
        this.name = name;
        this.url = url;
        this.date1 = date1;
        this.date2 = date2;
        this.comments = [];
        this.pictures = [];
    }
    addEv() {
        current_user.events.push(this);
        current_user.current_event = this;
    }
    delEv() {
        current_user.events.remove(this);
        current_user.current_event = null;
    }
}