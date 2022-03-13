// Dependencies
// ============================================================================
const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Users collection and inserts the Users below
// ============================================================================
mongoose.connect(
  process.env.MONGODB_URI || "mongodb+srv://kerimhelal:oUEriHtHxGanMV3h@cluster0.jozgt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

const userSeed = [{}];

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
