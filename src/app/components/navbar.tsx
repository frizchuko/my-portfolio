'use client';

import { useState } from "react";
import { Drawer, Button } from "antd";
import { MenuOutlined, UserDeleteOutlined, 
  ShareAltOutlined, BugOutlined, 
  CustomerServiceOutlined, HomeOutlined, BookOutlined, FilePdfOutlined } from "@ant-design/icons";
  
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home", icon: HomeOutlined, color: "#32CD32" }, // Lime Green
    { href: "/about", label: "About", icon: UserDeleteOutlined, color: "#87CEEB" }, // Sky Blue
    { href: "/projects", label: "Projects", icon: ShareAltOutlined, color: "#FFD700" }, // Lemon Yellow
    { href: "/skills", label: "Skills", icon: BugOutlined, color: "#4682B4" }, // Steel Blue
    { href: "/contact", label: "Contact", icon: CustomerServiceOutlined, color: "#FF69B4" }, // Pink
    { href: "/blog", label: " Blog", icon: BookOutlined, color: "#262626" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 lg:px-14 !px-12 fixed top-0 w-full z-50">
        <div className=" mx-auto flex justify-between items-center ">
          <div className="hidden text-base lg:flex flex-row text-gray-700 ">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width="42" height="47"/>
          </Link>

          </div>

          <div className="md:hidden  text-base flex flex-row text-gray-700 ">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width="36" height="40"/>
          </Link>
          
          </div>
         
          {/* Show Drawer for Mobile */}
          <div className="lg:hidden md:hidden">
            <Button type="text" icon={<MenuOutlined />} onClick={() => setOpen(true)} />
          </div>
        </div>
      </nav>

      {/* Drawer for Mobile View */}
      <Drawer
  title={null}
  placement="right"
  onClose={() => setOpen(false)}
  open={open}
  width={280}
  closable={false}
  className="!p-0"
  bodyStyle={{ padding: 0 }}
>
  <div className="p-6 bg-white h-full shadow-md">
    <div className="flex flex-col space-y-8 mt-12">
      {links.map(({ href, label, icon: IconComponent, color }) => {
        const isActive = pathname === href;
        return (
          <div
            key={href}
            className={`my-4 mx-auto rounded-lg py-8 px-12 transition-all flex items-center space-x-3 ${
              isActive
                ? `bg-gray-200 translate-x-[10px] ${color} font-bold`
                : "bg-white hover:bg-gray-100 text-neutral-700"
            }`}
          >
            <Link
              href={href}
              onClick={() => setOpen(false)}
              className="flex items-center space-x-3 group"
            >
              <IconComponent
                className={`text-xl transform transition-all duration-300 group-hover:scale-110 group-hover:translate-x-1 ${
                  isActive ? color : "text-neutral-500 group-hover:text-black"
                }`}
              />
              <span
                className={`text-[1.1rem] font-semibold transition-colors duration-300 ${
                  isActive ? color : "text-neutral-700 group-hover:text-black"
                }`}
              >
                {label}
              </span>
            </Link>
          </div>
        );
      })}

      <hr className="text-neutral-700" />

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
</Drawer>

    </>
  );
}
