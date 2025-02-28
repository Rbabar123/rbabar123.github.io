import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { GoogleGenerativeAI } from "@google/generative-ai";

const app = express();
const port = 3000; // You can change this if needed

// Enable CORS for frontend communication
app.use(cors());
app.use(bodyParser.json());

// Initialize Google Gemini AI
const genAI = new GoogleGenerativeAI("AIzaSyDk6hp-AIzaSyB2Eu7oiy1O4VzMsz5q0TmIWAQiEu7HNQ4");

// API endpoint to handle chatbot messages
app.post("/chat", async (req, res) => {
    const userMessage = req.body.message;

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });
        const result = await model.generateContent(userMessage);
        const response = result.response.text();

        res.json({ reply: response });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ reply: "Sorry, I encountered an error!" });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
