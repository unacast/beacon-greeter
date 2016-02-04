var bleacon = require('bleacon');
var lite = require('./lite.js');

// -------
// Scanning for iBeacon
// -------
//
// The UUID of my specific beacon, change 
// this to your own
var uuid = '801ddf60a55743b5bba1d4abefc13045'; 

console.log("Start scanning");
bleacon.startScanning(uuid);

// -------
// What to do when the beacon is discovered
// -------
bleacon.on('discover', function(b) {
  console.log(b);
  bleacon.stopScanning();
  lite.write();
  setTimeout(function(){bleacon.startScanning(uuid)}, 43200000);
});

