// getting-started.js
const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("Connected to MongoDB successfully!");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}
