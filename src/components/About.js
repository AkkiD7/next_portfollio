import { ABOUT_TEXT } from "@/data/data";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <div className="border-b ☐ border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">About Me</h1>

        <div className="flex flex-wrap">
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 lg:p-8"
          >
            <div className="flex items-center justify-center">
              <Image
                src="/img/about.jpg"
                width={500}
                height={500}
                alt="about"
                className="rounded-2xl"
              />
            </div>
          </motion.div>
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 100, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex justify-center lg:justify-center">
              <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
