import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { ExternalLink } from "lucide-react";

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
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <header className="mb-8 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
              Member library
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4 leading-tight">
              Resources
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-white/70 text-lg">
              The ISMF Finance Resource Hub — CVs, interviews, and the practical
              steps to break into the industry.
            </p>
            <a
              href={financeHubPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-navy transition-colors hover:bg-white/90"
            >
              Open PDF
              <ExternalLink className="h-4 w-4" />
            </a>
          </header>

          <div className="overflow-hidden rounded-2xl border border-navy-border bg-white shadow-xl">
            <iframe
              title="ISMF Finance Resource Hub PDF"
              src={financeHubPdf}
              className="h-[80vh] w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
