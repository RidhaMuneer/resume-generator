import jwt from "jsonwebtoken";

export function generateAccessToken(id: string) {
  if (!process.env.TOKEN_SECRET) {
    throw new Error("TOKEN_SECRET is not defined in environment variables.");
  }

  return jwt.sign({ id }, process.env.TOKEN_SECRET, { expiresIn: "7d" });
}