import { useState } from 'react'
import './App.css'
import Post from './components/Post'
import Nav from './components/Nav'
function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <Nav/>
  <div className='px-20'>
  <Post/>
  <Post/>
  <Post/>
  <Post/>
 
  </div>
  
  </>
  )
}

export default App
