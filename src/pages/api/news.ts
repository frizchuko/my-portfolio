import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { page = 1 } = req.query;

    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?category=technology&language=en&pageSize=10&page=${page}&apiKey=${process.env.NEWS_API_KEY}`
    );

    if (!response.ok) throw new Error(`Failed to fetch news: ${response.statusText}`);

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).json({ error: "Failed to fetch news" });
  }
}

