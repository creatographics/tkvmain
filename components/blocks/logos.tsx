import Image from "next/image";
import Link from "next/link";

import Marquee from "react-fast-marquee";

import { FlickeringGrid } from "@/registry/magicui/flickering-grid";
import { cn } from "@/lib/utils";

type Company = {
  name: string;
  logo: string;
  width: number;
  height: number;
  href: string;
};

export const Logos = () => {
  const topRowCompanies = [
    {
      name: "Naturals",
      logo: "/images/logos/Naturals.png",
      width: 120,
      height: 40,
      href: "#",
    },
    {
      name: "Palo Alto",
      logo: "/images/logos/Paloalto.png",
      width: 120,
      height: 40,
      href: "#",
    },
    {
      name: "Veira",
      logo: "/images/logos/Veira.png",
      width: 120,
      height: 40,
      href: "#",
    },
    {
      name: "Unpause",
      logo: "/images/logos/unpause.png",
      width: 120,
      height: 40,
      href: "#",
    },
  ];

  const bottomRowCompanies = [
    {
      name: "Tradegully",
      logo: "/images/logos/tradegully.png",
      width: 120,
      height: 40,
      href: "#",
    },
    {
      name: "Metamind",
      logo: "/images/logos/Metamind.png",
      width: 120,
      height: 40,
      href: "#",
    },
    {
      name: "Inaura",
      logo: "/images/logos/Inaura.png",
      width: 120,
      height: 40,
      href: "#",
    },
    {
      name: "Datanimbus",
      logo: "/images/logos/Datanimbus.png",
      width: 140,
      height: 40,
      href: "#",
    },
    {
      name: "Bombay Curry",
      logo: "/images/logos/Bombay-Curry.png",
      width: 120,
      height: 40,
      href: "#",
    },
  ];

  return (
    <section className="py-16 px-4 md:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="container relative z-10 max-w-[1200px] mx-auto">
        <div className="relative overflow-hidden rounded-[36px] border border-[rgba(15,23,42,0.08)] bg-white/95 px-6 py-10 md:px-10 lg:px-14 shadow-[0_25px_60px_-35px_rgba(15,23,42,0.5)]">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-white/70" aria-hidden="true" />
            <FlickeringGrid
              className="absolute inset-0 z-[-1]"
              squareSize={4}
              gridGap={6}
              color="#FFEDD5"
              maxOpacity={0.15}
              flickerChance={0.07}
              height={800}
              width={1200}
            />
          </div>
          <div className="relative z-10 space-y-10 lg:space-y-16">
          <div className="text-center">
            <h2 className="mb-4 text-xl text-balance md:text-2xl lg:text-3xl text-[#012A38]">
              Trusted by <span className="highlight">300+</span> businesses worldwide.
              <br className="max-md:hidden" />
              <span className="text-slate-600">
                From <span className="highlight-grey">innovative startups</span> to <span className="highlight-grey">Fortune 500</span> companies.
              </span>
            </h2>
          </div>

          <div className="flex w-full flex-col items-center gap-8 rounded-[24px] bg-[#EFEFEF] border border-white/70 px-4 py-8 md:px-6">
            {/* Top row - 4 logos */}
            <LogoRow companies={topRowCompanies} gridClassName="grid-cols-4" />

            {/* Bottom row - 5 logos */}
            <LogoRow
              companies={bottomRowCompanies}
              gridClassName="grid-cols-5"
              direction="right"
            />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

type LogoRowProps = {
  companies: Company[];
  gridClassName: string;
  direction?: "left" | "right";
};

const LogoRow = ({ companies, gridClassName, direction }: LogoRowProps) => {
  return (
    <>
      {/* Desktop static version */}
      <div className="hidden md:block">
        <div
          className={cn(
            "grid items-center justify-items-center gap-x-20 lg:gap-x-28",
            gridClassName,
          )}
        >
          {companies.map((company, index) => (
            <Link href={company.href} target="_blank" key={index}>
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={company.width}
                height={company.height}
                className="object-contain opacity-80 transition-opacity duration-300 dark:brightness-0 dark:invert"
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile marquee version */}
      <div className="md:hidden">
        <Marquee direction={direction} pauseOnHover>
          {companies.map((company, index) => (
            <Link
              href={company.href}
              target="_blank"
              key={index}
              className="mx-8 inline-block transition-opacity hover:opacity-70"
            >
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={company.width}
                height={company.height}
                className="object-contain opacity-90 transition-opacity duration-300 dark:brightness-0 dark:invert"
              />
            </Link>
          ))}
        </Marquee>
      </div>
    </>
  );
};
