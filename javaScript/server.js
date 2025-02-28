import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenerativeAI } from "@google/generative-ai";

const app = express();
const port = 3000; // Change this if needed

// Since we're using ES modules, we need to recreate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Enable CORS for frontend communication
app.use(cors());
app.use(bodyParser.json());

// Serve static files from the current directory
app.use(express.static(__dirname));

// Initialize Google Gemini AI
// Note: The API key is no longer hardcoded; ideally use an environment variable.
const genAI = new GoogleGenerativeAI(process.env.GENERATIVE_AI_KEY || "");

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

// Optional: Redirect root requests to your GitHub Page (if needed)
// app.get('/', (req, res) => {
//   res.redirect("https://rbabar123.github.io/index.html");
// });

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
