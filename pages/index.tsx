import type { NextPage } from "next";
import { About } from "../components/about";
import { Events } from "../components/events";
import { Footer } from "../components/footer";
import { Landing } from "../components/Landing";
import { Team } from "../components/team/team";

const Home: NextPage = () => {
  return (
    <>
      <Landing />
      <Events />
      <Team />
      <About />
      <Footer />
    </>
  );
};

export default Home;
