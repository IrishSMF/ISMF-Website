import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import TeamGrid from "@/components/TeamGrid";

// Team member data with the new structure
const teamData = [
     {
        name: "Raj Aryan Upadhyaya",
        role: "Founder & Co-Chief Executive Officer",
        description: "TCD Computer Science & Economics '27",
        division: "Executive",
        initials: "RAU",
        photo: `${import.meta.env.BASE_URL}team/raj-aryan-upadhyaya.png`,
        linkedin: "https://www.linkedin.com/in/raupadhyaya04/"
      },
      {
        name: "Rory Brennan",
        role: "Co-Chief Executive Officer & Co-Director of Quantitative Finance",
        description: "UCC BComm Banking & Finance '27",
        division: "Executive",
        initials: "RB",
        photo: `${import.meta.env.BASE_URL}team/rory-brennan.png`,
        linkedin: "https://www.linkedin.com/in/rory-brennan-28b551230/"
      },
      {
        name: "Caius Kauppi",
        role: "Chairperson",
        description: "Imperial MSc Finance & Accounting 2027 (Prev. UCD)",
        division: "Executive",
        initials: "CK",
        photo: `${import.meta.env.BASE_URL}team/caius-kauppi.png`,
        linkedin: "https://www.linkedin.com/in/caiuskauppi/"
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
        name: "Vacant",
        role: "Chief Operations Officer",
        description: "",
        division: "Executive",
        initials: "U",
        photo: `${import.meta.env.BASE_URL}team/vacant.png`,
        linkedin: ""
      },
      {
        name: "Tobi Jakande",
        role: "Chief Financial Officer",
        description: "Maynooth University Finance '27",
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
        initials: "TR",
        photo: `${import.meta.env.BASE_URL}team/cillian-lloyd.png`,
        linkedin: "https://www.linkedin.com/in/cillian-lloyd-0b3412301/"
      },
      {
        name: "Ben Sweeney O'Brien",
        role: "Director of Alternative Investments",
        description: "UCD Economics & Geography '27",
        division: "Alternative Investments",
        initials: "BSOB",
        photo: `${import.meta.env.BASE_URL}team/ben-sweeney-obrien.png`,
        linkedin: "https://www.linkedin.com/in/bensweeneyobrien/"
      },
      {
        name: "Vacant",
        role: "Co-Director of Quant",
        description: "",
        division: "Quantitative Finance",
        initials: "U",
        photo: `${import.meta.env.BASE_URL}team/vacant.png`,
        linkedin: ""
      },
      {
        name: "Mony Aramalla",
        role: "Director of Technology",
        description: "UCD MSc Mechanical Engineering (integrated) '28",
        division: "Technology",
        initials: "MA",
        photo: `${import.meta.env.BASE_URL}team/mony-aramalla.png`,
        linkedin: "https://www.linkedin.com/in/mony-aramalla/"
      },
      {
        name: "Erika O'Callaghan",
        role: "Director of Marketing",
        description: "UCD Commerce '27",
        division: "Marketing",
        initials: "EO'C",
        photo: `${import.meta.env.BASE_URL}team/erika-ocallaghan.png`,
        linkedin: "https://www.linkedin.com/in/erikaocallaghan/"
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
        name: "Ana Silva",
        role: "Investment Officer",
        description: "UCD Economics & Finance '29",
        division: "Committee",
        initials: "AS",
        photo: `${import.meta.env.BASE_URL}team/ana-silva.png`,
        linkedin: "https://www.linkedin.com/in/ana-silva-4324022b9"
      },
];

export const metadata = {
  title: "People — Irish Student Managed Fund",
  description: "Meet the Irish Student Managed Fund leadership committee spanning Equities, Macro, Quant, and Alternatives."
};

export default function People() {
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
      </div>
    </section>
    </>
  );
}
