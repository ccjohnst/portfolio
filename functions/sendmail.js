const nodemailer = require('nodemailer');

const { GATSBY_PASS, GATSBY_USER } = process.env;

exports.handler = function (event, context, callback) {
  const data = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.eu',
    port: '465',
    auth: {
      user: GATSBY_USER,
      pass: GATSBY_PASS,
    },
  });

  transporter.sendMail(
    {
      from: 'christopherjohnston@zohomail.eu',
      to: 'christopherjohnston@zohomail.eu',
      subject: 'Portfolio Query',
      html: `
        <h3>Sender Name: ${data.name} </h3>
        <h3>Sender Email: ${data.email}<h3>
        <p>Subject: ${data.message}</p>`,
    },
    function (error) {
      if (error) {
        callback(error);
      } else {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify({
            result: 'success',
          }),
        });
      }
    }
  );
};
