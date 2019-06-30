const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: process.env.CURB_EMAIL_SERVICE,
  auth: {
    user: process.env.CURB_EMAIL,
    pass: process.env.CURB_EMAIL_PASSWORD
  }
});

async function sendMail(email, options) {
  const mailOptions = {
    from: process.env.CURB_EMAIL,
    to: email,
    ...options
  };
  await transporter.sendMail(mailOptions);
}

module.exports = sendMail;
