// Initialize express and other modules
const express = require('express');
const cookieparser = require('cookie-parser');
const bcrypt = require('bcrypt');
const dB = require('./database.js');
const websock = require('./websocket.js');
const app = express();
app.use(express.json());

// Set up cookies, static files, and Router
app.use(cookieparser());
app.use(express.static('public'));
var MagicMirror = express.Router();
app.use(`/narcissism`, MagicMirror);

const authCookieName = 'token';


// Login fetch
MagicMirror.post('/account_new', async (req,res) => {    // create new account
    try {
        const already = await dB.finduz(req.body.username);
        if (already == null) {
            throw new Error();
        }
        res.status(409).send({msg: 'User Already Exists'});
    } catch {
        const newuz = await dB.createuz(req.body['username'],req.body['password']);
        setAuthCookie(res, new_uz.token);
        res.send({id:newuz._id});
    }
});
MagicMirror.post('/login', async (req,res) => {            // login to existing account
    const logged_user = await dB.finduz(req.body.username);
    if (logged_user != null) {
        if (await bcrypt.compare(req.body.password, logged_user.password)) {
            setAuthCookie(res, logged_user.token);
            res.send({id: logged_user._id});
            return;
        }
    }
    res.status(401).send({msg: 'Unauthorized'});
});
MagicMirror.post('/finduze', async (req,res) => {
    const uze = await dB.finduz(req.body.username);
    if (uze != null) {
        res.send({id: uze._id})
        return;
    } else {
        res.status(401).send({msg: 'No User Found'})
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

// Comments/Pictures fetch
secureMirror.get('/comments', async (req,res) => {        // return list of comments
    // Auth current user, then retrieve db data about comments //
    const cur_uz = req.body.username;
    const cur_ev = req.body.event_name;
    const uz = await dB.finduz({username: cur_uz});
    const commentz = uz.events[`${cur_ev}`].comments;
    res.send(commentz);
});
secureMirror.post('/comment', (req,res) => {         // post new comment
    current_user.current_event.comments.push(req.body);
    res.send(current_user.current_event.comments);
});
secureMirror.get('/pictures', (_req,res) => {        // return list of pictures
    res.send(current_user.current_event.pictures);
});
secureMirror.post('/photograph', (req,res) => {      // post new picture
    current_user.current_event.pictures.push(req.body);
    res.send(current_user.current_event.pictures);
});

// Events fetch
secureMirror.post('/newEv', async (req,res) => {           // post new event
    const user = req.body['username']
    const newEv = {name:req.body['name'],url:req.body['url'],d1:req.body['d1'],d2:req.body['d2'],members:req.body['members']};
    await dB.createev(user, newEv);
    res.send({name:req.body['name']});
});
secureMirror.post('/listEv', async (req,res) => {          // return current user's events
    const ev_lst = await dB.listev(req.body['user']);
    console.log(ev_lst)
    res.send(ev_lst);
});
secureMirror.get('/findEv', async (req,res) => {
    const ret = await dB.findev(req.body['evname']);
    res.send(ret);
})


// Simon code for handling errors, page redirection, and setting cookies

// Default error handler
app.use(function (err, req, res, next) {
    res.status(500).send({ type: err.name, message: err.message });
});

  // Return the application's default page if the path is unknown
app.use((_req, res) => {
    res.sendFile('index.html', {root: 'public'});
});

  // setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
        secure: true,
        httpOnly: true,
        sameSite: 'strict',
    });
}


// Find the port and serve up the web server, then initiate WebSocket
const port = process.argv.length > 2 ? process.argv[2] : 4000;
const myServer = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

websock.initializeWS(myServer);