"use client";

import { useState, useEffect } from "react";
import Portfolio from "./portfolio/page"; // Ensure this is correct
import Loading from "../loading/loading"; // Ensure this is the right path

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading completion after a delay
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {isLoading ? <Loading setIsLoading={setIsLoading} /> : <Portfolio />}
    </div>
  );
}

