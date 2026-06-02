const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb://Prince-Rathore:prince606@ac-jbg2lkq-shard-00-00.krqfi0m.mongodb.net:27017,ac-jbg2lkq-shard-00-01.krqfi0m.mongodb.net:27017,ac-jbg2lkq-shard-00-02.krqfi0m.mongodb.net:27017/busbooking?ssl=true&replicaSet=atlas-1krdcn-shard-0&authSource=admin&appName=Cluster1",
    );

    console.log("MongoDB Connected");
  } catch (error) {
    console.log("MongoDB Error:", error);

    process.exit(1);
  }
};

module.exports = connectDB;
