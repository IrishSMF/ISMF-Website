import React, { useEffect } from "react";
import TeamGrid from "@/components/TeamGrid";

// Team member data with the new structure
const teamData = [
     {
        name: "Raj Aryan Upadhyaya",
        role: "Founder, Co-CEO",
        description: "",
        division: "Executive",
        initials: "RAU",
      },
      {
        name: "Caius Kauppi",
        role: "Co-CEO",
        description: "",
        division: "Executive",
        initials: "CK",
      },
      {
        name: "Juliet Carty",
        role: "Chairperson",
        description: "",
        division: "Executive",
        initials: "JC",
      },
      {
        name: "Krutika Dwivedi",
        role: "Chairperson",
        description: "",
        division: "Executive",
        initials: "KD",
      },
      {
        name: "Kahmala Aamir",
        role: "Chief Operations Officer",
        description: "",
        division: "Executive",
        initials: "KA",
      },
      {
        name: "Tanya Jindal",
        role: "Chief Financial Officer, Director of Alternative Investments",
        description: "",
        division: "Executive",
        initials: "TJ",
      },
      {
        name: "Tejal Ramchandani",
        role: "Chief Macroeconomist",
        description: "",
        division: "Executive",
        initials: "TR",
      },
      {
        name: "Can Atasever",
        role: "Chief Technology Officer",
        description: "",
        division: "Executive",
        initials: "CA",
      },
      {
    name: "Bénédict Fromholz",
    role: "Director of Equities",
    description: "",
    division: "Equities",
    initials: "BF",
  },
  {
    name: "Carole Misdari",
    role: "Chief Marketing Officer",
    description: "",
    division: "Marketing",
    initials: "CM",
  },
  {
    name: "Roisin O'Sullivan Smyth",
    role: "Director of Events",
    description: "",
    division: "Marketing",
    initials: "ROS",
  },
  {
    name: "Jonah Jjemba",
    role: "Director of Quant Trading",
    description: "",
    division: "Macro Research",
    initials: "JJ",
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
            Meet the Committee
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-[#4A4A4A] text-lg">
            The Irish Student Managed Fund leadership committee spans equities,
            macro, quant, and alternatives.
          </p>
        </header>

        <TeamGrid members={teamData} />
      </div>
    </section>
  );
}
