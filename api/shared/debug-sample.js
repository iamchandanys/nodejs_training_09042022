// Command to install Debug
// npm i debug

// set DEBUG=* - To log everything.
// set DEBUG=app:logicDebug,app:dbDebug - To log specific namespace

const logicDebug = require('debug')('app:logicDebug');
const dbDebug = require('debug')('app:dbDebug');

function initDebug() {

    logicDebug('Logging logical debug...');
    dbDebug('Logging db debug...');

}

module.exports = initDebug;