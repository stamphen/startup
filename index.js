// Make sure express is working
const express = require('express');
const cookieparser = require('cookie-parser');
const bcrypt = require('bcrypt');
const dB = require('./database.js');
const app = express();
app.use(express.json());

// Set up cookies, static files, and Router
app.use(cookieparser());
app.use(express.static('public'));

var MagicMirror = express.Router();
app.use(`/narcissism`, MagicMirror);

const authCookieName = 'token';

// Comments/Pictures fetch
MagicMirror.get('/comments', async (req,res) => {        // return list of comments
    // Auth current user, then retrieve db data about comments //
    const cur_uz = req.body.username;
    const cur_ev = req.body.event_name;
    const uz = await dB.finduz({username: cur_uz});
    const commentz = uz[`${cur_ev}`].comments;
    res.send(commentz);
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
MagicMirror.post('/account_new', async (req,res) => {    // create new account
    const already = await dB.finduz(req.body.username);
    if (already) {
        res.status(409).send({msg: 'User Already Exists'});
    } else {
        const newuz = await dB.createuz(req.body['username'],req.body['password']);
        res.send({id:newuz._id});
    }
});
MagicMirror.get('/login', async (req,res) => {            // login to existing account
    const logged_user = await dB.finduz(req.body.username);
    if (logged_user) {
        if (await bcrypt.compare(req.body.password, logged_user.password)) {
            setAuthCookie(res, logged_user.token);
            res.send({id: logged_user._id });
            return;
        }
    } else {
        res.status(401).send({msg: 'Unauthorized'});
    }
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


// Create Secure Router (sends error if cookie isn't a valid auth token)
var secureMirror = express.Router();
MagicMirror.use(secureMirror)
secureMirror.use(async (req,res,next) => {
    authtoken = req.cookies[authCookieName];
    const user = await dB.finduztoken(authtoken);
    if (user) {
        next();
    } else {
        res.status(401).send({msg: 'Unauthorized'});
    }
});






// Find the port and serve up the web server
const port = process.argv.length > 2 ? process.argv[2] : 4000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});