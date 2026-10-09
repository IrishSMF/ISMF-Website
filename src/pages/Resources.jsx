import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { BookOpen, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const financeHubPdf = `${import.meta.env.BASE_URL}reports/ismf-finance-resource-hub.pdf`;

export const metadata = {
  title: "Resources — Irish Student Managed Fund",
  description:
    "Open the ISMF Finance Resource Hub for CV, interview, and career guidance written for student members.",
};

export default function Resources() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <header className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
              Member library
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4 leading-tight">
              Resources
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-white/70 text-lg">
              Practical guides to help ISMF members break into finance — from
              writing a strong CV to walking into interview day prepared.
            </p>
          </header>

          <motion.a
            href={financeHubPdf}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="group block rounded-2xl border border-navy-border bg-navy-mid p-6 sm:p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 text-white transition-colors group-hover:bg-white group-hover:text-navy">
                  <BookOpen className="h-7 w-7" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    Finance Resource Hub
                  </h2>
                  <p className="mt-2 max-w-xl text-white/70 leading-relaxed">
                    A short, practical guide to finance CVs, interviews, and
                    commercial awareness. Click to open the PDF.
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-2 self-start rounded-full bg-white px-4 py-2 text-sm font-semibold text-navy sm:self-center">
                Open
                <ExternalLink className="h-4 w-4" />
              </span>
            </div>
          </motion.a>
        </div>
      </section>
    </>
  );
}
