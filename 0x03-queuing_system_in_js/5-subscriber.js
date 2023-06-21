//create  a  redis client
const client = require('redis').createClient();
//On connect, it should log the message Redis client connected to the server
client.on('connect', () => {
    console.log('Redis client connected to the server');
}
);
//On error, it should log the message Redis client not connected to the server: <error>
client.on('error', (error) => {
    console.log(`Redis client not connected to the server: ${error.message}`);
    }
);
//It should subscribe to the channel holberton school channel
client.subscribe('holberton school channel');
//When a message is published to the channel, it should log the message <message received>: message
client.on('message', (channel, message) => {
    console.log(message);
    if (message === 'KILL_SERVER') {
        client.unsubscribe();
        client.quit();
    }
}
);

