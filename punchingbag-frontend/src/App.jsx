import { useState } from 'react'
import './App.css'
import UserTextBox from './components/UserTextBox.jsx'
import StressTracker from './components/graph.jsx'
import Bag from './components/Bag.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{padding: 24}}>
        <Bag />
        <UserTextBox onSend={(msg) => {
          // simple smoke-test handler: log message and show an alert
          // Replace this with your real message handler later
          console.log('User sent:', msg)
        }} />
        <StressTracker />
      </div>
    </>
  )
}

export default App
