const express = require('express');
const port = 2000;
const router = require('./router.js');
const morgan = require('morgan');

const app = express();


app.use(express.static(__dirname + '/../dist/'));
app.use(morgan('dev'));
app.use('/api', router);



app.listen(port, () => console.log("listenin on 2000"));

// JUST UNTIL AWS IS RUNNING
app.use('/Users', ((req, res) => {
  console.log(req.url);
  res.redirect("http://localhost:2001" + "/Users" + req.url);
})); 