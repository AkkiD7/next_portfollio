import { ABOUT_TEXT } from "@/data/data";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <>
      <div className="pb-4">
        <h1 className="my-20 text-center text-4xl">About Me</h1>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <Image
              src="/img/about.jpg"
              width={500}
              height={500}
              alt="about"
              className="rounded-2xl"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-center">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>
        </div>
      </div>
    </>
  );
}
