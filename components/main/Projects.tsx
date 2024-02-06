import React from "react";
import ProjectCard from "../sub/ProjectCard";
import Link from "next/link";

const Projects = () => {
  return (
    <section id="projects">
      <div className="flex flex-col items-center justify-center py-20">
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          My projects
        </h1>
        <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
          <ProjectCard
            src="/NextWebsite.png"
            title="Modern Next.js Portfolio"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quo consectetur reiciendis nobis amet sit, reprehenderit exercitationem animi, quos nisi rerum corporis porro accusamus nesciunt, ab dolor voluptates sunt magnam!"
          />
          <ProjectCard
            src="/CardImage.png"
            title="Modern Next.js Portfolio"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quo consectetur reiciendis nobis amet sit, reprehenderit exercitationem animi, quos nisi rerum corporis porro accusamus nesciunt, ab dolor voluptates sunt magnam!"
          />
          <Link href="https://all-in-one-five.vercel.app" target="_blank" className="cursor-pointer z-[80]">
            <ProjectCard
              src="/AllInOne.jpg"
              title="All In One App"
              description="In this app you can find everything you need on daily basis and even more. App is in non-stop progression to fill all human needs in one place. Currently web-page is in early beta stage I'll deploy more tools for every human needs!"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
