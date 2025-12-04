// import { Navigation } from "@/components/Navigation";
import { Helmet } from "react-helmet";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { Sectors } from "@/components/Sectors";
// import { MacroDashboard } from "@/components/MacroDashboard";
import { EducationSection } from "@/components/EducationSection";
import { Partners } from "@/components/Partners";
import { JoinSection } from "@/components/JoinSection";
// import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Home — Irish Student Managed Fund",
  description: "Welcome to the Irish Student Managed Fund, where education meets empowerment. We're on a mission to revolutionise the student experience by providing a unique investment platform tailored for students."
};

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Home — Irish Student Managed Fund</title>
        <meta name="description" content="Welcome to the Irish Student Managed Fund, where education meets empowerment. We're on a mission to revolutionise the student experience by providing a unique investment platform tailored for students." />
        <meta property="og:title" content="Home — Irish Student Managed Fund" />
        <meta property="og:description" content="Welcome to the Irish Student Managed Fund, where education meets empowerment. We're on a mission to revolutionise the student experience by providing a unique investment platform tailored for students." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home — Irish Student Managed Fund" />
        <meta name="twitter:description" content="Welcome to the Irish Student Managed Fund, where education meets empowerment. We're on a mission to revolutionise the student experience by providing a unique investment platform tailored for students." />
      </Helmet>
      <div className="min-h-screen">

      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <div id="sectors">
          <Sectors />
        </div>
        {/* Performance content moved to /performance page */}
        <EducationSection />
        <Partners />
        <JoinSection />
      </main>

    </div>
    </>
  );
};

export default Index;
