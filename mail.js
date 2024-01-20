const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "bhandariprabin402@gmail.com",
    pass: "pdpw yjdx zzch qgzs",
  },
});

// async..await is not allowed in the global scope, must use a wrapper
async function main() {
  const info = await transport.sendMail({
    from: '""', // sender address
    to: "", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "hello from unknow", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
}

main().catch(console.error);
