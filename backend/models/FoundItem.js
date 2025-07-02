import mongoose from "mongoose";

const foundItemSchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  date: String,
  image: String,
});

export default mongoose.model("FoundItem", foundItemSchema);
