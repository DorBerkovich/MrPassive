const express = require("express");
const router = express.Router();

router.get("/contact", (req, res) => res.json({ res: "success" }));

module.exports = router;
