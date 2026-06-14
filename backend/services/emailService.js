const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendReservationEmail = async (
  email,
  restaurant,
  date,
  time,
  guests
) => {
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
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
    });

    console.log("Email Sent:", data);

    return true;
  } catch (error) {
    console.log("Email Error:", error);

    return false;
  }
};

module.exports = {
  sendReservationEmail,
};