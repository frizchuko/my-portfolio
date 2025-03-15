"use client";

import Navbar from "../app/components/navbar";
import Footer from "../app/components/footer";
import Sidebar from "../app/components/sidebar"; 

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar (Always on Top) */}
      <Navbar />

      {/* Main Layout: Sidebar + Content */}
      <div className="flex flex-grow">
        {/* Sidebar for Large Screens */}
        <div className="hidden md:block md:w-64">
          <Sidebar />
        </div>

        {/* Main Content */}
        <main className="flex-grow p-6">{children}</main>
      </div>

      {/* Footer (Spans Full Width) */}
      <Footer />
    </div>
  );
}
