const connectDB = require("../../lib/db");
const Property = require("../../lib/model");

module.exports = async (req, res) => {
  await connectDB();
  const { id } = req.query;

  if (req.method === "GET") {
    const property = await Property.findById(id);
    if (!property) return res.status(404).json({ message: "Not Found" });
    res.json(property);
  } else if (req.method === "PUT") {
    const updated = await Property.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updated);
  } else if (req.method === "DELETE") {
    await Property.findByIdAndDelete(id);
    res.json({ message: "Deleted" });
  } else {
    res.status(405).end("Method Not Allowed");
  }
};
