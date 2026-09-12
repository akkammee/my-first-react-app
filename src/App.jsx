import {useState, useEffect} from 'react'
import './App.css'

function App() {
  const[birthday, setBirthday] = useState('')
  const [seconds, setSeconds] = useState(0)

useEffect(() => {
  const interval = setInterval(() => {
setSeconds(seconds => seconds + 1)
  }, 1000)
  return () => clearInterval(interval)
}, [])
  

function calculateDaysleft() {
  const now = new Date()
  const target = new Date(birthday)
  const diff = target.getTime() - now.getTime()
  const days = Math.floor(diff/ (1000 * 60 * 60 * 24))
  return days
}

function calculateHoursLeft() {
  const now = new Date()
  const target = new Date(birthday)
  const diff = target.getTime() - now.getTime()
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  return hours
}

function calculateMinutesLeft() {
  const now = new Date()
  const target = new Date(birthday)
  const diff = target.getTime() - now.getTime()
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  return minutes
}

function calculateSecondsLeft() {
  const now = new Date()
  const target = new Date(birthday)
  const diff = target.getTime() - now.getTime()
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)
  return seconds
}


  return(
    <div className="app-container">
    <input type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
    <p>Birthday: {birthday}</p>
    <p className="timer">{birthday ? `${calculateDaysleft()} days, ${calculateHoursLeft()} hours, ${calculateMinutesLeft()} minutes, and ${calculateSecondsLeft()} seconds left until your birthday!` : 'Please enter a birthday date'}</p>
   
<div className="cake">
  <div className="layer layer-1"></div>
  <div className="layer layer-2"></div>
  <div className="layer layer-3"></div>
  <div className="candle">
  <div className="flame"></div>
  </div>
    </div>
   
 </div>
  )
}
export default App