import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Technologies from "@/components/Technologies";
import Experiences from "@/components/Experiences";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
      <Navbar />
      <div className="container mx-auto px-8 ">
        <Hero />
        <About />
        <Technologies />
        <Experiences />
        {/* <Projects/> */}
      </div>
    </>
  );
}
