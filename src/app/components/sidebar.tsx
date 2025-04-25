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
    { href: "/", label: "Home", icon: HomeOutlined, color: "text-lime-500" },
    { href: "/about", label: "About Me", icon: UserDeleteOutlined, color: "text-blue-600" },
    { href: "/projects", label: "My Projects", icon: ShareAltOutlined, color: "text-yellow-400" },
    { href: "/skills", label: "My Stack", icon: BugOutlined, color: "text-sky-600" },
    { href: "/contact", label: "Contact Me", icon: CustomerServiceOutlined, color: "text-pink-500" },
    { href: "/blog", label: "My Blog", icon: BookOutlined, color: "text-amber-900" },
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
                  ? `bg-gray-200 translate-x-[10px] ${color} font-bold`
                  : "bg-white hover:bg-gray-100 text-neutral-700"
              }`}
            >
              <Link
                href={href}
                onClick={closeDrawer}
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
  );
}
