import React from "react";
import { Aditya } from "./aditya";
import { Deepanshu } from "./deepanshu";
import { Dhruv } from "./dhruv";
import { Riya } from "./riya";
import { Vasanth } from "./vasanth";

export const Team = () => {
  return (
    <>
      <div className="bg-[#FEF2EC] min-h-screen dark:bg-[#22181C]">
        <div className=" container mx-auto flex flex-col items-center pt-10 text-[#3C2A31] md:pt-0  dark:text-white ">
          <h1 className="text-4xl font-bold mb-12">Our Team</h1>
          <div className="flex  flex-col items-center md:flex md:flex-row md:flex-wrap md:justify-center md:max-w-5xl">
            <Aditya
              name="Aditya Sahu"
              role="Community Leader"
              avatar="/avatar/aditya.png"
              bio="Coding educator at PrepInsta, Blockchain Developer."
              social1="https://github.com/adityasahu252"
              social2="https://www.linkedin.com/in/aditya-sahu-477a69175/"
              social3="https://twitter.com/AdityaSahuDev"
            />
            <Vasanth
              name="Vasanth Srivatsa"
              role="Community Leader"
              avatar="/avatar/aditya.png"
              bio="Computer geek 👨‍💻 I make videos 📹 on YouTube & tweet 🐦 about JavaScript."
              social1="https://www.youtube.com/vasanthdeveloper"
              social2="https://twitter.com/vsnthdev"
              social3="https://discord.com/invite/cKebUMkEEp"
            />
            <Riya
              name="Riya Sahu"
              role="Community Leader"
              avatar="/avatar/riya.png"
              bio="B.Tech CSE'24 | AI & ML | Community enthusiast learning new skills."
              social1="https://www.linkedin.com/in/riya-sahu-672471211/"
              social2="https://twitter.com/riya_sahu_31?s=08"
              social3="https://twitter.com/riya_sahu_31?s=08"
            />
            <Deepanshu
              name="Deepanshu Sharma"
              role="Community Leader"
              avatar="/avatar/deepanshu.jpg"
              bio="Computer geek | C++,AI & ML | Problem solver"
              social1="https://www.linkedin.com/in/deepanshu-sharma-953a81160/"
              social2="https://twitter.com/riya_sahu_31?s=08"
            />
            <Dhruv
              name="Dhruvraj Solanki"
              role="Community Leader"
              avatar="/avatar/dhruv.png"
              bio="Exploring & Coding Javascript | ML Enthusiast"
              social1="https://github.com/dhruvsol"
              social3="https://twitter.com/dhruvraj641"
              social2="https://www.linkedin.com/in/dhruvraj-solanki-663a54200/"
            />
          </div>
        </div>
      </div>
    </>
  );
};
