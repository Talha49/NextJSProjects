// pages/api/auth/logout.ts

import { NextApiResponse } from "next";
import { NextAuthRequest } from "next-auth/_utils";
import { signOut } from "next-auth/react";

export default async function handler(req: NextAuthRequest, res: NextApiResponse) {
  try {
    const result = await signOut({ redirect: false, req });
    if (result.error) {
      throw new Error("Failed to logout");
    }
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
