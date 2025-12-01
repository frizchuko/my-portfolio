"use client";

import { useEffect, useState } from "react";
import { Spin } from "antd";
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
    <div className="fixed top-[50%] right-[50%] z-[9999] bg-white  p-3 rounded-full">
      <Spin size="small" />
    </div>
  );
}
