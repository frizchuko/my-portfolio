"use client";
import { useState } from "react";
import { Layout, Button } from "antd";
import { motion } from "framer-motion";
import LazyVideo from "../components/lazyvideo";
import { BugOutlined } from "@ant-design/icons";

const projects = [
  {
    id: 1,
    title: "ModeOne Group",
    video: "/cmp.mp4",
    description: "Developed using HTML5, CSS3, Bootstrap, JavaScript, and jQuery, ensuring a responsive and visually appealing design. The site features a modern layout with smooth animations, interactive elements, and optimized performance for an intuitive user experience. Leveraging Bootstrap's grid system. The site is structured with clean, maintainable code, enhancing both functionality and scalability.",
    poster: "/lazyload.jpg"
  },
  {
    id: 2,
    title: "Qol Labs",
    video: "/cmp.mp4",
    description: "I developed qollabs.com using React.js and Tailwind CSS, focusing on a clean, modern UI and a responsive layout optimized for performance across devices. The site highlights Qollabs’ innovation-driven services with smooth user interactions, scalable components, and well-structured content. I prioritized speed, accessibility, and a developer-friendly codebase to ensure long-term maintainability.",
    poster: "/lazyload.jpg"
  },
  {
    id: 3,
    title: "Zuojoff",
    video: "/zuojoff.mp4",
    description: "I developed zuojoffservices.com for Zuojoff Nigeria Limited, creating a sleek, responsive business website that effectively showcases the services offered by the company. The site was built using HTML, CSS, JavaScript, jQuery, and Bootstrap, ensuring a clean, mobile-friendly user interface with smooth interactions. I focused on performance optimization, intuitive navigation, and brand consistency, while also applying best practices in SEO and accessibility to enhance user engagement.    .",
    poster: "/lazyload.jpg"
  },
  {
    id: 4,
    title: "Madiba",
    video: "/cmp.mp4",
    description: "Madiba hotel website.",
    poster: "/lazyload.jpg"
  },
  {
    id: 5,
    title: "NeedFocus",
    video: "/nightsky.mp4",
    description: "NeedFocus...",
    poster: "/lazyload.jpg"
  },
  {
    id: 6,
    title: "Lewx Exchange",
    video: "/cmp.mp4",
    description: "Lewx Exchange.",
    poster: "/lazyload.jpg"
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
          <div className="col-span-1 space-y-4 h-full overflow-y-hidden mx-auto">
            <motion.div
              key={currentPage} // Triggers re-animation
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {visibleProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <video 
                    src={project.video} 
                    className="w-full h-full object-cover rounded-lg" 
                    muted 
                  />
                  <p className="mt-2 text-sm text-center">{project.title}</p>
                </motion.div>
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
          <LazyVideo key={selectedProject.id} src={selectedProject.video} poster={selectedProject.poster} autoPlay />
            <p className="mt-4 text-lg font-semibold">{selectedProject.title}</p>
            <p className="text-gray-600">{selectedProject.description}</p>
          </div>

          
        </div>

        <div className="flex justify-center mt-6">
          <a
                href="/skills"
                className="inline-block text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
              >
              <BugOutlined className="mx-2"/> Here are some of the languages and tools I used to create this
              </a>
          </div>
      </Content>
    </Layout>
  );
}
