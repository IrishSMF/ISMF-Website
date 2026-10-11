import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import TeamGrid from "@/components/TeamGrid";


// Team member data with the new structure
const teamData = [
  {
    name: "Michael E. Gasior",
    role: "Chief Executive Officer",
    description: "QUB PhD '28",
    division: "Executive",
    initials: "MEG",
    photo: `${import.meta.env.BASE_URL}team/michael-e-gasior.png`,
    linkedin: "https://www.linkedin.com/in/michaelegasior/"
  },
  {
    name: "Krutika Dwivedi",
    role: "Chairperson",
    description: "UCD Commerce '27",
    division: "Executive",
    initials: "KD",
    photo: `${import.meta.env.BASE_URL}team/krutika-dwivedi.png`,
    linkedin: "https://www.linkedin.com/in/krutika-dwivedi/"
  },
  {
    name: "Erika O'Callaghan",
    role: "Co-Chief Operations Officer",
    description: "UCD Commerce '27",
    division: "Executive",
    initials: "EO'C",
    photo: `${import.meta.env.BASE_URL}team/erika-ocallaghan.png`,
    linkedin: "https://www.linkedin.com/in/erikaocallaghan/"
  },
  {
    name: "Luke Kiely",
    role: "Co-Chief Operations Officer",
    description: "UCD Economics & Finance '29",
    division: "Executive",
    initials: "LK",
    photo: `${import.meta.env.BASE_URL}team/luke-kiely.png`,
    linkedin: "https://www.linkedin.com/in/luke-kiely-ire/"
  },
  {
    name: "Tobi Jakande",
    role: "Chief Financial Officer",
    description: "Maynooth Finance '27",
    division: "Executive",
    initials: "TJ",
    photo: `${import.meta.env.BASE_URL}team/tobi-jakande.png`,
    linkedin: "https://www.linkedin.com/in/tobi-jakande/"
  },
  {
    name: "George Cussen",
    role: "Director of Equity Investments",
    description: "UCC Finance '29",
    division: "Equities",
    initials: "GC",
    photo: `${import.meta.env.BASE_URL}team/george-cussen.png`,
    linkedin: "https://www.linkedin.com/in/georgecussen/"
  },
  {
    name: "Cillian Lloyd",
    role: "Director of Macroeconomic Research",
    description: "UCC Finance '28",
    division: "Macroeconomic Research",
    initials: "CL",
    photo: `${import.meta.env.BASE_URL}team/cillian-lloyd.png`,
    linkedin: "https://www.linkedin.com/in/cillian-lloyd-0b3412301/"
  },
  {
    name: "Ben Sweeney O'Brien",
    role: "Director of Alternative Investments",
    description: "UCD Economics & Geography '27",
    division: "Alternative Investments",
    initials: "BSO'B",
    photo: `${import.meta.env.BASE_URL}team/ben-sweeney-obrien.png`,
    linkedin: "https://www.linkedin.com/in/bensweeneyobrien/"
  },
  {
    name: "Rory Brennan",
    role: "Director of Quantitative Finance",
    description: "UCC BComm Banking & Finance '27",
    division: "Quantitative Finance",
    initials: "RB",
    photo: `${import.meta.env.BASE_URL}team/rory-brennan.png`,
    linkedin: "https://www.linkedin.com/in/rory-brennan-28b551230/"
  },
  {
    name: "Mony Aramalla",
    role: "Director of Technology",
    description: "UCD ME Mechanical Engineering with Business '28 ",
    division: "Technology",
    initials: "MA",
    photo: `${import.meta.env.BASE_URL}team/mony-aramalla.png`,
    linkedin: "https://www.linkedin.com/in/mony-aramalla/"
  },
  {
    name: "Ana Silva",
    role: "Co-Head of Marketing",
    description: "UCD Economics & Finance '29",
    division: "Marketing",
    initials: "AS",
    photo: `${import.meta.env.BASE_URL}team/ana-silva.png`,
    linkedin: "https://www.linkedin.com/in/ana-silva-4324022b9"
  },
  {
    name: "Charlie Graham",
    role: "Co-Head of Marketing",
    description: "UCD Economics & Finance '29",
    division: "Marketing",
    initials: "CG",
    photo: `${import.meta.env.BASE_URL}team/charlie-graham.png`,
    linkedin: "https://www.linkedin.com/in/charlesgraham0/"
  },
  {
    name: "Patrick Ryan",
    role: "Investment Officer",
    description: "UCD Economics & Statistics '29",
    division: "Committee",
    initials: "PR",
    photo: `${import.meta.env.BASE_URL}team/patrick-ryan.png`,
    linkedin: "https://www.linkedin.com/in/patrick-ryan-ucd/"
  },
  {
    name: "TBC",
    role: "Director of Careers",
    description: "",
    division: "Careers",
    initials: "TBC",
    photo: `${import.meta.env.BASE_URL}team/tbc.png`,
    linkedin: ""
  },
];


