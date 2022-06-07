import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SiDiscord } from "react-icons/si";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
interface MemberInfo {
  name: string;
  avatar: string;
  role: string;
  bio: string;
  social1: string;
  social2: string;
  social3: string;
}
export const Vasanth = (props: MemberInfo) => {
  const { name, role, avatar, bio, social1, social2, social3 } = props;
  return (
    <>
      <div className="relative flex flex-col items-center my-4 w-[33.333%] min-w-[340px]">
        <div className="absolute z-0 top-0 bg-[#8647ea] aspect-square w-28 rounded-full translate-x-10 -translate-y-2"></div>
        <div className="flex z-10 justify-center items-center user-drag-false rounded-full select-none object-cover aspect-square w-48 border-solid border-8 bg-[#fef2ec] border-[#fef2ec] dark:bg-[#22181c] dark:border-[#22181c]">
          <Image
            className="rounded-full"
            src={avatar}
            alt={name}
            width={200}
            height={200}
          />
        </div>
        <div className="flex justify-center flex-col text-center">
          <h1 className="text-[#3C2A31] text-2xl font-bold dark:text-white">
            {name}
          </h1>
          <h3 className="text-[#8D29DC] font-semibold ">{role}</h3>
          <p className="text-[#3C2A31] mt-3 mx-20 dark:text-white">{bio}</p>
        </div>
        {/* Socials */}
        <div className="flex justify-center gap-x-3 text-xl text-[#3C2A31] items-baseline">
          <Link href="/">
            <AiFillYoutube />
          </Link>
          <Link href="/">
            <AiOutlineTwitter />
          </Link>
          <Link href="/">
            <SiDiscord />
          </Link>
        </div>
      </div>
    </>
  );
};
