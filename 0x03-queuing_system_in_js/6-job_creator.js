//create a queue with kue
var kue = require('kue');
var jobs = kue.createQueue();

//create an object containing the job data
var jobData = {
    phoneNumber: '4153518780',
    message: 'This is the code to verify your account'
}

//create a queue named push_notification_code
var job = jobs.create('push_notification_code', jobData).save((err) => {
    if (!err) console.log(`Notification job created: ${job.id}`);
}
);

//listen for job completion
job.on('complete', () => {
    console.log('Notification job completed');
}
);

//listen for job failure
job.on('failed', () => {
    console.log('Notification job failed');
}
);

