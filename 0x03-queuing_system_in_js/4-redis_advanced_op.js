import { createClient, print } from 'redis';

const client = createClient();

client.on('error', (error) => {
    print(`Redis client not connected to the server: ${error.message}`);
    }
);

client.on('connect', () => {
    print('Redis client connected to the server');
}
);

const keys = ['Portland', 'Seattle', 'New York', 'Bogota', 'Cali', 'Paris'];
const values = [50, 80, 20, 20, 40, 2];

for (const key in keys) {
    client.hset('HolbertonSchools', keys[key], values[key], (error, reply) => {
        print(`Reply: ${reply}`);
    });
}

client.hgetall('HolbertonSchools', (error, object) => {
    print(object);
}
);


