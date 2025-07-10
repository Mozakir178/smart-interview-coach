
import express from "express";
import openai from "../config/openai.js";
const router = express.Router();

router.post("/generate-question", async (req, res) => {
  const { topic, difficulty, type } = req.body;

  try {
    const prompt = `
Generate a ${difficulty} ${type} technical interview question on the topic "${topic}". 
Respond with only the question, no explanation.
`;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
      max_tokens: 300,
    });

    const question = response.choices[0].message.content;
    res.json({ question });

  } catch (err) {
    console.error("OpenAI Error:", err.message);
    res.status(500).json({ message: "Failed to generate question" });
  }
});

export default router;
