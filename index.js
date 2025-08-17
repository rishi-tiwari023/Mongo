// getting-started.js
const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("Connected to MongoDB successfully!");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");

  // Define User schema with validation
  const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, lowercase: true },
    age: Number,
  });

  // Create User model
  const User = mongoose.model("User", userSchema);

  // Demo users array
  const users = [
    { name: "Prashant", email: "Prashant@example.com", age: 25 },
    { name: "Amit", email: "Amit@example.com", age: 30 },
    { name: "Saurabh", email: "Saurabh@example.com", age: 28 },
    { name: "Ravi", email: "Ravi@example.com", age: 22 },
    { name: "Priyanshu", email: "Priyanshu@example.com", age: 27 },
  ];

  // Insert multiple users
  await User.insertMany(users);

  // Delete user named 'Prashant'
  await User.deleteOne({ name: "Prashant" });

  console.log("Inserted users and deleted user named Prashant.");
}
