import { useState } from 'react'
import './App.css'
import UserTextBox from './components/UserTextBox'

function App() {
  const [count, setCount] = useState(0)

  const [messages, setMessages] = useState([])

  const handleSendMessage = (message) => {

    setMessages((prev) => [...prev, message])
  }

  return (
    <>
      <div className='app'>
        <h1>Punch Me Bag</h1>
        <div className='messages'>
          {messages.map((msg, i) => (
            <div key={i} className='message'>
              {msg}
            </div>
          ))}
        </div>
        <div style={{padding: 24}}>
          <UserTextBox onSend={handleSendMessage}/>
        </div>
      </div>
    </>
  )
}

export default App
