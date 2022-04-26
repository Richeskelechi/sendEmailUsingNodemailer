const nodemailer = require('nodemailer');
let mailTransporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.gmail,
        pass: process.env.password
    }
})
const sendMail = async (req, res) => {
    let bag = ""
    try {
        const email = req.params.email
        const details = req.body
        for (const key in details) {
            bag += (`${key}: ${details[key]} \n`);
        }
        let mailDetails = {
            from: process.env.gmail,
            to: email,
            subject: "Sending Details From The Form",
            text: bag
        }
        mailTransporter.sendMail(mailDetails, (err) => {
            if (err) {
                console.log('Error Sending Mail', err);
            } else {
                res.status(201).json({ msg: 'Email Sent' })
            }
        })
    } catch (error) {
        console.log('Sending Email failed', error);
    }
}


module.exports = { sendMail }
