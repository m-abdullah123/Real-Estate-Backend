export default function handler(req, res) {
  res.status(200).json({
    success: true,
    message: "API is working fine!",
    method: req.method,
    time: new Date().toISOString()
  });
}
