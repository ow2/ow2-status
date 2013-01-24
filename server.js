/**
 * 
 * Copyright(c) 2013 Christophe Hamerling <chamerling@ow2.org>
 * MIT Licensed
 */
 
var fs = require('fs')
  , util = require('util')
  , server = require('statusdashboard/server')

var input = fs.readFileSync('./config.json', 'utf-8');
var settings = JSON.parse(input);

// update settings from platform variables
settings.port = process.env.PORT || settings.port;
// settings REDISTOGO URL
// TODO

process.on('exit', function () {
  util.log('Bye bye Statusdashboard.');
});

process.on('uncaughtException', function(err) {
  util.log(err.stack.replace(/^    /gm, '                  '));
});

/* Not available in npmjs for now
var dashboard = new server.dashboard(settings, function() {
  console.log('Server is started!!!');
  console.log(settings)
});
*/
var dashboard = new server.dashboard(settings, function() {
  console.log('Server has been started');
});
