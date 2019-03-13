const nodemailer = require('nodemailer');
const randtoken = require('rand-token');
const generatorConfig = require('../configurations/token');

const verificationOptions = (name, code) => ({
  subject: `Please ${name} verify your email account for Curb`,
  text: `Verification Code: ${code}`
});

const resetPasswordOptions = (name, code) => ({
  subject: `Reset ${name}`,
  text: `Reset Code: ${code}`
});

const transporter = nodemailer.createTransport({
  service: process.env.CURB_EMAIL_SERVICE,
  auth: {
    user: process.env.CURB_EMAIL,
    pass: process.env.CURB_EMAIL_PASSWORD
  }
});

async function sendMail(name, email, options) {
  const code = randtoken.generator(generatorConfig).generate(10);
  const mailOptions = {
    from: process.env.CURB_EMAIL,
    to: process.env.CURB_EMAIL,
    ...options
  };
  await transporter.sendMail(mailOptions);
  return code;
}

async function mailVerification(name, email) {
  return sendMail(name, email, verificationOptions(name, email));
}

async function mailResetPassword(name, email) {
  return sendMail(name, email, resetPasswordOptions(name, email));
}

module.exports = {
  mailVerification,
  mailResetPassword
};
