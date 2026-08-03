"use client";

import { useEffect, useState } from "react";
// import { Spin } from "antd";
import { usePathname } from "next/navigation";

export default function GlobalRouteLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Trigger small loader whenever route changes
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timeout);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed mx-auto my-auto z-[9999]  p-3 rounded-full">
      {/* <Spin size="large" /> */}
    </div>
  );
}
