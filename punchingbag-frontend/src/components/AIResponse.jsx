import React from "react";
import '../css/AIResponse.css'

function AIResponse({ response }) {
    const text = response == null || response === '' ? 'Nothing to see here...' : response
    return (
        <div className="ai-response">
            <h2>Punchie Says:</h2>
            <p>{text}</p>
        </div>
    )
}

export default AIResponse