const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const router = require('./router');

// DB Setup
mongoose.connect('mongodb://localhost:auth/auth');

// App Setup
// morgan is used to log incoming requests - logs info in console
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));

router(app);



// Server Setup
const port = process.env.PORT || 3090;

app.listen(port, () => {
  console.log('Server listening on:', port);
});