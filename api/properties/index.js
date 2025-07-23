// const connectDB = require("../../lib/db");
// const Property = require("../../lib/model");

// module.exports = async (req, res) => {
//   await connectDB();

//   if (req.method === "GET") {
//     const properties = await Property.find();
//     res.json(properties);
//   } else {
//     res.status(405).end("Method Not Allowed");
//   }
// };

const connectDB = require("../../lib/db");
const Property = require("../../lib/model");

module.exports = async (req, res) => {
  try {
    console.log("🔁 Request received at /api/properties");
    console.log("🔧 Connecting to MongoDB...");
    await connectDB();
    console.log("✅ MongoDB connected");

    if (req.method === "GET") {
      const properties = await Property.find();
      console.log("✅ Properties fetched:", properties.length);
      return res.status(200).json(properties);
    }

    return res.status(405).json({ message: "Method Not Allowed" });
  } catch (err) {
    console.error("❌ API Error:", err.message);
    return res.status(500).json({ error: "Server crashed", details: err.message });
  }
};