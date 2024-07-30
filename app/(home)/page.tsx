import Experience from "@/components/Experience";
import Header from "@/components/Header";
import { Introduction } from "@/components/Introduction";
import Skills from "@/components/Skills";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background-dark text-foreground-dark" >
      <Header/>
    <main className="flex-1">
      <Introduction />
      <Experience />
      <Skills/>
    </main>
    </div>
  );
};

export default Home;
