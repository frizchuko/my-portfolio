import {  Button } from "antd";

interface ProjectProps {
  title: string;
  description: string;
  videoUrl: string;
}

export default function ProjectCard({ title, description, videoUrl }: ProjectProps) {
  return (
    <div className="hover:shadow-lg transition-shadow bg-transparent">
      <video className="w-full rounded-lg" controls>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <Button type="link" className="mt-2 text-gray-900">View Project</Button>
    </div>
  );
}
