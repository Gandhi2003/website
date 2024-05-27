import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Connect with us
      </h1>
   
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
         
          src="/NextWebsite.png"
          logoSrc=""
          title="Help  Center "
          description="Get support"
        />
        <ProjectCard
            logoSrc=""
          src="/CardImage.png"
          title="Blog"
          description="Insights and news from the team"
        />
        <ProjectCard
            logoSrc=""
          src="/SpaceWebsite.png"
          title="Stay Connted"
          description="Follow @Uniswap on X for the latest updates"
        />
      </div>
    

      
    </div>
  );
};

export default Projects;
