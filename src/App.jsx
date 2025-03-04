
import './App.css'

import Start from "./pages/Start"
import { Analytics } from "@vercel/analytics/react"
function App() {

  return (
    <div className='min-w-screen min-h-screen bg-[#ece0d1]'>
      <Analytics />
      <Start></Start>


    </div>
  )
}

export default App
