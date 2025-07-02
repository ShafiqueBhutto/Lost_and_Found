import mongoose from "mongoose";

const lostItemSchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  date: String,
  image: String,
});

// ✅ Force correct collection name
export default mongoose.model("LostItem", lostItemSchema, "lostitems");
