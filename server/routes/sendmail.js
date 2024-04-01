const express = require("express");
const { sendmail } = require("../controllers/mailsender");

const router = express.Router();

router.post("/sendmail", sendmail);
module.exports = router;
