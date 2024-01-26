import nodemailer from 'nodemailer';
import { send } from 'vite';

const transporter = nodemailer.createTransport({
    service: 'Zoho', // e.g., 'gmail'
    auth: {
        user: 'manager@nekhaynikita.shop',
        pass: 'Q/,f+P._3p}vf@E!dp'
    }
});

export async function post(request) {
    console.log(request.body)
    const { to, subject, text } = request.body;
    
        // Configure and send the email
    // ...
    try {
        sendEmail(to, subject, text);
    } catch (error) {
        return {
            status: 500,
            body: {
                message: error
            }
        };
    }
   


    return {
        status: 200,
        body: {
            message: 'Email sent successfully'
        }
    };
}

export const sendEmail = async (to, subject, text) => {
    const mailOptions = {
        from: 'manager@nekhaynikita.shop',
        to: to,
        subject: subject,
        text: text,
        //html: html // Optional: If you want to send HTML formatted email
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
    } catch (error) {
        console.error('Error sending email: ' + error);
    }
};
