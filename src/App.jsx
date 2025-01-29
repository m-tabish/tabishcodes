
import './App.css'
import profile from "./assets/profile.png"
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
function App() {

  return (
    <div className='w-screen h-screen bg-[#ece0d1]'>


      {/* Body */}
      <div className='w-3/5 h-screen   flex flex-col items-center font-mono m-auto '>

        {/* Title bar */}
        <nav className=' flex mt-8 gap-2 self-start items-start'>
          <img src={profile} alt="my-image" className='w-12 rounded-full' />
          <h1 className='  text-4xl '>tabishcodes.me </h1>
        </nav>
        <p className='text-3xl text-center text-red-500'>NOTE: THE SITE IS STILL UNDER DEVELOPEMENT</p>

        {/* Socials */}
        <section className=' ml-2 self-center sticky'>
          {/* <h1 className='font-mono text-2xl text-center   border-b-2 font-extralight text-[#967259] '>Socials
          </h1> */}
          <div className='flex gap-4 mt-2 text-[#967259]'>
            <a className='' href='https://www.linkedin.com/in/m-tabishk/' target='_blank'><LinkedInLogoIcon className='w-8 h-auto inline' /></a>
            <a className='' href='https://x.com/damnthesebugs' target='_blank'><TwitterLogoIcon className='w-8 h-auto inline' /></a>
            <a className='' href='https://www.instagram.com/mtabish111' target='_blank'><InstagramLogoIcon className='w-8 h-auto inline' /></a>
            <a className='' href='https://x.com/damnthesebugs' target='_blank'><GitHubLogoIcon className='w-8 h-auto inline' /></a>
          </div>

        </section>


        <section className=' mt-4 ml-2 self-start '>
          <div className='font-mono text-2xl  border-b-2 font-extralight text-[#967259]'>About</div>
          <div className=' mt-5'><a className='text-xl' href='https://buildflow-omega.vercel.app/' target='_blank'>CSE (DS+AI) UG &#39;27</a>
            <p className='text-sm'>Introduction Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos voluptates beatae neque facere, quasi maxime labore cumque minima in fugit?</p>
          </div>

        </section>

        <section className=' mt-4 ml-2 self-start '>
          <div className='font-mono text-2xl  border-b-2 font-extralight text-[#967259]'>Projects
          </div>
          <div className=' mt-5'>
          <a className='border-b-1 text-xl' href='https://buildflow-omega.vercel.app/' target='_blank'>Build Flow</a>
            <p className='mt-2'>- Placed 4th out of 100 GenAI projects in BuildFast with AI Hackathon. </p>
            <p>- Developed a full-stack web application using ReactJS, MongoDB, and ExpressJS.</p>
            <p>– Implemented interactive flowcharts using React Flow, enhancing guidance with code snippets and resources.</p>
            <p>– Automated discovery of tutorials/documentation for efficient task completion.</p>

          </div>

        </section>



      </div>
    </div>
  )
}

export default App
