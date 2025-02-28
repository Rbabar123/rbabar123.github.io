import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { GoogleGenerativeAI } from "@google/generative-ai";

const app = express();
const port = 3000; // You can change this if needed

// Enable CORS for frontend communication
app.use(cors());
app.use(bodyParser.json());

/* 
    const genAI = new GoogleGenerativeAI(process.env.GENERATIVE_AI_KEY);
  Then, set the environment variable GENERATIVE_AI_KEY in your deployment settings.
*/
const genAI = new GoogleGenerativeAI("AIzaSyB2Eu7oiy1O4VzMsz5q0TmIWAQiEu7HNQ4"); // <-- Insert your API key here

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
