"use client";
import { useState, useEffect } from "react";
import { Button, Layout } from "antd";
import { ArrowRightOutlined} from "@ant-design/icons";
import Loading from '@/loading/loading';
import { useRouter } from "next/navigation";


const { Content } = Layout; 
// const testimonials = [
//   {
//     quote: "Neo is an outstanding developer! His attention to detail is unmatched.",
//     name: "John Doe",
//     role: "CTO, TechCorp"
//   },
//   {
//     quote: "Working with Neo was a pleasure. He delivers top-quality code!",
//     name: "Jane Smith",
//     role: "CEO, StartupX"
//   },
//   {
//     quote: "Neo's expertise in frontend development is impressive.",
//     name: "Michael Lee",
//     role: "Lead Engineer, Web Solutions"
//   }
// ];

export default function Portfolio() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("hasLoaded");
  
    if (hasLoaded) {
      setIsLoading(false); // Skip the loader if already loaded
    } else {
      setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("hasLoaded", "true"); // Mark as loaded
      }, 3000); 
    }
  }, []);

  return (
    <Layout className="h-full">
      
      <Content className="w-full p-6">
        {isLoading ? (
          <Loading setIsLoading={setIsLoading} />
        ) : (
          <main className="bg-white text-gray-800 my-12">
            {/* Hero Section */}
            <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 bg-gray-50">
             
                <video 
                  className="absolute top-0 left-0 w-full h-full object-cover z-0" 
                   autoPlay 
                    loop 
                     muted
                    >
               <source src="/cmp.mp4" type="video/mp4" />
  
                </video>

  
               <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>

  
                    <div className="relative z-20 text-white">
                 <h1 className="text-4xl md:text-6xl font-bold">Hello, I am Femi Oriodofe</h1>
               <p className="text-lg md:text-xl mt-4">Building modern web experiences with Next.js & Tailwind CSS</p>
                {/* <Button type="primary" className="mt-6 bg-gray-900 hover:bg-gray-700 border-none">View My Work</Button> */}
                 </div>
              </section>


                       

           

     {/* Testimonials Section */}
     {/* <section className="text-center my-6 ">
              <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
              <div className="flex flex-col items-center space-y-6">
                {testimonials.slice(0, 3).map((testimonial, index) => (
                  <div key={index} className="p-6 bg-white shadow-md rounded-xl w-full max-w-lg">
                    <p className="italic">"{testimonial.quote}"</p>
                    <p className="font-bold mt-2">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                ))}
              </div>
              <Button className="mt-4" href="/testimonials">View All Testimonials</Button>
            </section> */}

            {/* Skills Section */}
            {/* <section className="py-16 bg-gray-50">
              <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-semibold text-gray-800">Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                  {["Next.js", "Tailwind CSS", "TypeScript", "Ant Design"].map((skill, index) => (
                    <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-sm">{skill}</div>
                  ))}
                </div>
              </div>
            </section> */}

            {/* Contact Section */}
            <section className="py-16 ">
              <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-xl font-semibold text-gray-800">Some things to know about me</h2>
               
                <div className="flex justify-center gap-4 mt-6">
                  <Button icon={<ArrowRightOutlined />} shape="circle"  onClick={() => router.push("/about")}/>
                  {/* <Button icon={<LinkedinOutlined />} shape="circle" />
                  <Button icon={<MailOutlined />} shape="circle" /> */}
                </div>
              </div>
            </section>
          </main>
        )}
      </Content>
    </Layout>
  );
}
