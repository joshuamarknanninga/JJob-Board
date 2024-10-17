const db = require("../config/connection");
const { Job, User } = require("../models");
const cleanDB = require("./cleanDB");

const jobData = require("./jobData.json");
const userData = require("./userData.json");

db.once("open", async () => {
  await cleanDB("Job", "jobs");
  await cleanDB("User", "users");

  await User.create(userData);
  await Job.create(jobData);

  await User.insertMany(userData);
  await Job.insertMany(jobData);

// >>>>>>>>>>> DOES NOT WORK

  // for (let i = 0; i < jobData.length; i++) {
  //   const { _id, userName } = await Job.create(jobData[i]);
  //   const user = await User.findOneAndUpdate(
  //     { username: userName },
  //   );
  // }

  // <<<<<<<<<<< DOES NOT WORK

  console.log("User and Job DB seeded");
  process.exit(0);
});

/* POSSIBLE BUGS:

I'm not quite sure how to depend on default
    EX: Job's postedDate has a Date.now default - do I just leave out the postedDate in jobData.json?

I haven't the faintest clue on how to give postedBy and savedJobs inside seed.js or the json files.

FSF-PT-EAST-MAY-050624-A
21-MERN
01-Activities
26-Stu_Resolver-Context
Solved
server
seeders
seed.js

THIS is the file that is confusing me!

*/