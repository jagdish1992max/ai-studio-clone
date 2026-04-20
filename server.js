import express from "express";

const app = express();
app.use(express.json());

app.post("/generate", async (req, res) => {
  try {
    const prompt = req.body.prompt;

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" +
      process.env.API_KEY,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      }
    );

    const data = await response.json();

    res.json({
      result:
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "No response"
    });
  } catch (err) {
    console.log(err);
    res.json({ result: "Server error" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on", PORT));
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Server is working 🚀");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
