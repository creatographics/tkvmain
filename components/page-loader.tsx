"use client";

import { useEffect, useState } from 'react';
import { AnimatedCircularProgressBar } from '@/components/ui/animated-circular-progress-bar';
import { motion, AnimatePresence } from 'framer-motion';

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Add a small delay before hiding the loader
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        const increment = Math.random() * 15;
        const newValue = prev + increment;
        return Math.min(newValue, 100);
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white"
        >
          <div className="relative flex flex-col items-center space-y-6 text-center">
            {/* Animated Circular Progress Bar */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <AnimatedCircularProgressBar
                value={progress}
                gaugePrimaryColor="rgb(249 115 22)"
                gaugeSecondaryColor="rgba(249, 115, 22, 0.1)"
                className="size-32"
              />
            </motion.div>

            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-sm font-medium text-slate-600">
                {progress < 30 && "Loading..."}
                {progress >= 30 && progress < 60 && "Preparing content..."}
                {progress >= 60 && progress < 90 && "Almost there..."}
                {progress >= 90 && "Ready!"}
              </p>
            </motion.div>
          </div>

          {/* Background subtle animation */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/4 right-1/4 h-64 w-64 rounded-full bg-orange-100/40 blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 left-1/4 h-48 w-48 rounded-full bg-orange-50/60 blur-3xl animate-pulse animation-delay-2000" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
