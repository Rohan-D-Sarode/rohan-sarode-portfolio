// pages/api/contact.js
import { google } from "googleapis";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, reason, technology, workType, message } = req.body;

    try {
      // Create Google Auth client with credentials
      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
          // Replace escaped newlines with actual newline characters:
          private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
        },
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });

      const sheets = google.sheets({ version: "v4", auth });
      const spreadsheetId = process.env.GOOGLE_SHEET_ID;

      // Append the new row to the specified range (adjust "Sheet1!A:F" as needed)
      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: "Sheet1!A:F",
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [[name, email, reason, technology, workType, message]],
        },
      });

      return res
        .status(200)
        .json({ success: true, message: "Data saved to Google Sheet" });
    } catch (error) {
      console.error("Error saving data:", error);
      return res
        .status(500)
        .json({ success: false, message: "Error saving data to Google Sheet" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res
      .status(405)
      .json({ success: false, message: `Method ${req.method} not allowed` });
  }
}
