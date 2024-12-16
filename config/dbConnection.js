const mongoose = require("mongoose");
MONGO_URI =
  // "mongodb+srv://aishwaryatalebailkar29:<db_password>@cluster0.cqec7jh.mongodb.net/annaseva?retryWrites=true&w=majority&appName=Cluster0"
  "mongodb+srv://aishwaryatalebailkar29:DBoo8DEN8zGyYqEX@cluster0.cqec7jh.mongodb.net/annaseva?retryWrites=true&w=majority&appName=Cluster0";
const connectDB = async () => {
  try {
    const db = MONGO_URI;
    await mongoose.connect(db);
    console.log("MongoDB connected...");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
