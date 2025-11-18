'use client';

import { useEffect, useState } from 'react';

export function FooterGlow() {
  const [particles, setParticles] = useState<Array<{
    left: string;
    duration: string;
    delay: string;
    driftX: string;
  }>>([]);

  useEffect(() => {
    // Generate particles only on client side to avoid hydration mismatch
    const generatedParticles = [...Array(50)].map(() => ({
      left: `${Math.random() * 100}%`,
      duration: `${2 + Math.random() * 3}s`,
      delay: `${Math.random() * 3}s`,
      driftX: `${(Math.random() - 0.5) * 40}px`,
    }));
    setParticles(generatedParticles);
  }, []);
  return (
    <>
      <style jsx global>{`
        /* Footer Glow Effect */
        @keyframes glow-pulse {
          0%, 100% {
            opacity: 0.8;
            filter: blur(12px);
          }
          50% {
            opacity: 1;
            filter: blur(18px);
          }
        }
        
        @keyframes glow-pulse-slow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.9;
          }
        }
        
        @keyframes particle-float {
          0% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          50% {
            opacity: 0.9;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100px) translateX(var(--drift)) scale(0.4);
            opacity: 0;
          }
        }
        
        .footer-glow-container {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100vw;
          height: 120px;
          overflow: visible;
          pointer-events: none;
          z-index: 10;
        }
        
        .footer-glow-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.1;
          mix-blend-mode: overlay;
          pointer-events: none;
          mask-image: linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.3) 70%, transparent 100%);
          -webkit-mask-image: linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.3) 70%, transparent 100%);
        }
        
        .footer-glow-container::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grainFilter'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.9' numOctaves='3' seed='2'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grainFilter)' opacity='0.5'/%3E%3C/svg%3E");
          opacity: 0.08;
          mix-blend-mode: soft-light;
          pointer-events: none;
          mask-image: linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.2) 80%, transparent 100%);
          -webkit-mask-image: linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.2) 80%, transparent 100%);
        }
        
        .footer-glow-base {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(
            90deg,
            rgba(249, 115, 22, 0.3) 0%,
            rgba(249, 115, 22, 0.6) 20%,
            rgba(249, 115, 22, 1) 50%,
            rgba(249, 115, 22, 0.6) 80%,
            rgba(249, 115, 22, 0.3) 100%
          );
        }
        
        .footer-glow-line {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            transparent 8%,
            rgba(249, 115, 22, 0.7) 20%,
            rgba(249, 115, 22, 1) 50%,
            rgba(249, 115, 22, 0.7) 80%,
            transparent 92%,
            transparent 100%
          );
          filter: blur(15px);
          animation: glow-pulse 3s ease-in-out infinite;
        }
        
        .footer-glow-bright {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          width: 100%;
          height: 70px;
          background: radial-gradient(
            ellipse at center bottom,
            rgba(249, 115, 22, 0.8) 0%,
            rgba(249, 115, 22, 0.6) 20%,
            rgba(249, 115, 22, 0.4) 45%,
            rgba(249, 115, 22, 0.15) 65%,
            rgba(249, 115, 22, 0.03) 85%,
            transparent 100%
          );
          mask-image: linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.3) 70%, transparent 100%);
          -webkit-mask-image: linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.3) 70%, transparent 100%);
          filter: blur(25px);
          animation: glow-pulse 3s ease-in-out infinite;
        }
        
        .footer-glow-core {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            transparent 10%,
            rgba(255, 255, 255, 0.6) 30%,
            rgba(255, 255, 255, 1) 50%,
            rgba(255, 255, 255, 0.6) 70%,
            transparent 90%,
            transparent 100%
          );
          filter: blur(4px);
          animation: glow-pulse-slow 2s ease-in-out infinite;
        }
        
        .footer-glow-outer {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          width: 100%;
          height: 80px;
          background: radial-gradient(
            ellipse at center bottom,
            rgba(249, 115, 22, 0.5) 0%,
            rgba(249, 115, 22, 0.3) 30%,
            rgba(249, 115, 22, 0.15) 55%,
            rgba(249, 115, 22, 0.05) 75%,
            rgba(249, 115, 22, 0.01) 90%,
            transparent 100%
          );
          mask-image: linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.2) 80%, transparent 100%);
          -webkit-mask-image: linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.2) 80%, transparent 100%);
          filter: blur(30px);
          animation: glow-pulse-slow 4s ease-in-out infinite;
        }
        
        .footer-glow-spread {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          width: 100%;
          height: 95px;
          background: radial-gradient(
            ellipse 120% 100% at center bottom,
            rgba(249, 115, 22, 0.25) 0%,
            rgba(249, 115, 22, 0.12) 40%,
            rgba(249, 115, 22, 0.05) 60%,
            rgba(249, 115, 22, 0.01) 80%,
            transparent 100%
          );
          mask-image: linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 60%, transparent 100%);
          -webkit-mask-image: linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 60%, transparent 100%);
          filter: blur(35px);
          animation: glow-pulse-slow 5s ease-in-out infinite;
        }
        
        .footer-particles {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          width: 100%;
          height: 100px;
          pointer-events: none;
        }
        
        .particle {
          position: absolute;
          bottom: 0;
          width: 2.5px;
          height: 2.5px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(249, 115, 22, 0.6) 40%, rgba(249, 115, 22, 0.3) 70%, transparent 100%);
          border-radius: 50%;
          box-shadow: 0 0 3px rgba(249, 115, 22, 0.6), 0 0 6px rgba(249, 115, 22, 0.3);
          animation: particle-float var(--duration) ease-out infinite;
          animation-delay: var(--delay);
          left: var(--left);
          --drift: var(--drift-x);
        }
      `}</style>
      
      <div className="footer-glow-container">
        <div className="footer-glow-spread"></div>
        <div className="footer-glow-outer"></div>
        <div className="footer-glow-base"></div>
        <div className="footer-glow-bright"></div>
        <div className="footer-glow-line"></div>
        <div className="footer-glow-core"></div>
        
        {/* Particles */}
        <div className="footer-particles">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="particle"
              style={{
                '--left': particle.left,
                '--duration': particle.duration,
                '--delay': particle.delay,
                '--drift-x': particle.driftX,
              } as React.CSSProperties}
            />
          ))}
        </div>
      </div>
    </>
  );
}
