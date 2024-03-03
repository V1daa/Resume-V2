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
            src="/board.jpg"
            title="Boardy"
            description="Perfect app for big companies and groups of sudents. Plan you'r buissnes strategy, apointments, prepare for exams with you'r group in real time and more. Created with support of convex database and clerk authentification"
          />
          <Link href="https://notion-henna-mu.vercel.app" target="_blank" className="cursor-pointer z-[80]">
          <ProjectCard
            src="/notion.jpg"
            title="Notion with multicursor"
            description="Full-stack notion copy with multicursor. Perfect orginizer for group projects or for big groups of students. Product is ready for deploy and commercial usage. Saas web-page with backend authentication. Perfect for collaborations "
          />
          </Link>
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
