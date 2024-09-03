import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

export default function Technologies() {
  return (
    <>
      <div className=" pb-24">
        <h1 className="my-20 text-center text-4xl">Technologies</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="rounded-2xl border-4 ☐ border-neutral-500 p-4">
            <IoLogoJavascript className="text-7xl text-yellow-400" />
          </div>
          <div className="rounded-2xl border-4 ☐ border-neutral-500 p-4">
            <FaNodeJs className="text-7xl text-green-400" />
          </div>
          <div className="rounded-2xl border-4 ☐ border-neutral-500 p-4">
            <SiExpress className="text-7xl text-black" />
          </div>
          <div className="rounded-2xl border-4 ☐ border-neutral-500 p-4">
            <FaReact className="text-7xl text-cyan-400" />
          </div>
          <div className="rounded-2xl border-4 ☐ border-neutral-500 p-4">
            <SiMongodb className="text-7xl text-green-400" />
          </div>
        </div>
      </div>
    </>
  );
}
