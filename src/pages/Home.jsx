import { GitHubLogoIcon, InstagramLogoIcon, Link1Icon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import examples from "../assets/buildflow/examples.png";
import flowchart from "../assets/buildflow/flowchart.png";
import home from "../assets/buildflow/home.png";
import PeerlistLogo from "../assets/peerlist-logo.png";
import profile from "../assets/profile.png";
import Social_logo from "../components/Social_logo";
export default function Home() {
    const buildflow_images = [home, examples, flowchart]
    const [index, setIndex] = useState(0)
    return (
        <div className="w-screen m-auto h-full flex bg-[#f2f0ef]">

            {/* Left */}
            <section className="border-gray-300 border-r-1 flex flex-col w-2/5 h-full gap-10">
                {/* Left Top */}
                <section className="h-2/3   text-3xl text-center flex flex-col items-center p-4">
                    <img src={profile} className="rounded-full w-24 mt-6" alt="Profile" />
                    <div className="text-xl font-semibold mt-2">Mohd Tabish Khan</div>
                    <div className="mt-3 text-sm font-semibold w-4/5">CSE UG &apos;27  | Web Dev </div>
                    <p className="h-fit text-clip overflow-clip text-sm px-2">A Computer Science Engineering student passionate about Web Development and Machine Learning.

                    </p>
                    <div className="px-2 text-sm text-left self-start mx-6 mt-4">
                        <span className="text-lg font-mono underline">Hackathons <br /></span>
                        <a href="https://www.linkedin.com/posts/neural-nex_smartindiahackathon-sih2024-pmabrmodiatsih-ugcPost-7274807816677113856-FNXQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC6yBLEBG5NH7o7dojF9RKVfNI21jRDlSZM" target="_blank" className="text-blue-500 font-bold">Smart India Hackathon</a>
                    </div>
                </section>

                {/* Left Bottom */}
                <section className=" h-1/3 border-t-1 py-10 border-gray-300  cursor-pointer flex flex-col justify-center items-center">
                    <div className="font-bold font-mono text-left text-2xl mb-10 "> Socials</div>
                    <div className="flex gap-2">
                        <a href="https://www.instagram.com/mtabish111" target="_blank" className={`gradient rounded-lg  w-12 h-12 flex items-center justify-center`} >
                            <InstagramLogoIcon className="w-6 h-6 " color="white" />
                        </a>

                        <Social_logo url={"https://www.linkedin.com/in/m-tabishk"} color={"#0b65c3"}>
                            <LinkedInLogoIcon className="w-6 h-6 " color="white" />
                        </Social_logo>
                    </div>

                    <div className="flex gap-2 mt-3">

                        <Social_logo url={"https://www.github.com/m-tabish"} color={"black"}   >
                            <GitHubLogoIcon className="w-6 h-6" color="white" />
                        </Social_logo>
                        <Social_logo url={"https://peerlist.io/scroll"} color="#00aa45"  >
                            <img src={PeerlistLogo} alt="" />
                        </Social_logo>
                        <Social_logo url={"https://www.x.com/damnthesebugs"} color={"black"}   >
                            <TwitterLogoIcon className="w-6 h-6" color="white" />
                        </Social_logo>

                    </div>
                </section>
            </section>

            {/* Middle */}
            <section className=" flex-grow flex flex-col p-6">
                <h1 className="text-3xl text-center font-bold mb-10 mt-6">Projects</h1>

                {/* project 1 */}
                <div className="flex flex-col gap-3">
                    <a href="https://buildflow-omega.vercel.app/" target="_blank" className="flex w-min   gap-2 items-center text-2xl font-bold underline">BuildFlow <Link1Icon className="w-6 h-6" /></a>
                    <p className="text-lg ">BuildFlow provides a step-by-step guide to create any project you ask it to by providing a project name, description, and tech stack.</p>
                    <div className="w-full h-96 mx-auto text-center flex flex-col items-center justify-center gap-2 ">
                        <img src={buildflow_images[index]} className="max-w-full h-full" />
                    </div>
                    <button onClick={() => { setIndex(index => index < 2 ? index + 1 : 0); console.log(index) }} className="rounded-sm w-fit mx-auto p-1 bg-[#fde047] border font-bold ">Next</button>
                </div>

            </section>

            {/* Right */}
            <section className=" border-l-1 border-gray-300 w-2/5 flex flex-col mt-6 pt-6">
                <div className="h-full  text-center  flex  flex-col  ">
                    <h1 className="text-3xl font-bold">In other news</h1>
                    <p className="mt-2 text-start pl-4 font-semibold ">Currently Studying: <br /><span className="underline font-normal"> Modern Operating Systems by Andrew S. Tanenbaum</span></p>
                </div>

            </section>
        </div >
    );
}
