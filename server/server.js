

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
    apiKey: 0;
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



