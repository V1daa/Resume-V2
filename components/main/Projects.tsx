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
          <Link
            href="https://board-eight-blush.vercel.app"
            target="_blank"
            className="cursor-pointer z-[80]"
          >
            <ProjectCard
              src="/board.jpg"
              title="Boardy"
              description="Perfect app for big companies and groups of sudents. Created with use of clerk authentification and convex real-time easy and fast database. Zustand was used to manage states. And liveblocks to power everything up. "
            />
          </Link>
          <Link
            href="https://frontend-eta-tawny.vercel.app/"
            target="_blank"
            className="cursor-pointer z-[80]"
          >
            <ProjectCard
              src="/ecom.jpg"
              title="Ecommerce"
              description="Ecommerce website build by using the MERN stack. To use an admin page go to https://vercel.com/dmytros-projects-e17888e6/admin .Fully responsive and fully working web store with self made user authentication using jwt tokens"
            />
          </Link>
          <Link
            href="https://all-in-one-five.vercel.app"
            target="_blank"
            className="cursor-pointer z-[80]"
          >
            <ProjectCard
              src="/AllInOne.jpg"
              title="All In One App"
              description="In this app you can find everything you need on daily basis and even more. App is in non-stop progression to fill all human needs in one place. Build with react and just raw algoritms, open weather map was used to create the web app. "
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