const previousCommittees = [
  {
    year: "25/26",
    members: [
      { role: "Co-CEOs", names: ["Raj Aryan Upadhyaya", "Caius Kauppi"] },
      { role: "Chairperson", names: ["Krutika Dwivedi"] },
      { role: "Co-Directors of Equities", names: ["Klaudia Ciepiela", "Merlin Girard Razel"] },
      { role: "Director of Macroeconomic Research", names: ["Tejal Ramchandani"] },
      { role: "Directors of Quantitative Finance", names: ["Jonah Jjemba", "Matus Sorocin"] },
      { role: "Directors of Alternative Investments", names: ["Ella Molloy", "Pranav Sharma"] },
      { role: "CFO", names: ["Theo McGirr"] },
      { role: "CTO", names: ["Mony Aramalla"] },
      { role: "CMO", names: ["Carole Misdari"] },
      { role: "Director of Events", names: ["Roisin O’Sullivan Smyth"] },
    ],
  },
  {
    year: "24/25",
    members: [
      { role: "Founder & CEO", names: ["Raj Aryan Upadhyaya"] },
      { role: "COO", names: ["Krutika Dwivedi"] },
      { role: "Directors of Equities", names: ["Michael Mensah", "Conor Johnston"] },
      { role: "Director of Quantitative Finance", names: ["Luke Barry"] },
      { role: "Director of Macroeconomic Research", names: ["Robert Rafanelli"] },
      { role: "CFO", names: ["Juliette Carty"] },
      { role: "CTO", names: ["Riccardo Riggi"] },
      { role: "CMO", names: ["Isabelle Xiao"] },
      { role: "Director of Careers", names: ["Andrew Brennan"] },
      { role: "Director of Events", names: ["Milan Binoy"] },
    ],
  },
];


export const metadata = {
  title: "People — Irish Student Managed Fund",
  description: "Meet the Irish Student Managed Fund leadership committee spanning Equities, Macro, Quant, and Alternatives."
};


export default function People() {
  const [activeYear, setActiveYear] = useState(previousCommittees[0].year);
  const activeCommittee = previousCommittees.find((c) => c.year === activeYear);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
      <Helmet>
        <title>People — Irish Student Managed Fund</title>
        <meta name="description" content="Meet the Irish Student Managed Fund leadership committee spanning Equities, Macro, Quant, and Alternatives." />
        <meta property="og:title" content="People — Irish Student Managed Fund" />
        <meta property="og:description" content="Meet the Irish Student Managed Fund leadership committee spanning Equities, Macro, Quant, and Alternatives." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="People — Irish Student Managed Fund" />
        <meta name="twitter:description" content="Meet the Irish Student Managed Fund leadership committee spanning Equities, Macro, Quant, and Alternatives." />
      </Helmet>
      <section className="min-h-screen w-full bg-[#FFFDF5]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#0A0A0A] mb-4 leading-tight">
              Meet the Committee
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-[#4A4A4A] text-lg">
              The Irish Student Managed Fund leadership committee spans Equities,
              Macro, Quant, and Alternatives.
            </p>
          </header>


          <TeamGrid members={teamData} />


          <section id="previous-committees" className="mt-24">
            <header className="mb-8 text-center">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#0A0A0A] mb-3">
                Previous Committees
              </h2>
              <p className="max-w-2xl mx-auto text-[#4A4A4A] text-lg">
                The people who built the fund before us.
              </p>
            </header>


            <div
              role="tablist"
              aria-label="Select committee year"
              className="mb-8 flex flex-wrap justify-center gap-3"
            >
              {previousCommittees.map(({ year }) => {
                const selected = year === activeYear;
                return (
                  <button
                    key={year}
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setActiveYear(year)}
                    className={`rounded-full border-2 border-navy-border px-5 py-2 text-sm font-semibold transition ${
                      selected
                        ? "bg-white text-navy ring-2 ring-navy-mid"
                        : "bg-navy-mid text-white hover:ring-2 hover:ring-white/30"
                    }`}
                  >
                    {year}
                  </button>
                );
              })}
            </div>


            <div role="tabpanel" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {activeCommittee.members.map(({ role, names }) => (
                <div
                  key={role}
                  className="rounded-xl border border-navy-border bg-navy-mid p-5 shadow-[4px_4px_0_0_#0A0A0A]"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-white/70">
                    {role}
                  </p>
                  <ul className="mt-2 space-y-1">
                    {names.map((name) => (
                      <li key={name} className="text-lg font-bold text-white">
                        {name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
}