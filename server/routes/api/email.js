const router = require('express').Router();
const nodemailer = require("nodemailer");
require('dotenv').config()

const transporter = nodemailer.createTransport({
  host: "send.smtp.mailtrap.io",
  port: 587,
  auth: {
    user: process.env.MAILUSER,
    pass: process.env.MAILPASS,
  }
})

function sendEmail(name, email, message) {
    const mailData = {
        from: `"${name}" <alexander@alexandergalen.com>`,
        to: "alexanderc93@gmail.com",
        subject: `Message from ${name} at ${email} on alexandergalen.com`,
        text: message,
    }

    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.log(err)
      }
      else {
        console.log(info)
      }
    })
  }

router.post('/', async (req, res) => {
// get data for email from body before sending to nodemailer
    const { name, email, message } = req.body;
    console.log(name, email, message);
    sendEmail(name, email, message);
    res.send(`${name} ${email} ${message}`);
});

module.exports = router;