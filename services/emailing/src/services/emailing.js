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

async function sendMail(email, options) {
  const mailOptions = {
    from: process.env.CURB_EMAIL,
    to: email,
    ...options
  };
  await transporter.sendMail(mailOptions);
}

async function generateCode() {
  const code = await randtoken.generator(generatorConfig).generate(10);
  return code;
}

async function mailVerification(name, email) {
  const code = await generateCode();
  await sendMail(email, verificationOptions(name, code));
  return code;
}

async function mailResetPassword(name, email) {
  const code = await generateCode();
  await sendMail(email, resetPasswordOptions(name, code));
  return code;
}

module.exports = {
  mailVerification,
  mailResetPassword
};
