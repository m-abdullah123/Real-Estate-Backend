const connectDB = require("../../lib/db");
const Property = require("../../lib/model");

module.exports = async (req, res) => {
  await connectDB();

  if (req.method === "GET") {
    const properties = await Property.find();
    res.json(properties);
  } else {
    res.status(405).end("Method Not Allowed");
  }
};
