/* eslint-disable react/prop-types */
import { GitHubLogoIcon, InstagramLogoIcon, Link1Icon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { useState } from "react";

// images
import code from "../assets/bluprnt/code.png";
import examples from "../assets/bluprnt/examples.png";
import flowchart from "../assets/bluprnt/flowchart.png";
import home from "../assets/bluprnt/home.png";
import resources from "../assets/bluprnt/resources.png";

// logo
import PeerlistLogo from "../assets/peerlist-logo.png";
import profile from "../assets/profile.png";
import Social_logo from "../components/Social_logo";

// import { Tweet } from "react-tweet";
import { LifeCornerObjects } from "./lifeEvents.jsx";




export default function Home() {
  
    const lifeEvents = LifeCornerObjects
    return (
        <div className="  w-screen min-h-screen overflow-hidden overscroll-none flex bg-[#f2f0ef] flex-col md:flex-row  ">
            {/* Left */}
            <section className="border-gray-300 border-r-1 flex flex-col w-full h-full my-12 md:w-2/6 gap-10">
                {/* Left Top */}
                <section className="h-1/2 text-3xl text-center flex flex-col items-center justify-center p-4">
                    <img src={profile} className="rounded-full w-24 mt-6" alt="Profile" />

                    <div className="text-xl font-semibold mt-2">Mohd Tabish Khan</div>

                    <div className="mt-3 text-sm  w-4/5">CSE UG &apos;27   </div>
                    <br />
                    <p className="font-semibold h-fit text-clip overflow-clip text-sm px-2">  </p>

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
                <h1 className="text-3xl text-center font-semibold mb-10 mt-6">Projects</h1>

                <div className="flex flex-col w-full gap-3">
                    <a href="https://www.bluprnt.tech/" target="_blank" className="flex w-auto gap-2 items-center text-2xl font-bold underline">Bluprnt <Link1Icon className="w-6 h-6" /></a>
                    <p className="text-lg">Bluprnt provides a step-by-step guide to create any project you ask it to by providing a project name, description, and tech stack.</p>
                    <div className="w-full text-center flex flex-col items-center justify-center gap-2 h-[500px]">
                        {/* <img src={bluprnt_images[index]} className="max-w-[800px] max-h-[500px] object-contain" /> */}

                        <iframe src="https://www.bluprnt.tech" className="h-full w-sm lg:w-2xl max-w-3xl"></iframe>
                    </div>

                </div>
                <div className="flex flex-col gap-3">




                    {/* <div className='tweet-customizer-wrapper max-h-1/5 w-auto'>
                        <Tweet id="1840646848270492084"></Tweet>
                    </div> */}
                </div>
            </section>

            {/* Right */}
            <section className="border-l-1 border-gray-300 w-full md:w-2/5 flex flex-col mt-6 pt-6">
                <div className="  overflow-scroll overflow-x-hidden h-4/5 text-center flex flex-col">
                    <h1 className="text-3xl   font-semibold">Life Logs</h1>
                    <br />
                    {lifeEvents.map(((event) => (
                        <div key={event.title}>
                            <LifeCornerObject date={event.date} title={event.title} tags={event.tags} body={event.body} url={event.url} classname={event.classname}  >   {event.children}
                            </LifeCornerObject>
                        </div>
                    )))}
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

        </div>
    );
}


const LifeCornerObject = ({ classname, date, tags, title, body, url, children }) => {
    return (
        <div >
            <span className={` ${classname} rounded-sm flex flex-col gap-1  mx-2    p-2 text-start pt-4`}>
                {/* date */}

                <span className="flex justify-between  w-full">
                    <span className="border-amber-400 border bg-amber-100 rounded-sm w-fit px-2 py-1 text-sm inline ">{date}</span>

                    {tags && <span className="border-green-400 border bg-green-100 rounded-sm w-fit px-2 py-1 text-sm inline ">{tags?.map((tag) => (
                        <span key={tag} className="">
                            {tag}
                        </span>
                    ))}</span>}

                </span>

                <p className="font-semibold">{title}</p>

                {/* Body */}
                <p>{body}</p>
                {children}
                <a href={url} target="_blank" className="text-blue-500 underline">Check here</a>
            </ span>
        </div>)
}  