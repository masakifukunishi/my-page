"use client";

import { useState } from "react";
import Project from "./Project";
import { projects } from "./projects";

type DescriptionLanguage = "ja" | "en";

const Projects = () => {
  const [descriptionLanguage, setDescriptionLanguage] = useState<DescriptionLanguage>("ja");

  return (
    <div className="mt-10">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h2 id="projects" className="text-2xl font-semibold">
          Projects
        </h2>
        <div className="flex items-center gap-2 text-sm" aria-label="Project description language">
          <button
            type="button"
            className={`${descriptionLanguage === "ja" ? "text-white underline underline-offset-4" : "text-gray-400 hover:text-white"}`}
            aria-pressed={descriptionLanguage === "ja"}
            onClick={() => setDescriptionLanguage("ja")}
          >
            日本語
          </button>
          <span className="text-gray-500">/</span>
          <button
            type="button"
            className={`${descriptionLanguage === "en" ? "text-white underline underline-offset-4" : "text-gray-400 hover:text-white"}`}
            aria-pressed={descriptionLanguage === "en"}
            onClick={() => setDescriptionLanguage("en")}
          >
            English
          </button>
        </div>
      </div>
      {projects.map((project) => (
        <Project
          key={project.appName}
          appName={project.appName}
          imagePath={project.imagePath}
          description={project.description[descriptionLanguage]}
          links={project.links}
        />
      ))}
    </div>
  );
};

export default Projects;
