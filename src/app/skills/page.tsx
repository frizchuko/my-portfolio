"use client";

import { motion } from "framer-motion";
import {
  CodeOutlined,
  ApiOutlined,
  ToolOutlined,
  GithubOutlined,
  CloudServerOutlined,
  Html5Outlined,
  JavaScriptOutlined,
  CodeSandboxOutlined,
  AntDesignOutlined,
} from "@ant-design/icons";

const skills = [
  { name: "HTML5", icon: Html5Outlined, level: "Advanced", color: "#000000"},
  { name: "Next.js", icon: CodeOutlined, level: "Advanced", color: "#32CD32" }, // Lime Green
  { name: "React.js", icon: CodeOutlined, level: "Advanced", color: "#87CEEB" }, // Sky Blue
  { name: "TypeScript", icon: ApiOutlined, level: "Intermediate", color: "#FFA500" }, // Orange
  { name: "Tailwind CSS", icon: ToolOutlined, level: "Advanced", color: "#FF69B4" }, // Pink
  { name: "JavaScript", icon: JavaScriptOutlined , level: "Advanced", color: "#FFD700" }, // Lemon Yellow
  { name: "Ant Design", icon: AntDesignOutlined, level: "Advanced", color: "#FF69B4"},
  { name: "Bootstrap", icon: CodeSandboxOutlined, level: "Advanced", color: "#87CEEB"},
  { name: "Git & GitHub", icon: GithubOutlined, level: "Intermediate", color: "#800080" }, // Deep Purple
  { name: "Vercel", icon: CloudServerOutlined, level: "Intermediate", color: "#4682B4" }, // Steel Blue
];

export default function Skills() {
  return (
    <section className="min-h-screen bg-white text-gray-800 px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">My Tech Stack & Expertise</h2>
        <p className="text-lg text-gray-600 mb-10">
          These are the tools and technologies I use to build seamless digital experiences.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <motion.div
              key={index}
              className="bg-gray-100 p-6 rounded-xl shadow-md flex flex-col items-center justify-center space-y-3"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              
              <IconComponent style={{ fontSize: "2rem", color: skill.color }} />
              <h3 className="text-lg font-semibold">{skill.name}</h3>
              <p className="text-sm text-gray-500">{skill.level}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
