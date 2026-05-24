import * as mqtt from 'mqtt';

const client = mqtt.connect('mqtt://localhost:1883');

client.on('connect', () => {
  console.log('Connected to MQTT');
});

setInterval(() => {
  const payload = {
    deviceId: 'device_1',
    online: true,
    battery: Math.floor(Math.random() * 100),
    temp: Math.floor(Math.random() * 40),
    time: new Date().toISOString(),
  };

  client.publish('device/1/status', JSON.stringify(payload));
  console.log('Published:', payload);
}, 3000);