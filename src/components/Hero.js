import { HERO_CONTENT } from "@/data/data";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <>
      <div className="border-b ☐ border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
              <h1 className="pb-16 text-6xl tracking-tight font-thin lg:mt-16 lg:text-8xl">
                Akshay Dabhade
              </h1>
              <span className="text-4xl tracking-tight">Jr.Full Stack Developer</span>
              <p className="my-2 max-w-xl py-6 font-light tracking-lighter">
                {HERO_CONTENT}
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:p-8">
              <div className="flex justify-center">
                <Image
                  src="/img/AkkiD7Profile.jpg"
                 width={400}
                  height={400}
                  alt="Picture of the author"
                  className="rounded-full"
                />
              </div>
            </div>
        </div>
      </div>
    </>
  );
}
