"use client";
import { useState, useEffect } from "react";
import { Button, Layout } from "antd";
import { ArrowRightOutlined} from "@ant-design/icons";
import Loading from '@/loading/loading';
import { useRouter } from "next/navigation";


const { Content } = Layout; 

export default function Portfolio() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("hasLoaded");
  
    if (hasLoaded) {
      setIsLoading(false); 
    } else {
      setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("hasLoaded", "true"); 
      }, 3000); 
    }
  }, []);

  return (
    <Layout className="h-full">
      
      <Content className="w-full lg:p-6 p-1 bg-white ">
        {isLoading ? (
          <Loading setIsLoading={setIsLoading} />
        ) : (
          <main className="bg-white text-gray-800 my-14 ">
            {/* Hero Section */}
            <section className="relative h-screen flex flex-col items-center justify-center text-center px-6  ">
             
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
               <p className="text-lg md:text-xl mt-4">I love building fast, accessible, and visually 
polished user interfaces</p>
                {/* <Button type="primary" className="mt-6 bg-gray-900 hover:bg-gray-700 border-none">View My Work</Button> */}
                 </div>
              </section>


                       

           

  

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
