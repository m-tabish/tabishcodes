import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
function Socials() {
    return (
        <div>
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
        </div>
    )
}

export default Socials
