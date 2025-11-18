'use client';

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export function AboutHero() {
  const [animationState, setAnimationState] = useState<'initial' | 'morphing' | 'final'>('initial');

  useEffect(() => {
    // Start animation cycle
    const startCycle = () => {
      setAnimationState('initial');
      
      // After 3 seconds, start morphing
      setTimeout(() => {
        setAnimationState('morphing');
      }, 3000);
      
      // After morph completes, show final state
      setTimeout(() => {
        setAnimationState('final');
      }, 4500);
      
      // Hold final state for 3 seconds, then restart
      setTimeout(() => {
        startCycle();
      }, 7500);
    };

    startCycle();
  }, []);

  return (
    <section className="relative py-16 md:py-24">
      <style jsx>{`
        .typewriter-wrapper {
          display: inline-flex;
          overflow: hidden;
          color: #ea580c;
          font-weight: 600;
          white-space: nowrap;
          width: 0;
          transition: color 0.4s ease, width 0.4s ease;
        }

        .typewriter-wrapper--animate {
          animation: typewriterWidth 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .typewriter-wrapper--visible {
          width: auto;
        }

        .typewriter-wrapper--complete {
          color: #ffffff;
        }

        .typewriter-text {
          display: inline-block;
        }

        @keyframes typewriterWidth {
          from {
            width: 0;
          }
          to {
            width: 2ch;
          }
        }

        .word-morph {
          display: inline-block;
          animation: wordMorph 0.8s ease forwards;
        }

        @keyframes wordMorph {
          0% {
            opacity: 0;
            transform: translateY(12px) scale(0.98);
          }
          50% {
            opacity: 0.6;
            transform: translateY(4px) scale(0.995);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

      `}</style>
      
      <div className="container max-w-5xl">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-50 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-600">
            SINCE 2015
          </div>
        </div>
        
        <h1 className="text-center text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-semibold tracking-tight leading-[1.2] text-gray-900">
          {animationState === 'initial' && (
            <>
              Refine Your <span className="text-orange-600 font-semibold">Ideas</span>.
            </>
          )}

          {animationState === 'morphing' && (
            <>
              Re
              <span className="typewriter-wrapper typewriter-wrapper--animate">
                <span className="typewriter-text">de</span>
              </span>
              fine Your{' '}
              <span className="word-morph text-orange-600 font-semibold">Design</span>.
            </>
          )}

          {animationState === 'final' && (
            <>
              Re
              <span className="typewriter-wrapper typewriter-wrapper--visible typewriter-wrapper--complete">
                <span className="typewriter-text">de</span>
              </span>
              fine Your <span className="text-orange-600 font-semibold">Design</span>.
            </>
          )}
        </h1>
        
        <p className="mt-8 text-center text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          We're not just a design agency — we build <span className="font-semibold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">brands</span>, <span className="font-semibold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">websites</span> & <span className="font-semibold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">digital performance</span> for future-ready businesses.
        </p>
        <div className="mt-10 flex justify-center">
          <Link
            href="#our-story"
            className="group inline-flex items-center gap-2 rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/60"
          >
            <span>Discover Our Story</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
