'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface LoadingProps {
  setIsLoading: (value: boolean) => void;
}

export default function Loading({ setIsLoading }: LoadingProps) {
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logoRef.current) {
      const bars = logoRef.current.querySelectorAll('.logo-bar');
      gsap.from(bars, {
        opacity: 0,
        x: -100, // Bars start from the left
        stagger: 0.2, // Stagger the appearance of each bar
        duration: 1,
        delay: 1, 
        onComplete: () => {
          // Simulate loading completion after the logo is formed
          gsap.set(logoRef.current, { scale: 1 }); // Reset the scale to 1 before zooming in
          gsap.to(logoRef.current, {
            scale: 3, // Zoom in effect
            opacity: 0, // Fade out
            duration: 1, // Duration of the zoom effect
            onComplete: () => {
              setIsLoading(false); // End the loading animation after zooming
            },
          });
        },
      });
    }
  }, [setIsLoading]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      {/* Logo */}
      <div
        ref={logoRef}
        className="absolute flex items-center justify-center z-40 space-x-12"
      >
        {/* Pink Bar (largest) */}
        <div className="logo-bar h-44 w-8 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full"></div>
        {/* Orange Bar (medium size) */}
        <div className="logo-bar h-28 w-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
        {/* Blue Bar (smallest) */}
        <div className="logo-bar h-20 w-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
      </div>
    </div>
  );
}
