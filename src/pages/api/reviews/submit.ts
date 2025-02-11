
import { NextApiRequest, NextApiResponse } from "next";
import { client } from "@/sanity/lib/client";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { carId, reviewerName, rating, comment } = req.body;

    if (!carId || !reviewerName || !rating || !comment) {
      return res.status(400).json({ message: "All fields are required" });
    }

    try {
      // Create a new review document in Sanity
      await client.create({
        _type: "review",
        car: { _type: "reference", _ref: carId },
        reviewerName,
        rating,
        comment,
        createdAt: new Date().toISOString(),
      });

      return res.status(201).json({ message: "Review submitted successfully" });
    } catch (error) {
      console.error("Error submitting review:", error);
      return res.status(500).json({ message: "Failed to submit review" });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}