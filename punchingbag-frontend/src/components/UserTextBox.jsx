

import React, { useState, useRef, useEffect } from 'react'
import '../css/UserTextBox.css'

/**
 * UserTextBox
 * - Renders a rounded, auto-resizing textarea with a circular send button.
 * - Calls onSend(message: string) when a message is sent.
 * - Enter sends the message, Shift+Enter inserts a newline.
 *
 * Props:
 * - onSend: function(message: string) => void
 */
function UserTextBox({ onSend = () => {} }) {
    const [text, setText] = useState('')
    const textareaRef = useRef(null)

    useEffect(() => {
        // auto-resize on mount or when text changes
        const ta = textareaRef.current
        if (!ta) return
        ta.style.height = 'auto'
        ta.style.height = ta.scrollHeight + 'px'
    }, [text])

    const handleSend = () => {
        const trimmed = text.trim()
        if (!trimmed) return
        try {
            onSend(trimmed)
        } catch (e) {
            // swallow errors from consumer so UI doesn't break
            // consumer can handle logging
        }
        setText('')
        // keep focus in the textarea for quick follow-up messages
        if (textareaRef.current) textareaRef.current.focus()
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSend()
        }
    }

    return (
        <div className="user-textbox-wrapper">
            <form
                className="user-textbox-form"
                onSubmit={(e) => {
                    e.preventDefault()
                    handleSend()
                }}
            >
                <textarea
                    ref={textareaRef}
                    className="user-textbox-input"
                    placeholder="Type a message... (Enter to send, Shift+Enter for newline)"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={handleKeyDown}
                    rows={1}
                    aria-label="Message"
                />

                <button
                    type="submit"
                    className="user-textbox-send"
                    aria-label="Send message"
                    disabled={!text.trim()}
                >
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </form>
        </div>
    )
}

export default UserTextBox