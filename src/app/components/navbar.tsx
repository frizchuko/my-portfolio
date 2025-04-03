'use client';

import { useState } from "react";
import { Drawer, Button } from "antd";
import { MenuOutlined, UserDeleteOutlined, 
  ShareAltOutlined, BugOutlined, 
  CustomerServiceOutlined, HomeOutlined, BookOutlined } from "@ant-design/icons";
  
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
      {/* Navbar (Fixed on Top) */}
      <nav className="bg-white shadow-md py-4 px-6 fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-base flex flex-row text-gray-700">
            <Image src="/logo.png" alt="logo" width="40" height="36"/>
          </Link>
          {/* Show Drawer for Mobile */}
          <div className="lg:hidden md:hidden">
            <Button type="text" icon={<MenuOutlined />} onClick={() => setOpen(true)} />
          </div>
        </div>
      </nav>

      {/* Drawer for Mobile View */}
      <Drawer title="Menu" placement="right" onClose={() => setOpen(false)} open={open} width={200} className="overflow-x-hidden">
        {links.map(({ href, label, icon: IconComponent, color }) => {
          const isActive = pathname === href;
          return (
            <div
              key={href}
              className={`my-4 mx-auto rounded-lg py-8 px-10 transition-all ${isActive ? "bg-gray-200 !text-neutral-900 font-bold" : "bg-white hover:bg-gray-100 !text-neutral-900 hover:text-gray-900 font-bold"}`}
            >
              <Link href={href} className="flex items-center text-neutral-700 hover:text-neutral-900" style={{ fontSize: "1.1rem", color: "#262626" }}>
                <IconComponent style={{ fontSize: "1.5rem", color: color }} />
                <span className="mx-2">{label}</span>
              </Link>
            </div>
          );
        })}
      </Drawer>
    </>
  );
}
