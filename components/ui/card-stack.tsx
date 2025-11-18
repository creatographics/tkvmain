"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative h-64 w-80 md:h-72 md:w-96">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute h-64 w-80 md:h-72 md:w-96 rounded-3xl p-7 flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
              background: "linear-gradient(145deg, rgba(25, 19, 14, 0.98) 0%, rgba(35, 25, 18, 0.96) 100%)",
              border: "1.5px solid rgba(253, 75, 31, 0.25)",
              boxShadow: `
                0 20px 50px -12px rgba(0, 0, 0, 0.6),
                0 0 0 1px rgba(253, 75, 31, 0.15),
                inset 0 1px 0 0 rgba(255, 255, 255, 0.05)
              `,
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: cards.length - index,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            {/* Quote Icon */}
            <div className="absolute top-5 right-5 opacity-20">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 8C10 5.79086 8.20914 4 6 4C3.79086 4 2 5.79086 2 8C2 10.2091 3.79086 12 6 12C6.55228 12 7 12.4477 7 13V15C7 16.1046 6.10457 17 5 17H4C3.44772 17 3 17.4477 3 18C3 18.5523 3.44772 19 4 19H5C7.20914 19 9 17.2091 9 15V13C9 11.3431 7.65685 10 6 10C4.89543 10 4 9.10457 4 8C4 6.89543 4.89543 6 6 6C7.10457 6 8 6.89543 8 8C8 8.55228 8.44772 9 9 9C9.55228 9 10 8.55228 10 8Z" fill="currentColor" className="text-orange-500/40"/>
                <path d="M22 8C22 5.79086 20.2091 4 18 4C15.7909 4 14 5.79086 14 8C14 10.2091 15.7909 12 18 12C18.5523 12 19 12.4477 19 13V15C19 16.1046 18.1046 17 17 17H16C15.4477 17 15 17.4477 15 18C15 18.5523 15.4477 19 16 19H17C19.2091 19 21 17.2091 21 15V13C21 11.3431 19.6569 10 18 10C16.8954 10 16 9.10457 16 8C16 6.89543 16.8954 6 18 6C19.1046 6 20 6.89543 20 8C20 8.55228 20.4477 9 21 9C21.5523 9 22 8.55228 22 8Z" fill="currentColor" className="text-orange-500/40"/>
              </svg>
            </div>

            {/* Content */}
            <div className="flex-1 pt-3">
              <div className="text-base leading-relaxed text-white/95 font-medium tracking-wide">
                {card.content}
              </div>
            </div>

            {/* Author Info */}
            <div className="pt-4 border-t border-orange-500/15">
              <p className="text-white font-semibold text-lg leading-tight">
                {card.name}
              </p>
              <p className="text-orange-200/80 font-medium text-sm mt-1 leading-tight">
                {card.designation}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
