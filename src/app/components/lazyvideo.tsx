"use client";
import { useEffect, useRef } from "react";

interface LazyVideoProps {
  src: string;
  poster: string;
  autoPlay: boolean;
}

export default function LazyVideo({ src, poster, autoPlay }: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (autoPlay && videoRef.current) {
      videoRef.current.load(); // Reload video on source change
      videoRef.current.play().catch((err) => console.error("Video play failed:", err));
    }
  }, [src, autoPlay]);

  return (
    <video
      ref={videoRef}
      className="w-full h-96 object-cover rounded-md"
      controls
      autoPlay={autoPlay}
      muted
      playsInline
      poster={poster}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

