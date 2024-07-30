import Experience from "@/components/Experience";
import Header from "@/components/Header";
import { Introduction } from "@/components/Introduction";
import Skills from "@/components/Skills";
import { Meteors } from "@/components/ui/meteors";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background-dark text-foreground-dark" >
      <Header/>
    <main className="flex-1">
      <Introduction />
      <Experience />
      <Skills/>
      {/* <Meteors number={20} className="z-0"/> */}
    </main>
    </div>
  );
};

export default Home;
