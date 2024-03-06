import Image from "next/image";
import profilePic from '../images/profile.png'

export default function About() {
    return (
        <div className="bg-theme-1-3 text-theme-1-1 mt-28 -z-20 w-full flex flex-row items-center justify-evenly p-10 gap-24">
          <div className="relative flex flex-col">
            <div className="absolute top-0 -left-10 -z-10  bg-theme-1-4 w-full h-52 rounded-tl-[55%] rounded-tr-[68%] rounded-bl-[56%] rounded-br-[43%] rounded-custom"></div>
            <span className="w-96 font-extrabold text-2xl"><a href="">sdfsdf</a>Hi, I&apos;m <br />
            <b className="text-4xl">Krishnasankar</b><br />
            Crafting efficient, maintainable and scalable software solutions for over a year.<br />
            </span>
          </div>
        <Image className="rounded-custom w-80 h-80 shadow-lg shadow-green" src={profilePic} alt="Profile" />
      </div>
    )
}