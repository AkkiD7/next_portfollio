import Link from "next/link";
import { CONTACT } from "@/data/data";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Get in Touch
      </motion.h1>

      <div className="flex flex-wrap lg:justify-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/4 p-4  flex flex-col justify-center "
        >
          <h6 className="mb-2 font-semibold lg:text-left ">
            Contact Information
          </h6>
          <Link href={`https://maps.google.com/?q=${CONTACT.address}`} passHref>
            <p className="my-2 cursor-pointer hover:underline">
              {CONTACT.address}
            </p>
          </Link>

          <Link
            href={`tel:${CONTACT.phoneNo}`}
            className="my-2 cursor-pointer hover:underline"
          >
            {CONTACT.phoneNo}
          </Link>

          <Link
            href={`mailto:${CONTACT.email}`}
            className="my-2 cursor-pointer hover:underline"
          >
            {CONTACT.email}
          </Link>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full max-w-xl lg:w-3/4 p-4"
        >
          <h6 className="mb-4 font-semibold">Send Me a Message</h6>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-neutral-400 bg-transparent text-white placeholder-neutral-400 p-2"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-neutral-400 bg-transparent text-white placeholder-neutral-400 p-2"
              required
            />
            <input
              type="tel"
              placeholder="Your Phone Number"
              className="border border-neutral-400 bg-transparent text-white placeholder-neutral-400 p-2"
              required
            />
            <textarea
              placeholder="Your Message"
              className="border border-neutral-400 bg-transparent text-white placeholder-neutral-400 p-2"
              rows="5"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-neutral-900 text-purple-700 p-2 hover:bg-neutral-700 transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
