import nodemailer from 'nodemailer';

export async function sendWelcomeMail(recipientEmail) {
    const testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        // host: testAccount.smtp.host,
        // port: testAccount.smtp.port,
        // secure: false,
        // auth: {
        //     user: testAccount.user,
        //     pass: testAccount.pass,
        // },

        service: 'gmail',
        auth: {
            user: 'tthardlinemike@gmail.com',
            pass: process.env.GOOGLE_APP_PASSWORD,
        },
    });

    const info = await transporter.sendMail({
        from: '"The Administrator" <tthardlinemike@gmail.com>',
        to: recipientEmail,
        subject: 'Welcome to the flock!',
        text: 'We are very happy to see you the Serpent King as family! Together we will devour the very Gods!',
        html: '<p><b>We are very happy to see you the Serpent King as family!</b></br> Together we will devour the very Gods!</p>',
    });

    const previewUrl = nodemailer.getTestMessageUrl(info);
    console.log(`Message sent to ${recipientEmail}!`);
    // console.log(`Message sent! Preview URL: ${previewUrl}`);    
}