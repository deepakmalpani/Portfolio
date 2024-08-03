"use client";

import React from "react";
import { Spotlight } from "./ui/spotlight";

export function Introduction() {
  const handleContactClick = () => {
    window.location.href = "mailto:deepakmalpani0@gmail.com";
  };

  const handleDownloadResumeClick = () => {
    const url = "https://drive.google.com/uc?export=download&id=1h0co4xrSY8Z77FZ7ITFybeGDCrnUp_Ia";
    window.open(url, "_blank");
  };

  return (
    <section id="Introduction">
      <div className="h-[27rem] w-full rounded-md flex md:items-center md:justify-center antialiased relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0 mt-8">
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
          <div className="flex gap-4 justify-center flex-row mt-4">
            <button
              className="h-12 animate-shimmer rounded-md border border-primary bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              onClick={handleContactClick}
            >
              Contact Me
            </button>
            <button
              className="h-12 animate-shimmer rounded-md border border-input bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-muted-foreground-dark transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              onClick={handleDownloadResumeClick}
            >
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
