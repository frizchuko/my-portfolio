"use client";
import React from "react";
import { Layout, Card} from "antd";
import {FilePdfOutlined, ShareAltOutlined} from "@ant-design/icons"

const { Content } = Layout;

const AboutSection = () => {
  return (
    <Layout className=" h-full  overflow-y-scroll">
      <Content className="w-full p-4">
        <section className="flex flex-col md:flex-row items-center justify-between md:px-16 py-12 bg-white text-gray-800 mt-6 gap-x-8">
          {/* Left Side - Text Content */}
          <div className="w-full p-4 md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-2xl md:text-3xl mb-4 my-6 font-lusitana">
              I love crafting clean and efficient solutions, bringing ideas to
              life through code.
            </p>
            <div className="my-8">
              <p className="text-base md:text-lg my-8 text-pretty font-lusitana">
              Hey there!I am a passionate frontend developer specializing in building intuitive
                and responsive web applications. I am also a Technical Support Specialist and Customer Support Representative
              with over three years of experience helping users 
              and solving tech challenges. 
                 Problem-solving, clear communication, and creating great user experiences are what I do best.
                  Whether it is fixing an issue or building something new,
                   I am all about making things work smoothly for people.
              </p>
              
              <a
                href="/projects"
                className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-700 transition"
              >
               <ShareAltOutlined className="mx-2"/>  My Projects
              </a>
              
              
            </div>
          </div>

          {/* Right Side - Video Showcase */}
          <div className="w-full p-4 md:w-1/2  overflow-hidden ">
            <video
              className="w-full h-auto rounded-xl"
              src="/nightsky.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </section>
        <section>
          <div>
            {/*stats*/}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {[
                { index: 1, title: "3 years +", content: "Experience" },
                {
                  index: 2,
                  title: "Twenty Two",
                  content: "Projects and counting",
                },
                { index: 3, title: "500+", content: "Positive reviews" },
                { index: 4, title: "50+", content: "Retained clients" },
              ].map(
                (
                  { index, title, content } // Correct destructuring
                ) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="text-gray-600">{content}</p>{" "}
                    {/* Correct content usage */}
                  </Card>
                )
              )}
            </div>
          </div>
        </section>
        <section>
          <div className="flex justify-center ">
          <a
            href="YOUR_GOOGLE_DOCS_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-50 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
          >
           <FilePdfOutlined /> View My Resume
          </a>
          </div>
          
        </section>
      </Content>
    </Layout>
  );
};

export default AboutSection;
