import { useState } from 'react'
import './App.css'
import UserTextBox from './components/UserTextBox'
import Bag from './components/Bag'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{padding: 24}}>
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
