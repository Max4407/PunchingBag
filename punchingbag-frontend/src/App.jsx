import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserTextBox from './components/UserTextBox'

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
      </div>
    </>
  )
}

export default App
