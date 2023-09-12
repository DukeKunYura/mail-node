console.log("hey ho!")

import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.listen(PORT, (err) => {
    if (err) {
        return console.log(err)
    }
    console.log(`Сервер запущен на порту ${PORT}`)
})

const transporter = nodemailer.createTransport({
    host: 'smtp.rambler.ru',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
    }
})

transporter.sendMail({
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: "Заявка",
    html: `<p>YEEE !</p>`
})
