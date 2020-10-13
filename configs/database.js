import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost/i`ncredible-test`", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to the database"));
