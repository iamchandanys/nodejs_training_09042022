// Node-config organizes hierarchical configurations for your app deployments.
// npm i config

// Command to set custom environment:
// WINDOWS: set dbSamplePassword=9090$0909
// MAC: export dbSamplePassword=9090$0909

const config = require('config');

function printConfig() {

    console.log(`Application Name - ${config.get('name')}`);
    console.log(`DB Name - ${config.get('sqlConnection.dbName')}`);
    console.log(`DB Password - ${config.get('sqlConnection.dbPassword')}`);

}

module.exports = printConfig;