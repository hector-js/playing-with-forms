// server.js
const express = require('express');
const http = require('http');
const path = require('path');

const app = express();


// Run the app by serving the static files
// in the dist directory
console.log('DIRECTION: ', __dirname+'\\dist')
app.use(express.static(__dirname + '\\dist'));

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname));
});

const port = process.env.PORT || 8080;
app.set('port',port);

const server = http.createServer(app);
// Start the app by listening on the default
// Heroku port
server.listen(port, ()=> console.log(`Running`));