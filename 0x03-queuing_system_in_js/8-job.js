//create function
function createPushnotificationJobs(jobs, queue) {
  //create a queue named push_notification_code 2
  jobs.forEach(jobData => {
    var job = queue.create("push_notification_code_2", jobData).save(err => {
      if (!err) console.log(`Notification job created: ${job.id}`);
    });
    //listen for job completion
    job.on("complete", () => {
      console.log(`Notification job ${job.id} completed`);
    });
    //listen for job failure
    job.on("failed", () => {
      console.log(`Notification job ${job.id} failed`);
    });
    //listen for job progress
    job.on("progress", progress => {
      console.log(`Notification job ${job.id} ${progress}% complete`);
    });
  });
}