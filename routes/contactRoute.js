const router = require("express").Router();
const { contactUs } = require("../controllers/contactController");
const protect = require("../middleWare/authMiddleware");

router.post("/", protect, contactUs);

module.exports = router;
