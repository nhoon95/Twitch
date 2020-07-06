import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/twich", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

const handleMongo = () => {
  console.log("Mongo is connected");
};

const handleError = () => {
  console.log("You got mongo Error");
};

db.on("error", handleError);

db.once("open", handleMongo);

export default db;
