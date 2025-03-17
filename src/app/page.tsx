"use client";

import { useState, useEffect } from "react";
import Portfolio from "./portfolio/page"; 
import Loading from "../loading/loading"; 

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000); 

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {isLoading ? <Loading setIsLoading={setIsLoading} /> : <Portfolio />}
    </div>
  );
}

