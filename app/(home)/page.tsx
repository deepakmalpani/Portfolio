import Experience from "@/components/Experience";
import { Introduction } from "@/components/Introduction";
import Skills from "@/components/Skills";

const Home = () => {
  return (
    <main className="flex flex-col items-center">
      <Introduction />
      <Experience />
      <Skills/>
    </main>
  );
};

export default Home;
