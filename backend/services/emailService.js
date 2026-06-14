const nodemailer = require("nodemailer");

const sendReservationEmail = async (
  email,
  restaurant,
  date,
  time,
  guests
) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Restaurant Reservation Confirmation",
      html: `
        <h2>🎉 Reservation Confirmed</h2>

        <p><strong>Restaurant:</strong> ${restaurant}</p>

        <p><strong>Date:</strong> ${date}</p>

        <p><strong>Time:</strong> ${time}</p>

        <p><strong>Guests:</strong> ${guests}</p>

        <br>

        <p>Thank you for booking with us!</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    
    console.log("Email Sent Successfully");
    console.log("Accepted:", info.accepted);
    console.log("Rejected:", info.rejected);
    console.log("Message ID:", info.messageId);

    return true;
  } catch (error) {
    console.log("Email Error:", error.message);

    return false;
  }
};

module.exports = {
  sendReservationEmail,
};