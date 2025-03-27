"use client";
import { useState } from "react";
import { Layout, Button } from "antd";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "ModeOne Group",
    video: "/modeone.m4v",
    description: " Developed using HTML5, CSS3, Bootstrap, JavaScript, and jQuery, ensuring a responsive and visually appealing design. The site features a modern layout with smooth animations, interactive elements, and optimized performance for an intuitive user experience. Leveraging Bootstrap’s grid system. The site is structured with clean, maintainable code, enhancing both functionality and scalability."
  },
  {
    id: 2,
    title: "Qol Labs",
    video: "/nightsky.mp4",
    description: "A brief description of Project Two."
  },
  {
    id: 3,
    title: "Zuojoff",
    video: "/nightsky.mp4",
    description: "A brief description of Qol."
  },
  {
    id: 4,
    title: "Zuojoff",
    video: "/modeone.m4v",
    description: "A brief description of Zuojoff."
  },
  {
    id: 5,
    title: "Project Five",
    video: "/nightsky.mp4",
    description: "A brief description of Project Five."
  },
  {
    id: 6,
    title: "Project Six",
    video: "/modeone.m4v",
    description: "A brief description of Project Six."
  },
  {
    id: 7,
    title: "Project Seven",
    video: "/nightsky.mp4",
    description: "A brief description of Project Seven."
  },
  {
    id: 8,
    title: "Project Eight",
    video: "/modeone.m4v",
    description: "A brief description of Project Eight."
  }
];

const { Content } = Layout;

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 3;

  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const visibleProjects = projects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 0));

  return (
    <Layout className="h-full overflow-y-scroll">
      <Content className="w-full p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12 p-6 max-w-6xl mx-auto mt-6 py-12 md:px-16">
          {/* Left Column */}
          <div className="col-span-1 space-y-4 h-full overflow-y-hidden">
            <motion.div
              key={currentPage} // Triggers re-animation
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {visibleProjects.map((project) => (
                <div key={project.id} className="cursor-pointer" onClick={() => setSelectedProject(project)}>
                 
                       <video 
                         src={project.video} 
                         className="w-full h-full object-cover rounded-lg" 
                         muted 
                         />
                      

                  <p className="mt-2 text-sm text-center">{project.title}</p>
                </div>
              ))}
            </motion.div>

            {/* Pagination Buttons */}
            <div className="flex justify-between mt-4">
              {currentPage > 0 && (
                <Button onClick={prevPage} className="bg-gray-800 text-white px-4 py-2 rounded-md">
                  Back
                </Button>
              )}
              {currentPage < totalPages - 1 && (
                <Button onClick={nextPage} className="bg-gray-800 text-white px-4 py-2 rounded-md">
                  Next
                </Button>
              )}
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-2 flex flex-col items-center my-14">
            <video src={selectedProject.video} className="w-full h-96 object-cover rounded-md" controls autoPlay />
            <p className="mt-4 text-lg font-semibold">{selectedProject.title}</p>
            <p className="text-gray-600">{selectedProject.description}</p>
          </div>
        </div>
      </Content>
    </Layout>
  );
}
