import { BriefcaseIcon, Github, Laptop, LinkedinIcon } from "lucide-react";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background-dark/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="flex items-center gap-2 font-bold"
            prefetch={false}
          >
            <Laptop className="h-6 w-6" />
            <span>Deepak Malpani</span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/deepakmalpani/"
            target="#"
            className="text-muted-foreground-dark hover:text-foreground-dark"
            prefetch={false}
          >
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/deepakmalpani/"
            target="#"
            className="text-muted-foreground-dark hover:text-foreground-dark"
            prefetch={false}
          >
            <LinkedinIcon className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="https://x.com/deepakmalpani0"
            target="#"
            className="text-muted-foreground-dark hover:text-foreground-dark"
            prefetch={false}
          >
            <FaXTwitter className="h-6 w-6" />
            <span className="sr-only">X</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
