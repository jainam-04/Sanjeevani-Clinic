// const express = require("express");
// const router = express.Router(); // Ensure this is correctly initialized
// const nodemailer = require("nodemailer");

// // POST endpoint to send email
// router.post("/api/register", async (req, res) => {
//   const { email } = req.body; // Validate input

//   if (!email) {
//     return res.status(400).json({ message: "Email is required" });
//   }

//   // Email sending logic
//   try {
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL,
//         pass: process.env.PASSWORD,
//       },
//     });

//     const mailOptions = {
//       from: process.env.EMAIL,
//       to: email,
//       subject: "Appointment Confirmation",
//       html: "<h1>Congratulations!</h1> <p>Appointment Accepted Successfully</p>",
//     };

//     await transporter.sendMail(mailOptions);

//     res.status(201).json({ message: "Email sent successfully" });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });

// module.exports = router;

const express = require("express");
const router = express.Router(); // Ensure this is correctly initialized
const nodemailer = require("nodemailer");
// const schedule = require("node-schedule");
// POST endpoint to send email with appointment details
router.post("/api/register", async (req, res) => {
  // Get appointment details from request body
  const { email, date, time } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  // Nodemailer transport setup
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL, // Ensure these environment variables are set
      pass: process.env.PASSWORD,
    },
  });

  // Mail options with appointment details
  const mailOptions = {
    from: process.env.EMAIL,
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

  // Attempt to send the email
  try {
    await transporter.sendMail(mailOptions);
    res.status(201).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
