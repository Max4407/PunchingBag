import { useState } from 'react'
import './App.css'
import UserTextBox from './components/UserTextBox'
import AIResponse from "./components/AIResponse"

function App() {
  const [count, setCount] = useState(0)
  const [aiResponse, setAiResponse] = useState(null)

  const [messages, setMessages] = useState([])


  const handleSendMessage = async (message) => {
    try {
      const res = await fetch("http://localhost:5000/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({message})
      })

      const data = await res.json()
      setAiResponse(data.response)
    } catch (err) {
      console.error("Backend Error:", err)
    }
  }

  return (
    <>
      <div className='app'>
        <h1>Punch Me Bag</h1>
        <h1>AI Message Analyzer</h1>
        <div style={{padding: 24}}>
          <UserTextBox onSend={handleSendMessage}/>
          {aiResponse && <AIResponse response={aiResponse} />}
        </div>
      </div>
    </>
  )
}

export default App
