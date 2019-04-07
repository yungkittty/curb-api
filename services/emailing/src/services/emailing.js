const nodemailer = require('nodemailer');
const randtoken = require('rand-token');
const generatorConfig = require('../configurations/token');

const verificationOptions = (name, redirectLink) => ({
  subject: `Please ${name} verify your email account for Curb`,
  html: `<h1>Redirect link to activate your account:</h1><br><br><a href="${redirectLink}">${redirectLink}</a>`
});

const resetPasswordOptions = (name, code) => ({
  subject: `Curb: [RESET-PASSWORD] ${name}`,
  text: `Reset Password Code: ${code}`
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
  const code = await randtoken.generator(generatorConfig).generate(6);
  return code;
}

async function mailVerification(name, email, redirectLink) {
  console.log('REdirect link=>', redirectLink);
  await sendMail(email, verificationOptions(name, redirectLink));
}

async function mailResetPassword(name, email) {
  const code = await generateCode();
  await sendMail(email, resetPasswordOptions(name, code));
  return code;
}

module.exports = {
  mailVerification,
  mailResetPassword,
  generateCode
};
