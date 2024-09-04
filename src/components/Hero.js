import { HERO_CONTENT } from "@/data/data";
import Image from "next/image";
import React from "react";
import {motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

export default function Hero() {
  return (
    <>
      <div className=" pb-4 lg:mb-35">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
              <motion.h1
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className="pb-16 text-6xl tracking-tight font-thin lg:mt-16 lg:text-8xl"
              >
                Akshay Dabhade
              </motion.h1>
              <motion.span
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="text-4xl tracking-tight"
              >
                Jr.Full Stack Developer
              </motion.span>
              <motion.p
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="my-2 max-w-xl py-6 font-light tracking-lighter"
              >
                {HERO_CONTENT}
              </motion.p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:p-8">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex justify-center"
            >
              <Image
                src="/img/AkkiD7Profile.jpg"
                width={400}
                height={400}
                alt="Picture of the author"
                className="rounded-full"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
