import React from "react";

import logo from "../assets/hexa.png";
import lock from "../assets/cyber_lock.png";
import flag from "../assets/cyber_flag.png";
import MouseOutlinedIcon from "@mui/icons-material/MouseOutlined";

const Cybersecurity = () => {
    return (
        <div className="w-full bg-[#0F1923]">
            <div className="w-full min-h-screen flex flex-col items-center justify-center relative">
                <div className="flex flex-col justify-center items-center font-sherika relative">
                    <div>
                        <img className="w-48"
                            src={logo}/>
                    </div>

                    <div className="mt-8">
                        <p className="text-[#6F4ACD] font-semibold text-3xl">
                            CYBERSECURITY DEPARTMENT
                        </p>
                    </div>

                    <div className="text-center">
                        <p className="text-[#6F4ACD] font-semibold text-9xl font-obra">
                            CYBERSECURITY
                        </p>
                        <p className="text-[#6F4ACD] font-semibold text-9xl font-obra">
                            ENTHUSIASTS
                        </p>
                    </div>

                    <img src={lock}
                        className="absolute -right-32 -bottom-20 mix-blend-color-dodge"/>
                    <img src={flag}
                        className="absolute -left-48 -bottom-32 mix-blend-color-dodge"/>
                </div>

                <div className="absolute bottom-10 bg-[#6F4ACD] text-black px-5 py-2 rounded-lg flex items-center">
                    <p className="font-bold">Scroll for candidate requirements</p>
                    <MouseOutlinedIcon className="animate-bounce ml-2"
                        sx={
                            {width: "20px"}
                        }/>
                </div>
            </div>

			<div className="w-full flex flex-col p-10 mt-10">

                <div className="">
                    <p className="font-start text-6xl text-[#6F4ACD]">CYBERSEC</p>
                </div>

                <div className=" mt-10 flex flex-col">
                    <p className="font-sf font-bold text-[#6F4ACD] text-2xl">Requirements of the Candidate <span className="font-normal">(Meeting all the requirements isn't mandatory)</span></p>
                    <ul className="list-disc text-[#BCA3FB] text-lg mt-5 px-10">
                        <li>Basics of Cyber Security</li>
                        <li>Familiar with CTFs (Capture the flag)</li>
                        <li>Experience with platforms like HackTheBox and TryHackMe</li>

                    </ul>
                </div>
                
                <div className=" mt-10 flex flex-col">
                    <p className="font-sf font-bold text-[#6F4ACD] text-2xl">Vision of the Cybersecurity Department</p>
                    <p className="list-disc text-[#BCA3FB] text-lg mt-5 px-10">We aim to secure top ranks in CTF challenges held across the globe, perform security assessments on authorized university resources, and also solve CTF machines on platforms like HackTheBox and TryHackMe.</p>
                </div>

                <div className=" mt-10 flex flex-col">
                    <p className="font-sf font-bold text-[#6F4ACD] text-2xl">Our Achievements</p>
                    <ul className="list-disc text-[#BCA3FB] text-lg mt-5 px-10">
                        <li>Top 100 universities on HackTheBox</li>
                        <li>Secured top ranks in CTF challenges held across India</li>
                    </ul>
                </div>

                <div className=" mt-10 flex flex-col">
                    <p className="font-sf font-bold text-[#6F4ACD] text-2xl">So Why Join Us ?</p>
                    <ul className="list-disc text-[#BCA3FB] text-lg mt-5 px-10">
                        <li>Improve your cybersecurity skills</li>
                        <li>Networking opportunity</li>
                        <li>Exposure to corporate level Cyber Security assessments</li>
                    </ul>
                </div>

                <div className=" mt-10 flex flex-col">
                    <p className="font-sf font-bold text-[#6F4ACD] text-2xl">Open positions</p>
                    <ul className="list-disc text-[#BCA3FB] text-lg mt-5 px-10">
                        <li>CYBERSECURITY ENTHUSIASTS</li>
                    </ul>
                </div>
				
			</div>
        </div>
    );
};

export default Cybersecurity;
