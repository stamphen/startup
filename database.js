// Load modules and files
const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const creds = require('./dbConfig.json');

// Set up db
const url = `mongodb+srv://${creds.userName}:${creds.password}@${creds.hostname}`;
const client = new MongoClient(url);
const db = client.db('familyjournal');
const userscollection = db.collection('users');
const eventscollection = db.collection('events');

// Ping mongodb to make sure we're connected
async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch {
        console.log("Attempted to ping your deployment. Connection unsuccessful.")
        process.exit(1);
    }
}
run();


// Functions that reference mongodb
async function createuz(username, password) {
    // hash password so can't be seen on mongo atlas
    const hashpash = await bcrypt.hash(password, 10);
    const user = {
        username: username,
        password: hashpash,
        events: {},
        token: uuid.v4(),
    };
    await userscollection.insertOne(user);
    return user;
}

function finduz(username) {
    return userscollection.findOne({username: username});
}

function finduztoken(token) {
    return userscollection.findOne({token: token});
}

function createev(username, event) {
    eventscollection.insertOne({name:event.name, pic:event.url, d1:event.d1, d2:event.d2, member:event.members, comments:{}, pictures:{}});
    userscollection.findOne({username: username}).events.insert(event.name);
    return;
}

function findev(event) {
    return eventscollection.findOne({name: event});
}

function findcommz(event) {
    const eventz = findev(event);
    return eventz.comments;
}

function findpicz(event) {
    const eventz = findev(event);
    return eventz.pictures;
}

function createcomm(event, comment) {
    eventscollection[`${event}`].comments.insert(comment);
    return;
}

function createpik(event, src) {
    eventscollection[`${event}`].pictures.insert(src);
    return;
}

function listev(user) {
    const user_data = userscollection.findOne({name: user});
    const ev_list = user_data.events;
    console.log(user_data)
    console.log(ev_list)
    return ev_list;
}








module.exports = {
    finduz,
    finduztoken,
    createuz,
    createev,
    findev,
    findcommz,
    findpicz,
    createcomm,
    createpik,
    listev
}