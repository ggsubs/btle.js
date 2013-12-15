var attribute = require('./lib/attribute');
var btle = require('./lib/btle');
var characteristic = require('./lib/characteristic');
var gatt = require('./lib/gatt');
var Peripheral = require('./lib/peripheral');
var service = require('./lib/service');
var UUID = require('./lib/uuid');

btle.setDebug(true);

var data = {flags: Peripheral.AdvertisementFlags.LIMITED_DISCOVERABLE | Peripheral.AdvertisementFlags.BR_EDR_NOT_SUPPORTED,
            completeName: 'foo'};
var services = [];

// GAP service
var characteristics = [];
characteristics.push(characteristic.create(0x02, characteristic.Properties.READ, gatt.CharTypes.DEVICE_NAME,  'My BLE Device'));
services.push(service.create(0x01, gatt.Services.GAP, null, characteristics));

// GATT service
characteristics = [];
characteristics.push(characteristic.create(0x05, characteristic.Properties.INDICATE, 0x2A05));
services.push(service.create(0x04, gatt.Services.GATT, null, characteristics));

var peripheral = Peripheral.create(services);
peripheral.advertise(data, data);
peripheral.listen({source: 'hci0'}, function(err, central) {
  if (err) {
    return console.log(err);
  }

  console.log("Got connection!!!");
  /*
  central.on('data', function(data) {
    console.log(data);
  });
  */
});