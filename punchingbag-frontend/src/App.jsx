import { useState } from 'react'
import './App.css'
import UserTextBox from './components/UserTextBox'
<<<<<<< HEAD
import StressTracker from './components/graph'
=======
import Bag from './components/Bag'
>>>>>>> 069b55020c75da147951c12d45e16b8110a41dbe

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{padding: 24}}>
        <StressTracker />
        <UserTextBox onSend={(msg) => {
          // simple smoke-test handler: log message and show an alert
          // Replace this with your real message handler later
          console.log('User sent:', msg)
        }} />
        <Bag />
      </div>
    </>
  )
}

export default App
