import readline from "readline";
import { GoogleGenerativeAI } from "@google/generative-ai";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const genAI = new GoogleGenerativeAI("AIzaSyB2Eu7oiy1O4VzMsz5q0TmIWAQiEu7HNQ4"); // Replace with your actual API key

async function askGemini(question) {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });
        const result = await model.generateContent(question);
        const response = result.response.text();
        console.log("Gemini AI: " + response);
    } catch (error) {
        console.error("Error:", error);
    }
}

function startChat() {
    rl.question("You: ", async (input) => {
        if (input.toLowerCase() === "exit") {
            console.log("Chat ended.");
            rl.close();
            return;
        }

        await askGemini(input);
        startChat(); // Ask for next input
    });
}

console.log("Chatbot started! Type 'exit' to quit.");
startChat();
