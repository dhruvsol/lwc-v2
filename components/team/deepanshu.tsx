import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

interface MemberInfo {
  name: string;
  avatar: string;
  role: string;
  bio: string;
  social1: string;
  social2: string;
}
export const Deepanshu = (props: MemberInfo) => {
  const { name, role, avatar, bio, social1, social2 } = props;
  return (
    <>
      <div className="relative flex flex-col items-center my-4 w-[33.333%] min-w-[340px]">
        <div className="absolute z-0 top-0 bg-[#fbd8c5] aspect-square w-44 rounded-full -translate-x-6 -translate-y-4 dark:bg-[#372b2d]"></div>

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
        <div className="flex justify-center gap-x-3 text-xl text-[#3C2A31]">
          <Link href="/">
            <AiFillInstagram />
          </Link>
          <Link href="/">
            <FaLinkedinIn />
          </Link>
        </div>
      </div>
    </>
  );
};
