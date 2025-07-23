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
  console.log("📦 API Hit: /api/properties");
  try {
    await connectDB();
    console.log("✅ Connected to DB");

    if (req.method === "GET") {
      const properties = await Property.find();
      console.log("🔍 Properties fetched:", properties.length);
      res.status(200).json(properties);
    } else {
      res.status(405).json({ message: "Method not allowed" });
    }
  } catch (err) {
    console.error("❌ ERROR in /api/properties:", err);
    res.status(500).json({ error: "Server error" });
  }
};