//give us express
// no ./ assumes that it is in the node modules
const express = require('express');

// creates a server by calloing express(), save in app
const app = express();

// local address port
const PORT = 5000;

// Serve static files!  Server use express static.  Path to static files of project.  Just the folder. HTML, CSS, JS, ect
app.use(express.static('server/public/'));

// SERVE DATA
const people = ['Gabin', 'Josh', 'Joe']

// hey server, when someone is requesting data, run this function
// /data is in the address bar after localhost:5000

// GET ROUTE
app.get('/data', (req, res) => {
  console.log('You got to /data');
  //ALL SERVER REQ NEED A RESPONSE
  // Tell server to hang up when finished
  // REQ stands for incoming response.  RES is the response.
  //SEND BACK people array
  res.send(people);

});

// START UP SERVER
app.listen(PORT, () => {
  // This will run when server starts
  // log so we can see if server is running
  console.log('Sever running on PORT:', PORT);
});