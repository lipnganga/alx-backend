//create a queue with kue
var kue = require('kue');
var jobs = kue.createQueue();

//function to send a notification
function sendNotification(phoneNumber, message) {
    console.log(`Sending notification to ${phoneNumber}, with message: ${message}`);
}

//process the job
jobs.process('push_notification_code', (job, done) => {
    sendNotification(job.data.phoneNumber, job.data.message);
    done();
}
);



