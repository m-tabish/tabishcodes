/* eslint-disable react/prop-types */
import { ArrowRightIcon, GitHubLogoIcon, InstagramLogoIcon, Link1Icon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import examples from "../assets/buildflow/examples.png";
import flowchart from "../assets/buildflow/flowchart.png";
import home from "../assets/buildflow/home.png";
import PeerlistLogo from "../assets/peerlist-logo.png";
import profile from "../assets/profile.png";
import Social_logo from "../components/Social_logo";

export default function Home() {
    const buildflow_images = [home, examples, flowchart];
    const [index, setIndex] = useState(0);

    return (
        <body className="w-screen min-h-screen overflow-hidden overscroll-none flex bg-[#f2f0ef] flex-col md:flex-row  ">
            {/* Left */}
            <section className="border-gray-300 border-r-1 flex flex-col w-full md:w-2/6 gap-10">
                {/* Left Top */}
                <section className="h-1/2 text-3xl text-center flex flex-col items-center p-4">
                    <img src={profile} className="rounded-full w-24 mt-6" alt="Profile" />

                    <div className="text-xl font-semibold mt-2">Mohd Tabish Khan</div>

                    <div className="mt-3 text-sm  w-4/5">CSE UG &apos;27  | Web Dev </div>
                    <br />
                    <p className="font-semibold h-fit text-clip overflow-clip text-sm px-2">A Computer Science Engineering student passionate about Web Development </p>

                </section>

                {/* Left Bottom */}
                <section className="h-1/2 border-t-1 py-10 border-gray-300 cursor-pointer flex flex-col justify-center items-center">
                    <div className="font-bold font-mono text-left text-2xl mb-10">Socials</div>
                    <div className="flex gap-2">
                        <a href="https://www.instagram.com/mtabish111" target="_blank" className={`gradient rounded-lg w-12 h-12 flex items-center justify-center`}>
                            <InstagramLogoIcon className="w-6 h-6" color="white" />
                        </a>
                        <Social_logo url={"https://www.linkedin.com/in/m-tabishk"} color={"#0b65c3"}>
                            <LinkedInLogoIcon className="w-6 h-6" color="white" />
                        </Social_logo>
                    </div>
                    <div className="flex gap-2 mt-3">
                        <Social_logo url={"https://www.github.com/m-tabish"} color={"black"}>
                            <GitHubLogoIcon className="w-6 h-6" color="white" />
                        </Social_logo>
                        <Social_logo url={"https://peerlist.io/scroll"} color="#00aa45">
                            <img src={PeerlistLogo} alt="" />
                        </Social_logo>
                        <Social_logo url={"https://www.x.com/damnthesebugs"} color={"black"}>
                            <TwitterLogoIcon className="w-6 h-6" color="white" />
                        </Social_logo>
                    </div>
                </section>
            </section>

            {/* Middle */}
            <section className="flex-grow flex flex-col p-6">
                <h1 className="text-3xl text-center font-bold mb-10 mt-6">Projects</h1>
                <div className="flex flex-col gap-3">
                    <a href="https://buildflow-omega.vercel.app/" target="_blank" className="flex w-min gap-2 items-center text-2xl font-bold underline">BuildFlow <Link1Icon className="w-6 h-6" /></a>
                    <p className="text-lg">BuildFlow provides a step-by-step guide to create any project you ask it to by providing a project name, description, and tech stack.</p>
                    <div className="w-full h-96 mx-auto text-center flex flex-col items-center justify-center gap-2">
                        <img src={buildflow_images[index]} className="max-w-full h-full" />
                    </div>
                    <button onClick={() => { setIndex(index => index < 2 ? index + 1 : 0); console.log(index) }} className="rounded-sm w-fit mx-auto p-1 bg-[#fde047] border-amber-500 border-2 font-bold flex items-center gap-2 ">Next <ArrowRightIcon className="mt-1" /></button>
                </div>
            </section>

            {/* Right */}
            <section className="border-l-1 border-gray-300 w-full md:w-2/5 flex flex-col mt-6 pt-6">
                <div className="h-4/5 text-center flex flex-col">
                    <h1 className="text-3xl font-bold">Life corner</h1>
                    <br />


                    <LifeCornerObject date={"15 Mar, 25"} title={" Offline Hackathon "} body={" Would request to fill this short survey form for our project."} url={"https://docs.google.com/forms/d/e/1FAIpQLSeDBMLJ2Kj6-g7VVYo0uwRn-Yw7PdOPqj1wm5U_uqYYm4o89g/viewform?usp=header"} />


                    <LifeCornerObject date={"7 Mar, 25"} title={" Currently Studying:  "} body={"Modern Operating Systems by Andrew S. Tanenbaum"} url={"#"} />

                    <LifeCornerObject date={"11-12 Dec, 24"} title={" Finalist @ Smart India Hackathon 2024  "} url={"https://www.linkedin.com/posts/neural-nex_smartindiahackathon-sih2024-pmabrmodiatsih-ugcPost-7274807816677113856-FNXQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC6yBLEBG5NH7o7dojF9RKVfNI21jRDlSZM"} />

                    <div className="px-2 text-sm text-left self-start mx-6 mt-4">


                    </div>

                </div>
                <div className="w-full ">
                    <p className="text-center my-4 text-xl font-semibold">Hackathon Counter</p>
                    <div className="flex-1 justify-between w-1/2 mx-auto px-5   flex-row h-full flex">

                        <div className="flex items-center  flex-col text-amber-500">
                            <div className="text-lg font-bold">04</div>
                            <p className=" font-semibold">Offline</p>
                        </div>
                        <div className="flex items-center flex-col  text-emerald-500  ">
                            <div className="text-lg font-bold">02</div>
                            <p className=" font-semibold  ">Online</p>
                        </div>
                        {/* <div className="flex items-center flex-col text-gray-400">
                            <div className="text-lg font-bold">10</div>
                            <p className=" font-semibold text-center">Overall</p>
                        </div> */}
                    </div>

                </div>

            </section>
        </body>
    );
}


const LifeCornerObject = ({ classname, date, title, body, url, }) => {
    return (
        <>
            <p className={` ${classname} rounded-sm   mx-2 mt-4 p-2  border-amber-400 border-t-2 text-start pt-4`}>
                {/* date */}
                <span className="border-amber-400 border-1 bg-amber-100 rounded-sm px-2">{date} <br /></span>

                {/* title */}
                <p className="font-semibold">{title}</p>

                {/* Body */}
                <p>{body}</p>
                <a href={url} target="_blank" className="text-blue-500 underline">Click here</a></p >
        </>)
} 