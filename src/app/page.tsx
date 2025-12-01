"use client";

import { useState, useEffect } from "react";
import Portfolio from "./portfolio/page"; 
import Loading from "../loading/loading"; 

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (hasVisited) {
      setIsLoading(false);
      return;
    }

    const timeout = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("hasVisited", "true");
    }, 3000); 

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {isLoading ? <Loading setIsLoading={setIsLoading} /> : <Portfolio />}
    </div>
  );
}

