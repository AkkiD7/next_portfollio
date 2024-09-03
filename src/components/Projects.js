import React from "react";
import { PROJECTS } from "@/data/data";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="border-b ☐ border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <Image
                src={project.image}
                width={400}
                height={400}
                alt={project.title}
              />
            </div>
            <div className="w-full max-w-xl_lg:w-3/4">
              <h6>{project.title}</h6>
              <p>{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded ☐ bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
