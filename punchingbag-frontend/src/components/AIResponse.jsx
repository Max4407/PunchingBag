import React from "react";

function AIResponse({ response }) {
    return (
        <div className="ai-response">
            <h2>AI Response</h2>
            <p>{response}</p>
        </div>
    )
}

export default AIResponse