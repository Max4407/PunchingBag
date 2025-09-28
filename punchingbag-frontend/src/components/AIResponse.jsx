import React, { useEffect, useState } from "react";
import '../css/AIResponse.css'

function AIResponse({ response, message, onResponse = () => {} }) {
    const [text, setText] = useState(response == null || response === '' ? 'Nothing to see here...' : response)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!message) return
        let cancelled = false
        setLoading(true)
        setError(null)
        setText('Analyzing...')
        fetch('http://localhost:5000/analyze', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message })
        })
        .then(res => res.json())
        .then(data => {
            if (cancelled) return
            const r = data && data.response ? data.response : 'No response from server.'
            setText(r)
            onResponse(r)
        })
        .catch(err => {
            if (cancelled) return
            setError(err.message || 'Fetch error')
            setText('Error fetching response')
        })
        .finally(() => { if (!cancelled) setLoading(false) })

        return () => { cancelled = true }
    }, [message])

    useEffect(() => { if (response !== undefined && response !== null) setText(response) }, [response])

    return (
        <div className="ai-response">
            <h2>Punching Bag Says:</h2>
            <p>{loading ? 'Analyzing...' : (error ? `Error: ${error}` : text)}</p>
        </div>
    )
}

export default AIResponse