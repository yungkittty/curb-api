const sendMail = require('./emailing');

const feedbackEmailTemplate = (feedback, device) => ({
  subject: '[Feedback Mail]',
  html: `<h1>Feedback :</h1> <h2>${feedback}</h2> <h3>Device: ${device}</h3>`
});

async function feedbackUser(feedback, device) {
  sendMail(process.env.CURB_EMAIL, feedbackEmailTemplate(feedback, device));
}

module.exports = feedbackUser;
