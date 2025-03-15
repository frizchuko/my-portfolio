"use client";
import Link from "next/link";
import {UserDeleteOutlined,ShareAltOutlined, BugOutlined, CustomerServiceOutlined, HomeOutlined } from '@ant-design/icons';


export default function Sidebar({ closeDrawer }: { closeDrawer?: () => void }) {
  return (
    <div className="p-6 bg-white h-[800px] shadow-md">
      
      <div className="flex flex-col space-y-8 mt-8">
        <div className="my-4 mx-auto bg-white hover:bg-gray-50 rounded-lg py-8 px-10">
        <Link href="/" className="text-gray-600 hover:text-gray-900" onClick={closeDrawer}>
      <HomeOutlined className="mx-2"/>
      Home
      </Link>
        </div>
      

        <div className="my-4 mx-auto bg-white hover:bg-gray-50 rounded-lg py-8 px-10">
        <Link href="/about" onClick={closeDrawer} className="text-gray-600 hover:text-gray-900"><UserDeleteOutlined className="mx-2"/>About</Link>
        </div>

      
         <div className="my-2 mx-auto bg-white hover:bg-gray-50 rounded-lg py-8 px-10">
         <Link href="/live_projects" onClick={closeDrawer} className="text-gray-600 hover:text-gray-900"><ShareAltOutlined className="mx-2"/>Projects</Link>
         </div>

      
           <div className="my-2 mx-auto bg-white hover:bg-gray-50 rounded-lg py-8 px-10">
           <Link href="/side_projects" onClick={closeDrawer} className="text-gray-600 hover:text-gray-900"><BugOutlined className="mx-2"/>Skills</Link>
          </div>
      
          <div className="my-2 mx-auto bg-white hover:bg-gray-50 rounded-lg py-8 px-10">
          <Link href="/contact" onClick={closeDrawer} className="text-gray-600 hover:text-gray-900"><CustomerServiceOutlined className="mx-2"/>Contact</Link>
          </div>
    
      </div>
    </div>
  );
}
