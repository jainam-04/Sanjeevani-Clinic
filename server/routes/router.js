require('dotenv').config(); // Ensure this is at the top of your file
const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/api/register", async (req, res) => {
  const { email, date, time } = req.body;

  if (!email || !date || !time) {
    return res.status(400).json({ message: "Email, Date, and Time are required" });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

  const mailOptions = {
    from: '"Sanjeevani Clinic" <surajshah77881@gmail.com>', 
    to: email,
    subject: "Appointment Confirmation",
    html: `
      <h1>Appointment Confirmation</h1>
      <p>Your appointment with Dr. Asif Shekh has been confirmed.</p>
      <ul>
        <li><strong>Date:</strong>${date}</li>
        <li><strong>Time:</strong>${time}</li>
      </ul>
      <p>If you have any questions, please contact us at 07947430848 or the provided contact number.</p>
      <p>Thank you,</p>
      <p>Sanjeevani Clinic</p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    res.status(201).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
