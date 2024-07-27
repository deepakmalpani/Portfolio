import { CodepenIcon, DatabaseIcon, FigmaIcon, GitGraphIcon, NetworkIcon, PiIcon, SnowflakeIcon, TypeIcon, WindIcon } from "lucide-react";
import { FaGit, FaPython, FaReact } from "react-icons/fa";
import { IoGitBranchSharp, IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { SiDatabricks, SiMicrosoftazure, SiTerraform } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills" className="container py-12 md:py-16">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Skills</h2>
          <p className="text-muted-foreground-dark">
            A collection of technologies I&apos;m proficient in.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        <div className="flex flex-col items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted-dark">
              <FaPython className="h-6 w-6" />
            </div>
            <span className="text-sm font-medium">Python</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted-dark">
              <FaReact className="h-6 w-6" />
            </div>
            <span className="text-sm font-medium">React</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted-dark">
              <RiNextjsFill className="h-6 w-6" />
            </div>
            <span className="text-sm font-medium">Next js</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted-dark">
              <SiTerraform className="h-6 w-6" />
            </div>
            <span className="text-sm font-medium">Terraform</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted-dark">
              <SiMicrosoftazure className="h-6 w-6" />
            </div>
            <span className="text-sm font-medium">Azure</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted-dark">
              <TypeIcon className="h-6 w-6" />
            </div>
            <span className="text-sm font-medium">TypeScript</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted-dark">
              <SiDatabricks className="h-6 w-6" />
            </div>
            <span className="text-sm font-medium">Databricks</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted-dark">
              <IoGitBranchSharp className="h-6 w-6" />
            </div>
            <span className="text-sm font-medium">Git</span>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted-dark">
              <SnowflakeIcon className="h-6 w-6" />
            </div>
            <span className="text-sm font-medium">Snowflake</span>
          </div>
          
          
        </div>
      </div>
    </section>
  );
};

export default Skills;
