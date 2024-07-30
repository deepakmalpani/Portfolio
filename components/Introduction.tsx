import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/spotlight";

export function Introduction() {
  return (
    <section id="Introduction">
      <div className="h-[30rem] w-full rounded-md flex md:items-center md:justify-center antialiased relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text bg-opacity-50">
            Deepak Malpani <br />
            <span className="text-3xl">Full stack developer</span>
          </h1>
          <p className="mt-4 font-normal text-base text-muted-foreground-dark max-w-lg text-center mx-auto">
            I craft epic, user-friendly applications using my front-end and
            back-end skills. From responsive interfaces to powerful server-side
            systems, I make sure everything runs smoothly. Check out my work,
            and let&apos;s team up to create something legendary!
          </p>
        </div>        
      </div>
    </section>
  );
}
