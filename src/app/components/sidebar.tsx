"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  UserDeleteOutlined,
  ShareAltOutlined,
  BugOutlined,
  CustomerServiceOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { IoBookOutline } from "react-icons/io5";

export default function Sidebar({ closeDrawer }: { closeDrawer?: () => void }) {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home", icon: HomeOutlined, color: "#32CD32" }, // Lime Green
    { href: "/about", label: "About Me", icon: UserDeleteOutlined, color: "#87CEEB" }, // Sky Blue
    { href: "/projects", label: "My Projects", icon: ShareAltOutlined, color: "#FFD700" }, // Lemon Yellow
    { href: "/skills", label: "My Tech Stack", icon: BugOutlined, color: "#4682B4" }, // Steel Blue
    { href: "/contact", label: "Contact Me", icon: CustomerServiceOutlined, color: "#FF69B4" }, // Pink
    { href: "/blog", label: "My Blog", icon: IoBookOutline, color: "#262626" },
  ];

  return (
    <div className="p-6 bg-white h-[1000px] w-[250px] shadow-md">
      <div className="flex flex-col space-y-8 mt-12">
        {links.map(({ href, label, icon: IconComponent, color }) => {
          const isActive = pathname === href;
          return (
            <div
              key={href}
              className={`my-4 mx-auto rounded-lg py-8 px-12 transition-all flex items-center space-x-3 ${
                isActive
                  ? "bg-gray-200 text-neutral-900 font-bold translate-x-[10px]"
                  : "bg-white hover:bg-gray-50 text-neutral-900 hover:text-gray-900 font-bold"
              }`}
            >
              <Link href={href} onClick={closeDrawer} className="flex items-center space-x-3" style={{ fontSize: "1.1rem", color: color }} >
                <IconComponent style={{ fontSize: "1.5rem", color: color }} />
                <span>{label}</span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
