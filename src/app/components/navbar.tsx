"use client";
import { useState } from "react";
import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Sidebar from "./sidebar";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Navbar (Fixed on Top) */}
      <nav className="bg-white shadow-md py-4 px-6 fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Hi
          </Link>
          {/* Show Drawer for Mobile */}
          <div className="lg:hidden md:hidden">
          <Button type="text" icon={<MenuOutlined />} onClick={() => setOpen(true)} className="md:hidden " />
          </div>
         
        </div>
      </nav>

      {/* Drawer for Mobile View */}
      <Drawer title="Menu" placement="right" onClose={() => setOpen(false)} open={open} width={250}>
        <Sidebar closeDrawer={() => setOpen(false)} />
      </Drawer>
    </>
  );
}
