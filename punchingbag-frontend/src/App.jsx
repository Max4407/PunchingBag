import { useState } from 'react'
import './App.css'
import UserTextBox from './components/UserTextBox.jsx'
import StressTracker from './components/graph.jsx'
import AIResponse from "./components/AIResponse"
import Bag from './components/Bag.jsx'

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

      

        <div className="ai-area">
          <div className="ai-bag-row">
            <div className="ai-bubble" role="status" aria-live="polite">
              <p className="ai-text">{aiResponse}</p>
            </div>

            <div className="bag-slot">
              <Bag />
            </div>
          </div>

          <div className="user-input-row">
            <UserTextBox onSend={handleSendMessage} />
          </div>
        </div>

        <StressTracker /> 
    
        
        {/* <h3>AI Message Analyzer</h3>
        <Bag />
        <div style={{padding: 24}}>
          <UserTextBox onSend={handleSendMessage}/>
          {aiResponse && <AIResponse response={aiResponse} />}
        </div>
        <StressTracker /> */}

    </>
  )
}

export default App