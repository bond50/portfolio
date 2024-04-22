import nodemailer from 'nodemailer';

// Create the transporter with the appropriate configuration
let transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.AUTH_PORT,
    secure: true,
    auth: {
        user: process.env.AUTH_USER,
        pass: process.env.AUTH_PASSWORD
    },
    tls: {
        rejectUnauthorized: true
    }
});



// Export the sendEMail function to use it in routes
export const sendEmail = (req, res, next) => {

    const {email, name, message, subject} = req.body;
    let mailOptions = {
        from: email,
        to: process.env.EMAIL_TO,
        subject: subject,
        text: `You have received a message from ${name} (${email}): ${message}`,
        html: `<p>You have received a message from <strong>${name}</strong> (${email}): ${message}</p>`
    };

    // Send mail with defined transport object
    transporter.sendMail(mailOptions).then(info => {
        console.log('Email sent:', info.messageId);
        res.status(200).send({success: true});
    }).catch(error => {
        console.log('Error sending email:', error);
        res.status(500).send('Failed to send email');
    });
};
