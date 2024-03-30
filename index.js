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
MagicMirror.post('/newEv', async (req,res) => {           // post new event
    const newEv = {name:req.body['name'],url:req.body['url'],d1:req.body['d1'],d2:req.body['d2'],members:req.body['members']};
    await createev(j, newEv);
    res.send({name:req.body['name']});
});
MagicMirror.get('/listEv', async (req,res) => {          // return current user's events
    const ev_lst = await listev(req.body['user']);
    res.send(ev_lst);
});
MagicMirror.get('/findEv', async (req,res) => {
    const ret = await dB.findev(req.body['evname']);
    res.send(ret);
})

// Login fetch
MagicMirror.post('/account_new', async (req,res) => {    // create new account
    console.log('creating account')
    console.log('username is: ', req.body.username)
    try {
        const already = dB.finduz(req.body.username);
        if (typeof(already) == null) {
            console.log("true")
        } else {
            console.log("false")
        }
        console.log(already)
        res.status(409).send({msg: 'User Already Exists'});
    } catch {
        const newuz = await dB.createuz(req.body['username'],req.body['password']);
        console.log('new')
        res.send({id:newuz._id});
    }
});
MagicMirror.post('/login', async (req,res) => {            // login to existing account
    const logged_user = await dB.finduz(req.body.username);
    if (logged_user) {
        if (await bcrypt.compare(req.body.password, logged_user.password)) {
            setAuthCookie(res, logged_user.token);
            res.send({id: logged_user._id});
            return;
        }
    } else {
        res.status(401).send({msg: 'Unauthorized'});
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


// Find the port and serve up the web server
const port = process.argv.length > 2 ? process.argv[2] : 4000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});