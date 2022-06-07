import Curve from "../public/curve.svg";
export const Events = () => {
  return (
    <>
      <div
        id="events"
        className="flex flex-col justify-center items-center pt-20 bg-[#fbd8c6] dark:bg-[#372b2d] dark:text-white"
      >
        <h1 className="text-4xl font-bold mb-16">Upcoming Events</h1>
        <div className="flex flex-col px-6 space-y-12 lg:space-y-0 lg:flex-row lg:space-x-8">
          <div className="font-medium bg-[#fef2ec] rounded-xl p-8 w-full flex flex-col justify-center items-center text-center max-w-[600px] dark:bg-[#22181c]">
            <h3 className="text font-semibold text-3xl mb-4">
              The community is 😌 meditating 🧘
            </h3>
            <p>
              Looks like there are no 🤷 upcoming events scheduled at the
              moment. Check back later for updates, or join the{" "}
              <a className="text-[#8D29DC] transition-colors hover:text-[#651A9E]">
                our Discord server
              </a>{" "}
              to get notified when we schedule an event.
            </p>
          </div>
        </div>
        <div className="w-full text-[#fef2ec] dark:text-[#22181c]">
          <Curve />
        </div>
      </div>
    </>
  );
};
