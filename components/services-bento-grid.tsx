"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Palette, Code, Camera, TrendingUp, Sparkles, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesBentoGrid() {
  return (
    <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

// Skeleton components for visual effects
const SkeletonGraphicDesign = () => {
  const variants = {
    initial: { scale: 0.8, opacity: 0.5 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.3 }
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-gradient-to-br from-orange-50 via-orange-50/50 to-white rounded-lg flex-col items-center justify-center space-y-3 p-4"
    >
      <motion.div variants={variants} className="flex gap-2">
        <div className="h-12 w-12 rounded-lg bg-[#F48120]" />
        <div className="h-12 w-12 rounded-lg bg-[#FAAD3F]" />
        <div className="h-12 w-12 rounded-lg bg-[#F48120]" />
      </motion.div>
      <motion.div variants={variants} className="w-full space-y-2">
        <div className="h-2 bg-[#FAAD3F]/40 rounded-full w-3/4 mx-auto" />
        <div className="h-2 bg-[#FAAD3F]/40 rounded-full w-1/2 mx-auto" />
      </motion.div>
    </motion.div>
  );
};

const SkeletonWebDev = () => {
  const variants = {
    initial: { width: 0 },
    animate: { 
      width: "100%",
      transition: { duration: 0.3 }
    },
  };
  
  const arr = new Array(6).fill(0);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-lg flex-col space-y-2 p-4"
    >
      {arr.map((_, i) => (
        <motion.div
          key={"web-dev-" + i}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + "%",
          }}
          className="flex flex-row rounded-full border border-blue-200 p-2 bg-blue-100 w-full h-3"
        />
      ))}
    </motion.div>
  );
};

const SkeletonMarketing = () => {
  const variants = {
    initial: { backgroundPosition: "0 50%" },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg flex-col space-y-2"
      style={{
        background: "linear-gradient(-45deg, #f97316, #ea580c, #fb923c, #fdba74)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg" />
    </motion.div>
  );
};

const SkeletonAppDev = () => {
  const first = {
    initial: { x: 20, rotate: -5 },
    hover: { x: 0, rotate: 0 },
  };
  const second = {
    initial: { x: -20, rotate: 5 },
    hover: { x: 0, rotate: 0 },
  };
  
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-gradient-to-br from-amber-50 via-amber-50/50 to-white rounded-lg flex-row space-x-2 p-4"
    >
      <motion.div
        variants={first}
        className="h-full w-1/2 rounded-2xl bg-white border border-purple-200 flex flex-col items-center justify-center p-2"
      >
        <div className="w-full h-8 bg-purple-200 rounded-lg mb-2" />
        <div className="w-full h-4 bg-purple-100 rounded mb-1" />
        <div className="w-3/4 h-4 bg-purple-100 rounded" />
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/2 rounded-2xl bg-white border border-purple-200 flex flex-col items-center justify-center p-2"
      >
        <div className="w-full h-8 bg-purple-200 rounded-lg mb-2" />
        <div className="w-full h-4 bg-purple-100 rounded mb-1" />
        <div className="w-3/4 h-4 bg-purple-100 rounded" />
      </motion.div>
    </motion.div>
  );
};

const SkeletonPhotography = () => {
  const variants = {
    initial: { scale: 1 },
    animate: { 
      scale: 1.05,
      transition: { duration: 0.3 }
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-gradient-to-br from-rose-50 via-rose-50/50 to-white rounded-lg p-4 flex-col items-center justify-center space-y-3"
    >
      <motion.div variants={variants} className="grid grid-cols-2 gap-2 h-full">
        <div className="rounded-lg bg-gradient-to-br from-rose-300 to-rose-400" />
        <div className="rounded-lg bg-gradient-to-br from-rose-400 to-rose-500" />
        <div className="rounded-lg bg-gradient-to-br from-rose-500 to-rose-600" />
        <div className="rounded-lg bg-gradient-to-br from-rose-600 to-pink-500" />
      </motion.div>
    </motion.div>
  );
};

const Skeleton3D = () => {
  const variants = {
    initial: { rotateY: 0 },
    animate: { 
      rotateY: 15,
      transition: { duration: 0.3 }
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-gradient-to-br from-cyan-50 via-cyan-50/50 to-white rounded-lg items-center justify-center p-4"
      style={{ perspective: "1000px" }}
    >
      <motion.div 
        variants={variants}
        className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl shadow-xl"
        style={{ transformStyle: "preserve-3d" }}
      />
    </motion.div>
  );
};

const items = [
  {
    title: "Graphic Design & Branding",
    description: (
      <span className="text-sm">
        Visual identity that stands out with professional logo design, brand identity, and marketing collateral.
      </span>
    ),
    header: <SkeletonGraphicDesign />,
    className: "md:col-span-2 md:row-span-1",
    icon: <Palette className="h-4 w-4 text-[#F48120]" />,
  },
  {
    title: "Web Design & Development",
    description: (
      <span className="text-sm">
        Modern, responsive websites with custom design, e-commerce solutions, and SEO optimization.
      </span>
    ),
    header: <SkeletonWebDev />,
    className: "md:col-span-1 md:row-span-2",
    icon: <Code className="h-4 w-4 text-[#1DA1F2]" />,
  },
  {
    title: "Digital Marketing",
    description: (
      <span className="text-sm">
        Data-driven growth strategies including SEO, social media marketing, and PPC advertising.
      </span>
    ),
    header: <SkeletonMarketing />,
    className: "md:col-span-1 md:row-span-1",
    icon: <TrendingUp className="h-4 w-4 text-[#F48120]" />,
  },
  {
    title: "App Development",
    description: (
      <span className="text-sm">
        Custom mobile & web applications for iOS, Android, and cross-platform solutions.
      </span>
    ),
    header: <SkeletonAppDev />,
    className: "md:col-span-2 md:row-span-1",
    icon: <Smartphone className="h-4 w-4 text-[#FAAD3F]" />,
  },
  {
    title: "Photography & Videography",
    description: (
      <span className="text-sm">
        Professional visual content including product photography, corporate videos, and event coverage.
      </span>
    ),
    header: <SkeletonPhotography />,
    className: "md:col-span-1 md:row-span-1",
    icon: <Camera className="h-4 w-4 text-[#FF62C8]" />,
  },
  {
    title: "2D/3D Animation & Motion Graphics",
    description: (
      <span className="text-sm">
        Engaging animations and motion graphics for explainer videos, product demos, and brand storytelling.
      </span>
    ),
    header: <Skeleton3D />,
    className: "md:col-span-1 md:row-span-1",
    icon: <Sparkles className="h-4 w-4 text-[#FAAD3F]" />,
  },
];
