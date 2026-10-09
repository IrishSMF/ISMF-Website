import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { TrendingUp, Briefcase, Code, Megaphone, BarChart3, Globe } from "lucide-react";
import { motion } from "framer-motion";

const divisions = [
  {
    name: "Equities",
    description:
      "Fundamental analysis, stock selection, and equity portfolio management.",
    icon: BarChart3,
  },
  {
    name: "Alternative Investments",
    description:
      "Private markets (VC and private equity), commodities, real estate, and digital assets.",
    icon: Briefcase,
  },
  {
    name: "Quant",
    description:
      "Quantitative modelling, systematic strategies, and data-driven investment decisions.",
    icon: TrendingUp,
  },
  {
    name: "Macroeconomic Research",
    description:
      "Macroeconomic trends, monetary policy, and market-wide investment opportunities.",
    icon: Globe,
  },
  {
    name: "Technology",
    description:
      "Technical infrastructure, automation, and software tools that support the fund.",
    icon: Code,
  },
  {
    name: "Marketing / Events",
    description:
      "Branding, outreach, events, and internal and external communications.",
    icon: Megaphone,
  },
];

export const metadata = {
  title: "Divisions — Irish Student Managed Fund",
  description: "Explore the diverse divisions that drive our investment strategy and operations."
};

export default function Divisions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Divisions — Irish Student Managed Fund</title>
        <meta name="description" content="Explore the diverse divisions that drive our investment strategy and operations." />
        <meta property="og:title" content="Divisions — Irish Student Managed Fund" />
        <meta property="og:description" content="Explore the diverse divisions that drive our investment strategy and operations." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Divisions — Irish Student Managed Fund" />
        <meta name="twitter:description" content="Explore the diverse divisions that drive our investment strategy and operations." />
      </Helmet>
      <section className="bg-navy-dark min-h-screen w-full">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <header className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
              How we work
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4 leading-tight">
              Our Divisions
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-white/70 text-lg">
              Six teams covering research, investing, technology, and how we show
              up — each with a clear mandate.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
            {divisions.map((division, index) => {
              const Icon = division.icon;

              return (
                <motion.article
                  key={division.name}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="group rounded-2xl border border-navy-border bg-navy-mid p-6 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/35 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 text-white transition-colors duration-300 group-hover:bg-white group-hover:text-navy">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 text-2xl font-semibold text-white">
                    {division.name}
                  </h2>
                  <p className="mt-2 text-white/70 leading-relaxed">
                    {division.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
