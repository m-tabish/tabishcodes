/* eslint-disable react/prop-types */
import { ArrowRightIcon, GitHubLogoIcon, InstagramLogoIcon, Link1Icon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
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




const LifeCornerObjects = [

    {
        date: "25 Apr  , 24",
        tags: ["PRIZE"],
        title: "Viveka 4.0 Felicitation",
        body: "Received Certificates and Medals for Viveka 4.0  ",
        url: " https://www.linkedin.com/posts/m-tabishk_glad-to-be-felicitated-at-the-%F0%9D%90%95%F0%9D%90%88%F0%9D%90%95%F0%9D%90%84%F0%9D%90%8A%F0%9D%90%80-activity-7321590892576882688-tvY-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC6yBLEBG5NH7o7dojF9RKVfNI21jRDlSZM",
        classname: ""
    },
    {
        date: "12-17 Apr, 25",
        title: "Submitted project in AMUHACKS 4.0",
        tags: ["HACKATHON"],
        body: "",
        url: "https://www.linkedin.com/posts/m-tabishk_had-an-incredible-experience-participating-activity-7320098535549411331-CBhW?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC6yBLEBG5NH7o7dojF9RKVfNI21jRDlSZM",
        classname: "https://www.bluprnt.tech/"
    },
    {
        date: "4-7 Apr, 25",
        tags: ["HACKATHON"],
        title: "Participated in AMHacks by AssetMerkle IGDTUW",
        body: "",
        url: "https://www.linkedin.com/posts/m-tabishk_hackathonjourney-innovationinaction-teamwork-activity-7320097059619950592-OFdc?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC6yBLEBG5NH7o7dojF9RKVfNI21jRDlSZM",
        classname: "https://www.bluprnt.tech/"
    },
    {
        date: "15 Mar, 25",
        tags: ["HACKATHON"],
        title: "Hacknovate 6.0 Hackathon",
        body: " Not selected. Would request to fill this short survey form for our project.",
        url: "https://docs.google.com/forms/d/e/1FAIpQLSeDBMLJ2Kj6-g7VVYo0uwRn-Yw7PdOPqj1wm5U_uqYYm4o89g/viewform?usp=header",
        classname: ""
    },
    {
        date: "11-12 Dec, 24",
        tags: ["HACKATHON"],
        title: "Finalist @ Smart India Hackathon 2024 ",
        body: " ",
        url: " https://www.linkedin.com/posts/neural-nex_smartindiahackathon-sih2024-pmabrmodiatsih-ugcPost-7274807816677113856-FNXQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC6yBLEBG5NH7o7dojF9RKVfNI21jRDlSZM",
        classname: ""
    },


]


export default function Home() {
    const bluprnt_images = [home, examples, flowchart, code, resources];
    const [index, setIndex] = useState(0);

    return (
        <body className="  w-screen min-h-screen overflow-hidden overscroll-none flex bg-[#f2f0ef] flex-col md:flex-row  ">
            {/* Left */}
            <section className="border-gray-300 border-r-1 flex flex-col w-full md:w-2/6 gap-10">
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
            <section className="flex-grow flex flex-col p-6 ">
                <h1 className="text-3xl text-center font-semibold mb-10 mt-6">Projects</h1>
                <div className="flex flex-col gap-3">
                    <a href="https://buildflow-omega.vercel.app/" target="_blank" className="flex w-auto gap-2 items-center text-2xl font-bold underline">Bluprnt (earlier Buildflow)<Link1Icon className="w-6 h-6" /></a>
                    <p className="text-lg">Bluprnt provides a step-by-step guide to create any project you ask it to by providing a project name, description, and tech stack.</p>
                    <div className="mx-auto text-center flex flex-col items-center justify-center gap-2 h-[500px]">
                        <img src={bluprnt_images[index]} className="max-w-[800px] max-h-[500px] object-contain" />
                    </div>
                    <button onClick={() => { setIndex(index => index < bluprnt_images.length - 1 ? index + 1 : 0); console.log(index) }} className="mx-auto rounded-sm w-fit  p-1  bg-[#fde047] border-amber-500 border-2 font-bold flex items-center justify-center gap-2 ">Next <ArrowRightIcon className="mt-1" /></button>
                </div>
            </section>

            {/* Right */}
            <section className="border-l-1 border-gray-300 w-full md:w-2/5 flex flex-col mt-6 pt-6">
                <div className="  overflow-scroll overflow-x-hidden h-4/5 text-center flex flex-col">
                    <h1 className="text-3xl   font-semibold">Competitions</h1>
                    <br />
                    {LifeCornerObjects.map(((event) => (
                        <div key={event.title}>
                            <LifeCornerObject date={event.date} title={event.title} tags={event.tags} body={event.body} url={event.url} classname={event.classname} />
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
        </body>
    );
}


const LifeCornerObject = ({ classname, date, tags, title, body, url }) => {
    return (
        <div >
            <p className={` ${classname} rounded-sm flex flex-col gap-1  mx-2    p-2 text-start pt-4`}>
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
                <a href={url} target="_blank" className="text-blue-500 underline">Check here</a>
            </p >
        </div>)
}  