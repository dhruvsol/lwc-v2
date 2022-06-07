import Image from "next/image";
export const Footer = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col  h-56 bg-[#FBD8C6] dark:bg-[#372B2D] space-y-3">
        <p className="text-lg">Artwork & illustrations designed by:</p>
        <div className="flex justify-center items-center space-x-2 ">
          <Image
            className="rounded-full aspect-square "
            src="/swathi.jpg"
            alt="swathi"
            width={40}
            height={40}
          />
          <p className="text-lg font-bold">Swathi Rao</p>
        </div>
      </div>
    </>
  );
};
