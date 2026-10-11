import React, { useEffect, useMemo, useRef, useState } from "react";
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


const CURRENT_YEAR = "26/27";


const previousCommittees = [
  {
    year: "25/26",
    members: [
      { role: "Co-CEO", names: ["Raj Aryan Upadhyaya", "Caius Kauppi"] },
      { role: "Chairperson", names: ["Krutika Dwivedi"] },
      { role: "Co-Director of Equities", names: ["Klaudia Ciepiela", "Merlin Girard Razel"] },
      { role: "Director of Macroeconomic Research", names: ["Tejal Ramchandani"] },
      { role: "Director of Quantitative Finance", names: ["Jonah Jjemba", "Matus Sorocin"] },
      { role: "Director of Alternative Investments", names: ["Ella Molloy", "Pranav Sharma"] },
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
      { role: "Director of Equities", names: ["Michael Mensah", "Conor Johnston"] },
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


const getInitials = (name) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0].toUpperCase())
    .slice(0, 3)
    .join("");


// Flatten { role, names[] } rows into TeamGrid-shaped members (no photo / linkedin => initials only)
const toGridMembers = (committee) =>
  committee.members.flatMap(({ role, names }) =>
    names.map((name) => ({
      name,
      role,
      description: "",
      initials: getInitials(name),
    }))
  );


export const metadata = {
  title: "People — Irish Student Managed Fund",
  description: "Meet the Irish Student Managed Fund leadership committee spanning Equities, Macro, Quant, and Alternatives."
};


export default function People() {
  const [activeYear, setActiveYear] = useState(CURRENT_YEAR);
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);


  const years = useMemo(
    () => [CURRENT_YEAR, ...previousCommittees.map((c) => c.year)],
    []
  );


  const members = useMemo(() => {
    if (activeYear === CURRENT_YEAR) return teamData;
    const committee = previousCommittees.find((c) => c.year === activeYear);
    return committee ? toGridMembers(committee) : [];
  }, [activeYear]);


  const isCurrent = activeYear === CURRENT_YEAR;


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  useEffect(() => {
    const onClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false);
    };
    const onEsc = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEsc);
    };
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


            <div ref={menuRef} className="relative mt-8 inline-block text-left">
              <button
                type="button"
                aria-haspopup="listbox"
                aria-expanded={open}
                onClick={() => setOpen((o) => !o)}
                className="inline-flex items-center gap-3 rounded-full border border-navy-border bg-navy-mid px-6 py-3 text-base font-semibold text-white shadow-[4px_4px_0_0_#0A0A0A] transition hover:ring-2 hover:ring-white/30"
              >
                {activeYear} Committee{isCurrent ? " (Current)" : ""}
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>


              {open && (
                <ul
                  role="listbox"
                  aria-label="Select committee year"
                  className="absolute left-1/2 z-20 mt-3 w-64 -translate-x-1/2 overflow-hidden rounded-xl border border-navy-border bg-navy-mid shadow-[4px_4px_0_0_#0A0A0A]"
                >
                  {years.map((year) => {
                    const selected = year === activeYear;
                    return (
                      <li key={year} role="option" aria-selected={selected}>
                        <button
                          type="button"
                          onClick={() => {
                            setActiveYear(year);
                            setOpen(false);
                          }}
                          className={`flex w-full items-center justify-between px-5 py-3 text-left text-sm font-semibold transition ${
                            selected
                              ? "bg-white text-navy"
                              : "text-white hover:bg-white/10"
                          }`}
                        >
                          <span>
                            {year}
                            {year === CURRENT_YEAR ? " (Current)" : ""}
                          </span>
                          {selected && <span aria-hidden="true">✓</span>}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>


            {!isCurrent && (
              <p className="mt-4 text-sm text-[#4A4A4A]">
                Showing the {activeYear} committee.
              </p>
            )}
          </header>


          <TeamGrid key={activeYear} members={members} />
        </div>
      </section>
    </>
  );
}