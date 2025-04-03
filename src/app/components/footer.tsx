'use client';
import Float from "./floatbutton";
import Image from "next/image";
import Link from "next/link";
import MailingUnit from "./mailingunit";
export default function Footer() {
    return (
      <footer className="bg-black text-white py-4 mt-auto">
  <div className="px-6 md:px-12">
    
    {/* Top Section: Logo, Links, and Email Input */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
      
      {/* Logo (Always at the Top Left on Large Screens) */}
      <div className="flex justify-center md:justify-start mb-4 md:mb-0">
        <Image src="/logo.png" alt="logo" width={86} height={76} />
      </div>

      {/* Links & Email Input: Column on Small Screens, Row on Large */}
      <div className="flex flex-col w-full md:w-4/6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full">
          
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center md:justify-start space-x-6 mb-4 md:mb-0">
            <Link href="/about" className="text-green-300 hover:text-green-600">about</Link>
            <Link href="/projects" className="text-blue-500 hover:text-blue-800">projects</Link>
            <Link href="/skills" className="text-yellow-300 hover:text-yellow-600">stack</Link>
            <Link href="/contact" className="text-pink-400 hover:text-pink-600">contact</Link>
            <Link href="/blog" className="text-gray-50 hover:text-gray-400">blog</Link>

          </div>

          {/* Mailing Unit (Email Input) */}
          <div className="w-full md:w-1/3 max-w-md">
            <MailingUnit />
          </div>

        </div>

        {/* Horizontal Rule */}
        <hr className="my-4 border-gray-50" />

        {/* Copyright Section */}
        <div className="text-center mt-2 text-blue-300">
          <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
          <a href="https://storyset.com/people" className="text-muted text-black">People illustrations by Storyset</a>
        </div>
      </div>
    </div>
  </div>

  {/* Floating Component (Always at Bottom Right) */}
  <div className="flex justify-end mt-4">
    <Float />
  </div>
</footer>



    );
  }
  