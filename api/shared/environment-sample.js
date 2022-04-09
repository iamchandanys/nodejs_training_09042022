// Command to set node environment:
// WINDOWS: set NODE_ENV=production/development/staging
// MAC: export NODE_ENV=production/development/staging

// Command to set custom environment:
// WINDOWS: set dbSamplePassword=9090$0909

const express = require('express');
const app = express();

function printEnvironment() {

    if (app.get('env') === 'development') {
        console.log('Running on development environment...');
    } else if (app.get('env') === 'staging') {
        console.log('Running on staging environment...');
    } else {
        console.log('Running on production environment...');
    }

}

module.exports = printEnvironment;