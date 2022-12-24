const express = require("express");

const prime = require("./prime");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/prime", prime);

module.exports = router;
