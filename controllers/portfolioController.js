import Joi from "joi";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const smtpHost = process.env.MAILER_HOST;
const smtpPort = process.env.MAILER_PORT;
const smtpUser = process.env.MAILER_USERNAME;
const smtpPass = process.env.MAILER_PASSWORD;

const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort,
  secure: false,
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
      from: smtpUser,
      to: smtpUser,
      subject: "Consulta",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9; border-radius: 8px; border: 1px solid #ddd;">
          <h2 style="color: #333;">Consulta recibida</h2>
          <p style="font-size: 16px; color: #555;">Has recibido una nueva consulta desde el formulario de contacto.</p>
    
          <table style="width: 100%; margin-top: 20px; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #333;">Nombre:</td>
              <td style="padding: 8px; color: #555;">${name}</td>
            </tr>
            <tr style="background-color: #f0f0f0;">
              <td style="padding: 8px; font-weight: bold; color: #333;">Email:</td>
              <td style="padding: 8px; color: #555;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #333;">Mensaje:</td>
              <td style="padding: 8px; color: #555;">${msg}</td>
            </tr>
          </table>

          <p style="margin-top: 30px; font-size: 14px; color: #aaa;">Este mensaje fue generado automáticamente desde tu portafolio.</p>
        </div>
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
