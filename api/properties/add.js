const formidable = require("formidable");
const fs = require("fs");
const connectDB = require("../../lib/db");
const Property = require("../../lib/model");
const cloudinary = require("../../lib/cloudinary");

module.exports = async (req, res) => {
  await connectDB();

  if (req.method === "POST") {
    const form = new formidable.IncomingForm({ keepExtensions: true });

    form.parse(req, async (err, fields, files) => {
      if (err) return res.status(400).json({ error: "Form parsing error" });

      let imageUrl = "";
      if (files.image) {
        const result = await cloudinary.uploader.upload(files.image.filepath);
        imageUrl = result.secure_url;
      }

      const property = new Property({
        title: fields.title,
        price: fields.price,
        address: fields.address,
        description: fields.description,
        image: imageUrl,
      });

      await property.save();
      res.status(201).json(property);
    });
  } else {
    res.status(405).end("Method Not Allowed");
  }
};

export const config = {
  api: {
    bodyParser: false
  }
};
