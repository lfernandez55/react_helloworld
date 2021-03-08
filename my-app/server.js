const express = require('express');
//see app.use(express.json()); line below, following not needed
//const bodyParser = require('body-parser')
const path = require('path');
const app = express();

//connect to the db
import {connect} from './server/config/db/connect'
connect("mongodb://localhost:27017/projectsdb")

// to use the following two lines install cors
// var cors = require('cors')
// app.use(cors())

app.use(express.static(path.join(__dirname, 'build')));


//see https://stackoverflow.com/questions/5710358/how-to-retrieve-post-query-parameters
app.use(express.json());       // to support JSON-encoded bodies
//also can probably get rid of body-parser above.
//see: https://medium.com/@mmajdanski/express-body-parser-and-why-may-not-need-it-335803cd048c

app.get('/ping', function (req, res) {
 return res.send('pong');
});


app.get('/api/test', function (req, res) {
    let proj = {};
    proj.name="My Big Project";
    proj.description="A tough tedious project";
    return res.send(JSON.stringify(proj));
});

// Routing
import {configureRoutes} from './server/config/routes'
configureRoutes(app)


app.listen(process.env.PORT || 8080);