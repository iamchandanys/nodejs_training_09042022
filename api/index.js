const express = require('express');
const morgan = require('morgan');
const logger = require('./shared/custom-logger-sample');
const config = require('./shared/config-sample');
const environment = require('./shared/environment-sample');
const debug = require('./shared/debug-sample');
const orders = require('./routes/orders');
const app = express();

app.use(express.json()); // Inbuilt middleware to parse incoming requests with JSON payloads
app.use(express.urlencoded({ extended: true })); //  Inbuilt middleware to parse incoming requests with urlencoded payloads
app.use(logger); // Custom middleware to log the incoming requests
app.use(morgan('tiny')); // Third party middleware to log the incoming requests
app.use('/api/order', orders);

environment();
config();
debug();

// To listen port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port number ${port}...`);
});