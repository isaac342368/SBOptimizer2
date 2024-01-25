import express from 'express';
import nodemailer from 'nodemailer';
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// SMTP settings for Gmail (using OAuth2 is more secure)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'sboptimizer@gmail.com',
        pass: 'sboptimizer34' // Consider using environment variables or OAuth2
    }
});

// Endpoint to handle form submission
app.post('/send-email', (req, res) => {
    const { email, subject, message } = req.body;

    const mailOptions = {
        from: `${email}`, // Your email address
        to: 'sboptimizer@gmail.com', // Where you want to receive the messages
        subject: `Message from ${email}: ${subject}`,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sender email:', error);
            return res.status(500).send('Error sending email');
        }
        res.status(200).send('Email sent successfully: ' + info.response);
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
