const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { GoogleGenAI } = require("@google/genai");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

app.post("/generate", async (req, res) => {
  try {
    const { topic, audience, slidesCount } = req.body;

    const prompt = `
    Create a presentation.

    Topic: ${topic}
    Audience: ${audience}
    Number of Slides: ${slidesCount}

    For each slide provide:
    - Slide Title
    - 3 Bullet Points
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    res.json({
      content: response.text,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Something went wrong"
    });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});