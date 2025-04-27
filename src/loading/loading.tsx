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
        
 
{/* Top horizontal blue bar */}
<div
  className="logo-bar h-2 w-16 rounded-lg"
  style={{ background: 'linear-gradient(to right, #2563eb, #334155)' }}
></div>

{/* First vertical bar (largest, dark gray) */}
<div
  className="logo-bar h-44 w-8 rounded-full"
  style={{ background: 'linear-gradient(to right, #334155, #334155)' }}
></div>

{/* Second vertical bar (medium size, dark gray) */}
<div
  className="logo-bar h-28 w-6 rounded-full"
  style={{ background: 'linear-gradient(to right, #334155, #334155)' }}
></div>

{/* Third vertical bar (smallest, dark gray) */}
<div
  className="logo-bar h-20 w-4 rounded-full"
  style={{ background: 'linear-gradient(to right, #334155, #334155)' }}
></div>

{/* Bottom horizontal blue bar */}
<div
  className="logo-bar h-2 w-16 rounded-lg"
  style={{ background: 'linear-gradient(to right, #2563eb, #334155)' }}
></div>





      </div>
    </div>
  );
}
