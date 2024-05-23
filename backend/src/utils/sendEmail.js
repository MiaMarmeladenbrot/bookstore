import { google } from "googleapis";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

// aus der .env-Datei die jeweiligen geheimen Daten holen, um Google Apis tatsächlich nutzen zu können:
const GMAIL_ADDRESS = process.env.GMAIL_ADDRESS; // meine gmail-adresse
const CLIENT_ID = process.env.GMAIL_CLIENT_ID; // meine client id (zu finden unter google apis)
const CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET; // mein client schlüssel (zu finden unter google apis)
const REDIRECT_URI = process.env.GMAIL_REDIRECT_URI; // https://developers.google.com/oauthplayground
const REFRESH_TOKEN = process.env.GMAIL_REFRESH_TOKEN; // OAUTH2 Refresh token

// oAuthClient erstellen mit credentials via methode von google apis
const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
// refresh token aufrufen (1 Monat gültig):
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

export async function sendEmail({ to, subject, text }) {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: GMAIL_ADDRESS,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const sentMessageInfo = await transporter.sendMail({
      from: "Mia from the Bookstore",
      to,
      subject,
      text,
      html: text.replaceAll("\n", "<br/>"),
    });

    const success = sentMessageInfo.accepted.includes(to);
    return success;
  } catch (err) {
    console.log(err);
    return false;
  }
}
