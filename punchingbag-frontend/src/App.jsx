import { useState } from 'react'
import './App.css'
import UserTextBox from './components/UserTextBox.jsx'
import StressTracker from './components/graph.jsx'
import AIResponse from "./components/AIResponse"
import Bag from './components/Bag.jsx'
import SubSurf from './assets/SubwaySurfers.gif'

function App() {
  const [count, setCount] = useState(0)
  const [aiResponse, setAiResponse] = useState(null)
  const [messages, setMessages] = useState([])
  const [cornerText] = useState('')

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
      {/* lower-left fixed textbox */}
      <div className="corner-textbox">
        <img src={SubSurf} alt="subway surfers" style={{position: 'absolute', left: 60, top: -120, width: 128, height: 128, opacity: 0.8}} />
        <textarea
          className="corner-input"
          placeholder="Welcome to Punchie: the number one stress relief companion on the market. Enter all your complaints and frustrations and Punchie will give you sage advice in return. If you are unsatisfied with the advice, click Punchie to knock him around and watch his condition worsen. Remember to enter your stress level periodically so you can watch it decrease in real time!" 
          value={cornerText}
        />
      </div>

      <div style={{padding: 24}}>
        <div className="container">
          <div>
            <div className="chatwindow">
              <AIResponse response={aiResponse} />
            </div>
          </div>

          <div className="bag-container">
            <Bag/>
            <div className="whitetext">Enter Complaints Below</div>
            <UserTextBox onSend={handleSendMessage}/>
          </div>

          <div>
           <StressTracker />
          </div>
        </div>
      </div>
    </>
  )
}

export default App