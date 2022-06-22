import React from "react";
import { FaDiscord, FaLinkedinIn } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { BsCalendar2Event } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import Image from "next/image";
import { useTheme } from "next-themes";
import BlubOutLined from "../public/blub-outline.svg";
import BulbFilled from "../public/bulb-filled.svg";
export const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <header className="absolute z-50 w-full py-7 px-7 font-semibold text-[#775563] dark:text-[#AA8896]">
        <div className="container mx-auto flex items-center justify-between">
          {/* logo */}
          <div className="w-full">
            <div className="w-12">
              <Image src="/workmark.svg" alt="LWC" width={100} height={100} />
            </div>
          </div>

          {/* navigation */}
          <div className="bg-[#F8DDE4] rounded-t-full rounded-b-[145rem] h-20 fixed bottom-10 left-7 right-7 md:w-full md:static md:bg-transparent md:flex justify-center dark:bg-[#302127] md:dark:bg-transparent">
            {/* the join pill */}
            <div className="absolute w-full bottom-16 flex justify-center">
              <a
                className="bg-[#F8DDE4] rounded-tl-[40px] rounded-tr-[40px] p-2 w-24 flex justify-center md:hidden dark:bg-[#302127]"
                href=""
              >
                <div className="bg-[#8D29DC] my-2 p-5 rounded-full text-white ">
                  <div className=" text-3xl">
                    <FaDiscord />
                  </div>
                </div>
              </a>
            </div>

            {/* nav items */}
            <nav className="flex items-center justify-center h-full space-x-8 text-xs">
              <a
                className="flex flex-col items-center justify-center space-y-1 transition-colors hover:text-[#000000] dark:hover:text-white"
                href="/agfgdsfg"
              >
                <div className="flex flex-col items-center space-y-1 font-semibold">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </div>
                  <span>Home</span>
                </div>
              </a>
              <a
                className="flex flex-col items-center justify-center space-y-1 transition-colors hover:text-[#000000] dark:hover:text-white"
                href="#events"
              >
                <div className="flex flex-col items-center space-y-1 font-semibold">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span>Event</span>
                </div>
              </a>
              <a
                className="flex flex-col items-center justify-center space-y-1 transition-colors hover:text-[#000000] dark:hover:text-white"
                href="#team"
              >
                <div className="flex flex-col items-center space-y-1 font-semibold">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <span>Team</span>
                </div>
              </a>
              <a href="/blog">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                  <span>Blog</span>
                </div>
              </a>
            </nav>
          </div>

          <div className="hidden md:flex items-center justify-end w-full">
            {/* socials */}
            <a
              href="/dfd"
              className="mx-2 hidden transition-colors lg:inline hover:text-black dark:hover:text-white"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="/aaaasff"
              className="mx-2 hidden transition-colors lg:inline hover:text-black dark:hover:text-white"
            >
              <BsTwitter />
            </a>

            {/* join button */}
            <a
              className="mx-4 text-white font-semibold bg-[#8D29DC] px-4 py-2 rounded-lg flex space-x-2 items-center transition-colors hover:bg-[#651A9E]"
              href="/ffafd"
            >
              <div className="w-4">
                <FaDiscord />
              </div>
              <span className="mt-[2px]">Join now</span>
            </a>
          </div>

          {/* dark theme button */}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="transition-colors hover:text-black dark:hover:text-white z-40"
          >
            <div className="dark:hidden relative ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                ></path>
              </svg>
            </div>
            <div className="hidden dark:inline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"></path>
              </svg>
            </div>
          </button>
        </div>
      </header>
    </>
  );
};
