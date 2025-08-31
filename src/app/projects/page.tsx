import React from "react";
import ProjectsSection from "./_components/ProjectsSection";
import ContactCanvas from "@/components/homePageComponents/ContactCanvas";

const ProjectsPage: React.FC = () => {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <ContactCanvas />
      <ProjectsSection />
    </main>
  );
};

export default ProjectsPage;
