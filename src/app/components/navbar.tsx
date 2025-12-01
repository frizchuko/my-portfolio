'use client';

import { useState } from "react";
import { Drawer, Button } from "antd";
import {
  MenuOutlined,
  UserDeleteOutlined,
  ShareAltOutlined,
  BugOutlined,
  CustomerServiceOutlined,
  HomeOutlined,
  BookOutlined,
  FilePdfOutlined,
} from "@ant-design/icons";

import { usePathname } from "next/navigation";
import Link from "next/link";

import Logo from "./logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home", icon: HomeOutlined },
    { href: "/about", label: "About", icon: UserDeleteOutlined },
    { href: "/projects", label: "Projects", icon: ShareAltOutlined },
    { href: "/skills", label: "Skills", icon: BugOutlined },
    { href: "/contact", label: "Contact", icon: CustomerServiceOutlined },
    { href: "/blog", label: "Blog", icon: BookOutlined },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-white py-4 px-4 sm:px-6 lg:px-14 fixed top-0 w-full z-50 shadow-sm">
        <div className="flex justify-between items-center mx-auto">
          
          {/* Logo */}
          <Link href="/" className="block">
            <Logo
              mode="light"
              className="h-10 w-auto sm:h-12 transition-all"
            />
          </Link>

          {/* Mobile Menu Button */}
          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={() => setOpen(true)}
            className="md:hidden text-xl"
            aria-label="Open Menu"
          />
        </div>
      </nav>

      {/* DRAWER */}
      <Drawer
        title={null}
        placement="right"
        open={open}
        onClose={() => setOpen(false)}
        width={280}
        closable
        className="!p-0"
        bodyStyle={{ padding: 0 }}
      >
        <div className="p-6 bg-white h-full">
          <div className="flex flex-col mt-10 space-y-6">

            {links.map(({ href, label, icon: Icon }) => {
              const isActive = pathname === href;

              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center space-x-4 px-6 py-4 rounded-lg transition-all group ${
                    isActive
                      ? "bg-gray-100 translate-x-[6px] text-blue-600 font-semibold"
                      : "hover:bg-gray-50 text-blue-500"
                  }`}
                >
                  <Icon
                    className={`text-xl transition-all duration-300 group-hover:scale-110 ${
                      isActive ? "text-blue-600" : "text-blue-400 group-hover:text-blue-500"
                    }`}
                  />
                  <span className="text-lg">{label}</span>
                </Link>
              );
            })}

            <hr className="my-6" />

            {/* Resume Link */}
            <a
              href="https://docs.google.com/document/d/1pL0If1qbO5LQpJ5oHNGZQEjOMn_jQa0jsB3EfFS1r1Q/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 px-6 py-3 text-lg font-semibold rounded-lg hover:bg-gray-200 text-center transition"
            >
              <FilePdfOutlined className="mr-2" />
              View My Resume
            </a>
          </div>
        </div>
      </Drawer>
    </>
  );
}
