const nodemailer = require("nodemailer");
require("dotenv").config();
const { mailtemplate } = require("../utils/mailtemplete");
const mailSender = async (email, name, body) => {
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });
    let info = transporter.sendMail({
      from: `"portfolio"`,
      to: process.env.MY_MAIL,
      subject: `portfolio message from ${name} `,
      html: `${body}`,
    });
    return info;
  } catch (error) {
    console.log(error.message);
  }
};

exports.sendmail = async (req, res) => {
  try {
    const { email, name, message } = req.body;
    if (!email || !name || !message) {
      return res.status(404).json({
        success: false,
        message: "please provide all information",
      });
    }
    const bodydata = mailtemplate(email, name, message);

    const response = await mailSender(email, name, bodydata);
    // console.log("email sent", response);
    return res.status(200).json({
      success: true,
      message: "you message was successfully sent",
    });
  } catch (error) {
    console.log("error sending mail :", error.message);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
