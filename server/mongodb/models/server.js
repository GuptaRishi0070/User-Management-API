const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "ramon.ruecker9@ethereal.email", // new ethereal email username
    pass: "Hello@123", // new ethereal email password
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  try {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Rishi Gupta" <rishigupta280594@gmail.com>', 
      to: "rishigupta280594@gmail.com", 
      subject: "Hello ✔",
      text: "Hello world?", 
      html: "<b>Hello world?</b>", 
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

main().catch(console.error);
