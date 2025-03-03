// src/app/api/contact/route.js
import { google } from "googleapis";

export async function POST(request) {
  // Parse the request body (assuming it's JSON)
  const body = await request.json();
  const { name, email, reason, technology, workType, message } = body;

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

    // Append the new row to the specified range
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:F",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[name, email, reason, technology, workType, message]],
      },
    });

    return new Response(
      JSON.stringify({ success: true, message: "Data saved to Google Sheet" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error saving data:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Error saving data to Google Sheet",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
