import { Card } from "../../components/blog/card";
import { Header } from "../../components/header";

const index = () => {
  return (
    <>
      <Header />
      <section className="min-h-screen bg-[#FEF2EC] w-full dark:bg-[#22181C]">
        <h1 className="flex justify-center pt-10 lg:pt-32 font-semibold text-3xl text-[#3C2A31] dark:text-white ">
          Blogs
        </h1>
        <div className="py-10 lg:grid lg:grid-cols-3 xl:grid-cols-4 lg:gap-y-10 md:grid-cols-2 grid-cols-1">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </>
  );
};

export default index;
