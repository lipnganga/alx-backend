import { createClient, print } from 'redis';
import { promisify } from 'util';
const client = createClient();

client.on('error', (err) => {
    console.log(`Redis client not connected to the server: ${err.message}`);
    }
);

client.on('connect', () => {
    console.log('Redis client connected to the server');
    }
);

function setNewSchool(schoolName, value) {
    client.set(schoolName, value,print);
}

function displaySchoolValue(schoolName) {
    client.get(schoolName, (err, res) => {
        console.log(res);
    });
}

const displaySchoolValueAsync = promisify(displaySchoolValue);
const setNewSchoolAsync = promisify(setNewSchool);

(async () => {
    await setNewSchoolAsync('HolbertonSchools', '89');
    const value = await displaySchoolValueAsync('HolbertonSchools');
    console.log(`Value of HolbertonSchools is ${value}`);
})();



displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');


