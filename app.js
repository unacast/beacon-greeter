var bleacon = require('bleacon');
var lite = require('./lite.js');

// -------
// Scanning for iBeacon
// -------
var uuid = '801ddf60a55743b5bba1d4abefc13045';
var major = 26964; // 0 - 65535
var minor = 22223; // 0 - 65535

console.log("Start scanning");
bleacon.startScanning(uuid);

bleacon.on('discover', function(b) {
  console.log(b);
  bleacon.stopScanning();
  lite.write();
});

