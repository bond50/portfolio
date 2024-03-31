import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


export const sendMail = (req, res) => {
    const {email, name, message, subject} = req.body;
    let mailList = [process.env.EMAIL_TO];
    const emailData = {
        to: mailList,
        from: process.env.CONTACT_MAIL,
        subject: subject,
        text: `Email received from contact from \n Sender name: ${name} \n Sender email: ${email} \n Sender message: ${message}`,
        html: `
            <h4>Email received from contact form:</h4>
            <p>Sender name: ${name}</p>
            <p>Sender email: ${email}</p>
            <p>Sender message: ${message}</p>
            <hr />
            <p><strong>This email was send from your portfolio</strong></p>
            <p>${process.env.CLIENT_URL}</p>
        `,
    };

    sgMail.send(emailData).then((sent) => {
        return res.json({
            success: true,
        });
    });
};