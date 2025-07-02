import LostItem from "../models/LostItem.js";

export const reportLostItem = async (req, res) => {
  try {
    const { title, description, location, date } = req.body;
    const image = req.file ? req.file.filename : null;

    const newItem = new LostItem({ title, description, location, date, image });
    await newItem.save();

    res.status(201).json({ message: "Lost item reported!", item: newItem });
  } catch (error) {
    console.error("Error saving lost item:", error);
    res.status(500).json({ error: "Could not save lost item" });
  }
};

export const getLostItems = async (req, res) => {
  try {
    const items = await LostItem.find().sort({ date: -1 });
    res.json(items);
  } catch (error) {
    console.error("Error fetching lost items:", error);
    res.status(500).json({ error: "Could not fetch lost items" });
  }
};
