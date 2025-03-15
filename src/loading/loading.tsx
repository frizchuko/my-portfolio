'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const words = ['Hi there', 'Just a moment...', 'Almost there...', 'here we go!'];

interface LoadingProps{
  setIsLoading: (value: boolean) => void;
}

export default function Loading({ setIsLoading }: LoadingProps) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const typingSpeed = isDeleting ? 40 : 80;
    const delay = isDeleting ? 40 : 160;

    if (!isDeleting && charIndex === currentWord.length) {
      setTimeout(() => setIsDeleting(true), 1000);
      return;
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setText(currentWord.substring(0, charIndex + (isDeleting ? -1 : 1)));
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? typingSpeed : delay);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  // Simulate loading completion after 3 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Adjust time as needed

    return () => clearTimeout(timeout);
  }, [setIsLoading]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 3 }} // Fades out after 3 seconds
      className="fixed inset-0 flex items-center justify-center bg-white text-gray-800 z-50"
    >
      <h1 className="text-3xl font-semibold">
        {text}
        <span className="animate-blink">|</span>
      </h1>
      <style jsx>{`
        @keyframes blink {
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-start infinite;
        }
      `}</style>
    </motion.div>
  );
}
