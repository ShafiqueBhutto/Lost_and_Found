// // backend/models/LostItem.js
// import mongoose from "mongoose";

// const lostItemSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   location: String,
//   date: String,
//   image: String, // filename
// });

// export default mongoose.model("LostItem", lostItemSchema);

// import mongoose from "mongoose";

// const lostItemSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   location: String,
//   date: String,
//   image: String,
// });

// export default mongoose.model("LostItem", lostItemSchema);



// import mongoose from "mongoose";

// const lostItemSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: String,
//   location: String,
//   date: String,
//   image: String,
// });

// export default mongoose.model("LostItem", lostItemSchema);

// backend/models/LostItem.js
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
