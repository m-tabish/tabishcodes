
import './App.css'

function App() {

  return (
    <div className='w-screen h-screen bg-[#ece0d1]     '>
      <div className='w-4/5 h-screen  flex flex-col items-center font-mono m-auto '>
        <nav className=' flex  w-full  px-4 mt-8'>
          <h1 className=' font-bold text-4xl '>tabishcodes.me</h1>
        </nav>
        <div className='flex font-2xl w-full gap-6 justify-center'>
          <button className='rounded-sm px-3 bg-[#967259] shadow-lg'>Home</button>
          <button className='rounded-sm  drop-shadow-xl shadow-lg px-3 bg-[#967259]'>Projects</button>
        </div>
      </div>

    </div>
  )
}

export default App
