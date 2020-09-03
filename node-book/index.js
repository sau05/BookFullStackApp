const express = require('express')
const routes = require('./src/routes')
const app = express()
const bodyParser = require('body-parser')
const router = express.Router()
var cors = require('cors');

app.use(cors({origin: 'http://localhost:3000'}));

app.use(bodyParser.json({limit: '50mb'}));
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
routes.configure(app, router)

// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//   );
//   next();
// });

app.listen(8080, () => {
    console.log(`app is listening on port: 8080`)
  })