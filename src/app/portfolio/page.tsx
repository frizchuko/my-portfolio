"use client";
import { useState, useEffect } from "react";
import { Button, Card, Layout } from "antd";
import { GithubOutlined, LinkedinOutlined, MailOutlined } from "@ant-design/icons";
import Loading from '@/loading/loading';

const { Content } = Layout; // Use Ant Design's Layout system

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      console.log('Loading completed, showing home page');
    }
  }, [isLoading]);

  return (
    <Layout className="h-[800px] overflow-y-scroll">
      {/* Main Content */}
      <Content className="w-full p-6">
        {isLoading ? (
          <Loading setIsLoading={setIsLoading} />
        ) : (
          <main className="bg-white text-gray-800">
            {/* Hero Section */}
            <section className="h-screen flex flex-col items-center justify-center text-center px-6">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900">Hello, I'm Femi Oriodofe</h1>
              <p className="text-lg md:text-xl text-gray-600 mt-4">Building modern web experiences with Next.js & Tailwind CSS</p>
              <Button type="primary" className="mt-6 bg-gray-900 hover:bg-gray-700 border-none">View My Work</Button>
            </section>

            {/* Projects Section */}
            <section className="py-16 bg-gray-50">
              <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-semibold text-gray-800">Projects</h2>
                <p className="text-gray-600 mt-2">Some of my recent work</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                  {["Project One", "Project Two", "Project Three"].map((title, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-semibold">{title}</h3>
                      <p className="text-gray-600">Brief description of the project.</p>
                      <Button type="link" className="mt-2 text-gray-900">View Project</Button>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section className="py-16 bg-white">
              <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-semibold text-gray-800">Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                  {["Next.js", "Tailwind CSS", "TypeScript", "Ant Design"].map((skill, index) => (
                    <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-sm">{skill}</div>
                  ))}
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 bg-gray-50">
              <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-semibold text-gray-800">Get in Touch</h2>
                <p className="text-gray-600 mt-2">Let's build something great together.</p>
                <div className="flex justify-center gap-4 mt-6">
                  <Button icon={<GithubOutlined />} shape="circle" />
                  <Button icon={<LinkedinOutlined />} shape="circle" />
                  <Button icon={<MailOutlined />} shape="circle" />
                </div>
              </div>
            </section>
          </main>
        )}
      </Content>
    </Layout>
  );
}
