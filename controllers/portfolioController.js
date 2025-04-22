import Joi from "joi";
import nodemailer from "nodemailer";

const smtpHost = process.env.MAILER_HOST;
const smtpPort = process.env.MAILER_PORT;
const smtpUser = process.env.MAILER_USERNAME;
const smtpPass = process.env.MAILER_PASSWORD;
const emailFrom = process.env.MAILER_FROM;

const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort,
  auth: {
    user: smtpUser,
    pass: smtpPass,
  },
});

const emailSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  email: Joi.string().email().required(),
  msg: Joi.string().min(1).max(1000).required(),
});

export const sendEmailController = (req, res) => {
  try {
    const { error, value } = emailSchema.validate(req.body);

    if (error) {
      return res.status(400).send({
        success: false,
        message: "Validation Error",
        error: error.details[0].message,
      });
    }

    const { name, email, msg } = value;

    transporter.sendMail({
      from: email,
      to: emailFrom,
      subject: "Consulta",
      html: `
        <h5>Detail Information</h5>
        <ul>
          <li><p>Name : ${name}</p></li>
          <li><p>Email : ${email}</p></li>
          <li><p>Message : ${msg}</p></li>
        </ul>
      `,
    });

    return res.status(200).send({
      success: true,
      message: "Your Message Send Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Send Email API Error",
      error,
    });
  }
};
