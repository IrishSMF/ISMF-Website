import React from "react";
import { Helmet } from "react-helmet";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Research — Irish Student Managed Fund",
  description: "At the Irish Student Managed Fund, research underpins every investment decision. Our Macro Research Team publishes bi-monthly macro outlook reports."
};

export default function Research() {


  const [latestReport, setLatestReport] = React.useState(null);

  React.useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}reports/latest.json`)
      .then(r => r.json())
      .then(setLatestReport);
  }, []);



  return (
    <>
      <Helmet>
        <title>Research — Irish Student Managed Fund</title>
        <meta name="description" content="At the Irish Student Managed Fund, research underpins every investment decision. Our Macro Research Team publishes bi-monthly macro outlook reports." />
        <meta property="og:title" content="Research — Irish Student Managed Fund" />
        <meta property="og:description" content="At the Irish Student Managed Fund, research underpins every investment decision. Our Macro Research Team publishes bi-monthly macro outlook reports." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Research — Irish Student Managed Fund" />
        <meta name="twitter:description" content="At the Irish Student Managed Fund, research underpins every investment decision. Our Macro Research Team publishes bi-monthly macro outlook reports." />
      </Helmet>
      <main className="min-h-screen bg-navy-dark text-white pt-24">
      {/* Hero / Intro */}
      <section className="max-w-5xl mx-auto px-6 pb-20 grid gap-8 md:grid-cols-[1.8fr,1.4fr] flex justify-center">
        <div className="bg-navy-mid rounded-2xl shadow-md p-6 sm:p-8 border border-navy-border mb-8 mt-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 leading-tight text-center">
            Research
          </h1>

          <p className="text-lg text-white/70 max-w-3xl leading-relaxed">
            At the Irish Student Managed Fund, research underpins every investment
            decision. <br />
            Our Macro team publishes a{" "}
            <span className="font-semibold">bi-monthly macro outlook</span> and
            sector-focused{" "}
            <span className="font-semibold">commodities newsletters</span>, and
            in-depth{" "}
            <span className="font-semibold">country case studies</span>, and
            educational{" "}
            <span className="font-semibold">member guides</span>,
            combining top-down macro analysis with bottom-up views across asset
            classes and physical markets.
          </p>

          <p className="text-lg text-white/70 max-w-3xl leading-relaxed">
            These publications guide our portfolio positioning and help members
            develop a deeper understanding of the forces shaping global markets.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 pb-20">
      {/* Macro outlook */}
      <section className="pt-12">
        <div className="bg-navy-mid rounded-2xl shadow-md p-6 sm:p-8 border border-navy-border">
          <h2 className="text-xl font-semibold mb-3 text-white">
            Bi-Monthly Macro Outlook
          </h2>
          <p className="text-sm sm:text-base text-white/70 mb-6 leading-relaxed">
            Every two months, the ISMF Macro Research Team publishes a
            student-written update on the global economy—covering growth,
            inflation, policy, market themes, and portfolio positioning.
          </p>

          <div className="space-y-4">
              <a
                href={`${import.meta.env.BASE_URL}reports/macro-report-apr26.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-navy-light rounded-xl p-4 border border-navy-border flex items-start gap-3 hover:border-white/30 transition-colors"
                >
                <FileText className="w-6 h-6 text-white flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-white">
                    ISMF Macro Outlook — April 2026
                  </p>
                  <p className="text-xs text-white/70 mt-1 leading-relaxed">
                    Macro environment, market themes, and current positioning for April 2026.
                  </p>
                </div>
              </a>
              <a
                href={`${import.meta.env.BASE_URL}reports/macro-report-jan26.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-navy-light rounded-xl p-4 border border-navy-border flex items-start gap-3 hover:border-white/30 transition-colors"
                >
                <FileText className="w-6 h-6 text-white flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-white">
                    ISMF Macro Outlook — January 2026
                  </p>
                  <p className="text-xs text-white/70 mt-1 leading-relaxed">
                    Macro environment, market themes, and current positioning for January 2026.
                  </p>
                </div>
              </a>
              <a
                href={`${import.meta.env.BASE_URL}reports/ismf-macro-report-nov.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-navy-light rounded-xl p-4 border border-navy-border flex items-start gap-3 hover:border-white/30 transition-colors"
                >
                <FileText className="w-6 h-6 text-white flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-white">
                    ISMF Macro Outlook — November 2025
                  </p>
                  <p className="text-xs text-white/70 mt-1 leading-relaxed">
                    A concise overview of the macro environment, market themes, and our current positioning.
                  </p>
                </div>
              </a>
          </div>
        </div>
      </section>

      {/* Commodities newsletter */}
      <section className="pt-32 border-t border-navy-border">
        <div className="bg-navy-mid rounded-2xl shadow-md p-6 sm:p-8 border border-navy-border">
          <h2 className="text-xl font-semibold mb-3 text-white">
            Commodities Newsletter
          </h2>
          <p className="text-sm sm:text-base text-white/70 mb-6 leading-relaxed">
            Bi-weekly updates from the ISMF Commodities Research Team on energy,
            metals, and commodity markets—covering supply, demand, geopolitics, and
            portfolio implications.
          </p>

          <div className="space-y-4">
            <a
              href={`${import.meta.env.BASE_URL}reports/commodities-newsletter-2.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-navy-light rounded-xl p-4 border border-navy-border flex items-start gap-3 hover:border-white/30 transition-colors"
                >
                <FileText className="w-6 h-6 text-white flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-white">
                  ISMF Commodities Newsletter — Edition 2
                </p>
                <p className="text-xs text-white/70 mt-1 leading-relaxed">
                  How shipping paralysis and Hormuz disruption are rewiring energy, logistics, and aluminium markets.
                </p>
              </div>
            </a>
            <a
              href={`${import.meta.env.BASE_URL}reports/commodities-newsletter-1.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-navy-light rounded-xl p-4 border border-navy-border flex items-start gap-3 hover:border-white/30 transition-colors"
                >
                <FileText className="w-6 h-6 text-white flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-white">
                  ISMF Commodities Newsletter — Edition 1
                </p>
                <p className="text-xs text-white/70 mt-1 leading-relaxed">
                  Oil market dynamics, silver positioning, and key drivers across energy and precious metals.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="pt-32 border-t border-navy-border">
        <div className="bg-navy-mid rounded-2xl shadow-md p-6 sm:p-8 border border-navy-border">
          <h2 className="text-xl font-semibold mb-3 text-white">
            Case Studies
          </h2>
          <p className="text-sm sm:text-base text-white/70 mb-6 leading-relaxed">
            Deep-dive studies from the ISMF Macroeconomic Research Team on
            individual economies—tracing historical context, debt dynamics,
            inflation, and policy constraints.
          </p>

          <div className="space-y-4">
            <a
              href={`${import.meta.env.BASE_URL}reports/argentina-case-study.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-navy-light rounded-xl p-4 border border-navy-border flex items-start gap-3 hover:border-white/30 transition-colors"
                >
                <FileText className="w-6 h-6 text-white flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-white">
                  Argentina Case Study
                </p>
                <p className="text-xs text-white/70 mt-1 leading-relaxed">
                  How recurring crises, inflation, and debt dynamics have shaped Argentina&apos;s macroeconomic history and policy constraints.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Education guides */}
      <section className="pt-32 border-t border-navy-border">
        <div className="bg-navy-mid rounded-2xl shadow-md p-6 sm:p-8 border border-navy-border">
          <h2 className="text-xl font-semibold mb-3 text-white">
            Education Guides
          </h2>
          <p className="text-sm sm:text-base text-white/70 mb-6 leading-relaxed">
            Introductory guides to help members build practical market
            knowledge—covering core concepts, mechanics, strategies, and risks in
            plain language.
          </p>

          <div className="space-y-4">
            <a
              href={`${import.meta.env.BASE_URL}reports/beginners-guide-to-options.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-navy-light rounded-xl p-4 border border-navy-border flex items-start gap-3 hover:border-white/30 transition-colors"
                >
                <FileText className="w-6 h-6 text-white flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-white">
                  A Beginner&apos;s Guide to Options
                </p>
                <p className="text-xs text-white/70 mt-1 leading-relaxed">
                  Option structure, mechanics, payoffs, and key concepts for calls, puts, and derivatives trading.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
      </div>
    </main>
    </>
  );
}
