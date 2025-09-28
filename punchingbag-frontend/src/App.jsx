import { useState } from 'react'
import './App.css'

import UserTextBox from './components/UserTextBox'
import StressTracker from './components/graph'
import Bag from './components/Bag'

function App() {
  const [counter, setCounter] = useState(0);
  const [totalHits, setTotalHits] = useState(0);

  return (
    <>
      <div style={{padding: 24}}>
        <StressTracker hits={totalHits} />
        <UserTextBox onSend={(msg) => {
          // simple smoke-test handler: log message and show an alert
          // Replace this with your real message handler later
          console.log('User sent:', msg)
        }} />
        <Bag counter={counter} setCounter={setCounter} totalHits={totalHits} setTotalHits={setTotalHits} />
      </div>
    </>
  )
}

export default App
