

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const OpenAI = require("openai");
require("dotenv").config();

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const client = new OpenAI({
    apiKey: "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"
})

// Endpoint that react will call
app.post("/analyze", async (req, res) => {
    try {
        const userMessage = "\"" + req.body.message + ".\" Return a purposefully stupid piece of advice. Make it one sentance of 10 words or less."|| "";

        const completion = await client.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: userMessage }]
        });

        const responseText = completion.choices[0].message.content;
        res.json({ response: responseText})
    } catch (error) {
        console.error("Error: ", error);
        res.status(500).json({ error : "Failed to get AI response"});
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
});



