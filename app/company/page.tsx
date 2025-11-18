import type { Metadata } from "next";
import { CompanyHero } from "@/components/blocks/company-hero";
import { CompanyInvestors } from "@/components/blocks/company-investors";
import { CompanyValues } from "@/components/blocks/company-values";
import { CompanyTeam } from "@/components/blocks/company-team";

export const metadata: Metadata = {
  title: "Company - TKV Creatographics | About Our Team & Values",
  description: "Learn about TKV Creatographics, our team, values, and mission to empower businesses through innovative design and digital solutions.",
  keywords: "company, team, values, mission, TKV Creatographics, design agency",
};

export default function CompanyPage() {
  return (
    <div className="relative overflow-hidden bg-gray-50">
      <div className="relative py-20 lg:py-24 lg:pt-32">
        {/* Hero Section */}
        <CompanyHero />

        {/* Divider */}
        <div className="container max-w-6xl py-4">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        </div>

        {/* Investors/Partners */}
        <CompanyInvestors />

        {/* Divider */}
        <div className="container max-w-6xl py-4">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        </div>

        {/* Values */}
        <CompanyValues />

        {/* Divider */}
        <div className="container max-w-6xl py-4">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        </div>

        {/* Team */}
        <CompanyTeam />
      </div>
    </div>
  );
}
