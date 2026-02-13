import type { VercelRequest, VercelResponse } from "@vercel/node";
import { neon } from "@neondatabase/serverless";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const sql = neon(process.env.DATABASE_URL!);

    const result = await sql(
      "INSERT INTO messages (name, email, message, created_at) VALUES ($1, $2, $3, NOW()) RETURNING *",
      [name, email, message],
    );

    return res.status(200).json(result[0]);
  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
