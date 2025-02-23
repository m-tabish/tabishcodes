import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon, Link1Icon } from "@radix-ui/react-icons";
import profile from "../assets/profile.png";

export default function Home() {
    return (
        <div className="w-screen m-auto h-screen flex bg-[#f2f0ef]">

            {/* Left */}
            <div className="border-gray-300 border-r-1 flex flex-col w-2/5 h-full">
                {/* Left Top */}
                <div className="h-2/3   text-3xl text-center flex flex-col items-center p-4">
                    <img src={profile} className="rounded-full w-24 mt-6" alt="Profile" />
                    <div className="text-xl font-semibold mt-2">Mohd Tabish Khan</div>
                    <div className="text-xl font-semibold">B.TECH CSE &apos;27</div>
                    <div className="mt-3 text-lg w-4/5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ips </div>
                </div>

                {/* Left Bottom */}
                <div className="h-1/3 border-t-1 border-gray-300  cursor-pointer flex flex-col justify-center items-center">
                    <div className="flex gap-2">
                        <a href="https://www.instagram.com/mtabish111" target="_blank" className="rounded-full border w-12 h-12 flex items-center justify-center"><InstagramLogoIcon className="w-6 h-6" /></a>
                        <a href="https://www.linkedin.com/mtabishk" target="_blank" className="rounded-full border w-12 h-12 flex items-center justify-center"><LinkedInLogoIcon className="w-6 h-6" /></a>
                    </div>
                    <div className="flex gap-2 mt-3">
                        <a href="https://www.x.com/damnthesebugs" target="_blank" className="rounded-full border w-12 h-12 flex items-center justify-center"><TwitterLogoIcon className="w-6 h-6" /></a>
                        <a href="https://www.github.com/m-tabish" target="_blank" className="rounded-full border w-12 h-12 flex items-center justify-center"><GitHubLogoIcon className="w-6 h-6" /></a>
                    </div>
                </div>
            </div>

            {/* Middle */}
            <div className="flex-grow flex flex-col p-6">
                <h1 className="text-3xl text-center font-bold mb-10 mt-6">Projects</h1>
                <div className="flex flex-col gap-3">
                    <a href="https://buildflow-omega.vercel.app/" target="_blank" className="flex gap-2 items-center text-2xl font-bold underline">BuildFlow <Link1Icon className="w-6 h-6" /></a>
                    <p className="text-lg ">BuildFlow provides a step-by-step guide to create any project you ask it to by providing a project name, description, and tech stack.</p>
                    <div className="w-56 h-44 border mx-auto text-center bg-gray-300 flex items-center justify-center">Carousel</div>
                </div>
            </div>

            {/* Right */}
            <div className=" border-l-1 border-gray-300 w-2/5 flex flex-col">
                <div className="h-full  text-center text-3xl flex items-center justify-center">Achievements</div>
            </div>
        </div>
    );
}
