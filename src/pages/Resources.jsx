import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { BookOpen, ChevronRight, ExternalLink, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const resources = [
  {
    id: "finance-hub",
    title: "Finance Resource Hub",
    description:
      "A practical guide for breaking into finance: how to write a one-page CV, prepare for interviews, build commercial awareness, and walk into interview day ready.",
    href: `${import.meta.env.BASE_URL}resources/ismf-finance-resource-hub.pdf`,
    downloadHref: `${import.meta.env.BASE_URL}resources/ismf-finance-resource-hub.docx`,
  },
];

export const metadata = {
  title: "Resources — Irish Student Managed Fund",
  description:
    "Open the ISMF Finance Resource Hub for CV, interview, and career guidance written for student members.",
};

export default function Resources() {
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <>
      <Helmet>
        <title>Resources — Irish Student Managed Fund</title>
        <meta
          name="description"
          content="Open the ISMF Finance Resource Hub for CV, interview, and career guidance written for student members."
        />
        <meta property="og:title" content="Resources — Irish Student Managed Fund" />
        <meta
          property="og:description"
          content="Open the ISMF Finance Resource Hub for CV, interview, and career guidance written for student members."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Resources — Irish Student Managed Fund" />
        <meta
          name="twitter:description"
          content="Open the ISMF Finance Resource Hub for CV, interview, and career guidance written for student members."
        />
      </Helmet>
      <section className="min-h-screen w-full bg-navy-dark">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <header className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
              Member library
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4 leading-tight">
              Resources
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-white/70 text-lg">
              Click a hub to open it. Start with the Finance Resource Hub — CVs,
              interviews, and the practical steps to break into the industry.
            </p>
          </header>

          <div className="space-y-6">
            {resources.map((resource, index) => {
              const isOpen = openId === resource.id;

              return (
                <motion.article
                  key={resource.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className={`group rounded-2xl border p-6 sm:p-8 transition-all duration-300 cursor-pointer ${
                    isOpen
                      ? "bg-navy-mid border-white/40 shadow-xl scale-[1.01]"
                      : "bg-navy-mid/80 border-navy-border hover:border-white/30 hover:shadow-lg hover:-translate-y-0.5"
                  }`}
                  onClick={() => toggle(resource.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggle(resource.id);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl transition-colors ${
                          isOpen ? "bg-white text-navy" : "bg-white/10 text-white"
                        }`}
                      >
                        <BookOpen className="h-7 w-7" />
                      </div>
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white">
                          {resource.title}
                        </h2>
                        <p className="mt-2 max-w-2xl text-white/70 leading-relaxed">
                          {resource.description}
                        </p>
                      </div>
                    </div>
                    <ChevronRight
                      className={`mt-2 h-6 w-6 flex-shrink-0 text-white/70 transition-transform duration-300 ${
                        isOpen ? "rotate-90" : "group-hover:translate-x-1"
                      }`}
                    />
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                          <a
                            href={resource.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-navy transition-colors hover:bg-white/90"
                          >
                            Open the hub
                            <ExternalLink className="h-4 w-4" />
                          </a>
                          <a
                            href={resource.downloadHref}
                            download
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-transparent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                          >
                            <FileText className="h-4 w-4" />
                            Download Word
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
