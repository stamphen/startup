// Make sure express is working
const express = require('express');
const cookieparser = require('cookie-parser');
const bcrypt = require('bcrypt');
const DB = require('./database.js');
const app = express();
app.use(express.json());

// Set up cookies, static files, and Router
app.use(cookieParser());
app.use(express.static('public'));

var MagicMirror = express.Router();
app.use(`/self`, MagicMirror);



// Comments/Pictures fetch
MagicMirror.get('/comments', (_req,res) => {        // return list of comments
    // Auth current user, then retrieve db data about comments //
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
    const newEv = new Event(req.body['name'],req.body['url'],req.body['d1'],req.body['d2'],req.body['members']);
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
MagicMirror.get('/listEv', (_req,res) => {          // return current user's events
                //try {
                //    const evs = current_user.events;
                //    res.send({"success!":"yes!"});
                //    //res.send(evs);
                //} catch {
                //    const fal = "failure"
                //    res.send({"failure":"yes"})
                //}
    if (current_user != undefined) {    
        res.send({"success":"success"})
    } else {
        res.send({"failure":"failure"});
    }
});

// Login fetch
MagicMirror.post('/account_new', (req,res) => {    // create new account
    const perp = new User(req.body['username'], req.body['password']);
    if (perp in users) {
        res.send(false);
    } else {
        perp.addUz();
        res.send(true);
    }
});
MagicMirror.post('/login', (req,res) => {            // login to existing account
    const try_user = new User(req.body[0],req.body[1]);
    same = false;
    for (user in users) {
        if (JSON.stringify(user.name) = JSON.stringify(try_user.name)) {
            same = true;
        }
    }
    if (same = true) {
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
MagicMirror.get('/uz', (_req,res) => {              // get current user
    // Change to use local storage
    
    console.log(current_user);
    if (current_user != undefined) {
        res.send(current_user);
        //res.send(JSON.stringify(current_user.objectify()));
    } else {
        res.send(false)
    }
});



// Create Secure Router
var secureMirror = express.Router();
MagicMirror.use(secureMirror)




// Variables in which to store data
let users = [];
let current_user = undefined;


// Classes
class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.events = [];
    }
    addUz() {
        current_user = this;
        users.push(this);
    }
    objectify() {
        return {username:this.username,password:this.password,events:this.events}
    }
}
class Event {
    constructor(name, url, date1, date2, members) {
        this.name = name;
        this.url = url;
        this.date1 = date1;
        this.date2 = date2;
        this.members = members;
        this.comments = [];
        this.pictures = [];
    }
    addEv() {
        current_user.events.push(this);
        current_user.current_event = this;
        return
    }
    objectify() {
        return {name:this.name,url:this.url,d1:this.date1,d2:this.date2,members:this.members,comments:this.comments,pictures:this.pictures}
    }
}


// Find the port and serve up the web server
const port = process.argv.length > 2 ? process.argv[2] : 4000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});