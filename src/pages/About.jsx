import React, { useEffect } from "react";
import TeamGrid from "@/components/TeamGrid";

// Team member data with the new structure
const teamData = [
  {
    name: "Bénédict",
    role: "Director of Equities",
    description: "Leads the fundamental analysis and stock selection process.",
    division: "Equities",
    initials: "B",
  },
  {
    name: "Carole",
    role: "Marketing and Events",
    description: "Manages all external communications, branding, and event planning.",
    division: "Marketing",
    initials: "C",
  },
  {
    name: "Roisin",
    role: "Marketing and Events",
    description: "Manages all external communications, branding, and event planning.",
    division: "Marketing",
    initials: "R",
  },
  {
    name: "Tejal",
    role: "Chief Macroeconomist",
    description: "Provides high-level economic analysis and forecasts influencing overall strategy.",
    division: "Macro Research",
    initials: "T",
  },
  {
    name: "Jonah",
    role: "Director of Quant",
    description: "Oversees quantitative research, model development, and systematic strategies.",
    division: "Quantitative Research",
    initials: "J",
  },
  {
    name: "Tanya",
    role: "Director of Alternative Investments",
    description: "Focuses on hedge funds, private equity, and real estate.",
    division: "Alternative Investments",
    initials: "T",
  },
  {
    name: "Raj Aryan Upadhyaya",
    role: "CEO",
    description: "",
    division: "Executive",
    initials: "R",
  },
  {
    name: "",
    role: "COO",
    description: "",
    division: "Executive",
    initials: "C",
  },
  {
    name: "",
    role: "CFO",
    description: "",
    division: "Executive",
    initials: "C",
  },
  {
    name: "",
    role: "Director of Equities",
    description: "",
    division: "Equities",
    initials: "D",
  },
  {
    name: "",
    role: "Director of Alternative Investments",
    description: "",
    division: "Alternative Investments",
    initials: "D",
  },
  {
    name: "",
    role: "Director of Quant",
    description: "",
    division: "Quantitative Research",
    initials: "D",
  },
  {
    name: "",
    role: "CMO",
    description: "",
    division: "Marketing",
    initials: "C",
  },
  {
    name: "",
    role: "CTO",
    description: "",
    division: "Technology",
    initials: "C",
  },
  {
    name: "",
    role: "Director of Events",
    description: "",
    division: "Events",
    initials: "D",
  },
  {
    name: "",
    role: "Director of Careers",
    description: "",
    division: "Careers",
    initials: "D",
  },
  {
    name: "",
    role: "Chief Macroeconomist",
    description: "",
    division: "Macro Research",
    initials: "C",
  },
];

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen w-full bg-[#FFFDF5]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <header className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0A0A0A] mb-4">
            Meet the Team
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-[#4A4A4A] text-lg">
            The Irish Student Managed Fund leadership team spans equities,
            macro, quant, and alternatives.
          </p>
        </header>

        <TeamGrid members={teamData} />
      </div>
    </section>
  );
}
