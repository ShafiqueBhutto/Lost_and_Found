// import FoundItem from "../models/FoundItem.js";

// export const getFoundItems = async (req, res) => {
//   try {
//     const items = await FoundItem.find().sort({ date: -1 });
//     res.json(items);
//   } catch (error) {
//     console.error("Failed to fetch found items:", error);
//     res.status(500).json({ error: "Server error" });
//   }
// };


// import FoundItem from "../models/FoundItem.js";

// export const getFoundItems = async (req, res) => {
//   try {
//     const items = await FoundItem.find().sort({ date: -1 });
//     res.json(items);
//   } catch (error) {
//     console.error("Error fetching found items:", error);
//     res.status(500).json({ error: "Server Error" });
//   }
// };

// backend/controllers/foundItemController.js
import FoundItem from "../models/FoundItem.js";

export const reportFoundItem = async (req, res) => {
  try {
    const { title, description, location, date } = req.body;
    const image = req.file ? req.file.filename : null;

    const newItem = new FoundItem({ title, description, location, date, image });
    await newItem.save();

    res.status(201).json({ message: "Found item reported!", item: newItem });
  } catch (error) {
    console.error("Failed to report found item:", error);
    res.status(500).json({ error: "Server error" });
  }
};

export const getFoundItems = async (req, res) => {
  try {
    const items = await FoundItem.find().sort({ date: -1 });
    res.json(items);
  } catch (error) {
    console.error("Failed to fetch found items:", error);
    res.status(500).json({ error: "Server error" });
  }
};
