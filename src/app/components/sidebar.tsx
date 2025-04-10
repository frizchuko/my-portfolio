"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  UserDeleteOutlined,
  ShareAltOutlined,
  BugOutlined,
  CustomerServiceOutlined,
  HomeOutlined,
  BookOutlined,
  FilePdfOutlined,
} from "@ant-design/icons";


export default function Sidebar({ closeDrawer }: { closeDrawer?: () => void }) {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home", icon: HomeOutlined, color: "#32CD32" }, 
    { href: "/about", label: "About Me", icon: UserDeleteOutlined, color: "#0000FF" }, 
    { href: "/projects", label: "My Projects", icon: ShareAltOutlined, color: "#FFD700" }, 
    { href: "/skills", label: "My Stack", icon: BugOutlined, color: "#4682B4" }, 
    { href: "/contact", label: "Contact Me", icon: CustomerServiceOutlined, color: "#FF69B4" }, 
    { href: "/blog", label: "My Blog", icon: BookOutlined, color: "#5C4033" },
  ];

  return (
    <div className="p-6 bg-white h-[1000px] w-[280px] shadow-md">
      <div className="flex flex-col space-y-8 mt-12">
        {links.map(({ href, label, icon: IconComponent, color }) => {
          const isActive = pathname === href;
          return (
            <div
              key={href}
              className={`my-4 mx-auto rounded-lg py-8 px-12 transition-all flex items-center space-x-3 ${
                isActive
                  ? "bg-gray-200 text-neutral-900 font-bold translate-x-[10px]"
                  : "bg-white hover:bg-gray-100 text-neutral-900 hover:text-gray-900 font-bold"
              }`}
            >
              <Link href={href} onClick={closeDrawer} className="flex items-center space-x-3" style={{ fontSize: "1.1rem", color: color }} >
                <IconComponent style={{ fontSize: "1.5rem", color: color }} />
                <span>{label}</span>
              </Link>
            </div>
          );
        })}
        <hr className="text-neutral-700"/>

         <div className="mt-12 mx-auto">
         <a
            href="YOUR_GOOGLE_DOCS_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-nowrap text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-300 transition"
          >
           <FilePdfOutlined /> View My Resume
          </a>
         </div>
          
      </div>
    </div>
  );
}
