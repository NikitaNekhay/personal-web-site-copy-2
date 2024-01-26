import nodemailer from 'nodemailer';
import { send } from 'vite';

const transporter = nodemailer.createTransport({
    host: "smtppro.zoho.eu", // Zoho SMTP server
    // service: 'Zoho',
    port: 465, // Port for TLS/STARTTLS
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'manager@nekhaynikita.shop', // Your Zoho email
        pass: '7UEgr}q:rE"q/7y&(W' // Your Zoho password
    },
});


function verifyConnection() {
    // verify connection configuration
    transporter.verify(function (error, success) {
        if (error) {
            console.log(error);
        } else {
            console.log("Server is ready to take our messages");
        }
    });

}

// Define your action here
export async function POST({ request }) {
    try {

        // verify connection configuration
        transporter.verify(function (error, success) {
            if (error) {
                console.log(error);
            } else {
                console.log("Server is ready to take our messages");
            }
        });

        const data = await request.json(); // Parse incoming JSON data
        const { to, subject, text } = data;

        // Send the email
        await sendEmail(to, subject, text);

        return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ message: error }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}


const sendEmail = async (to, subject, text) => {
    const mailOptions = {
        from: 'manager@nekhaynikita.shop',
        to: to,
        subject: subject,
        text: text+`\n\n\nС уважением и благосклонностью,\nВаш покорный слуга и надёжный помощник в искусстве моды,\nНиколай\nМенеджер по связям с общественностью, дома моды NIKITA NEKHAY\n\nТелеграм: @nikitanekhay\nИнстаграм: @nekhaynikita\nКонтактный номер телефона: +375 44 578-50-57\n\n-------------------------------------------------------\n\nWith utmost respect and benevolence,\nYour humble servant and steadfast aide in the art of fashion,\nNikolay\nPublic Relations Manager, House of NIKITA NEKHAY\n\nTelegram: @nikitanekhay\nInstagram: @nekhaynikita\nContact Phone Number: +375 44 578-50-57`,
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
    } catch (error) {
        console.error('Error sending email: ' + error);
    }
};
