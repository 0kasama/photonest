const express = require("express");
const router = require("express").Router();
const path = require("path");

const authRoute = require("./authRoute");
const userRoute = require("./userRoute");
const imageRoute = require("./imageRoute");

router.use("/api/auth", authRoute);
router.use("/api/user", userRoute);
router.use("/api/content", imageRoute);
router.use(
  "/api/image",
  express.static(path.join(__dirname, "../public/upload"))
);

module.exports = router;
