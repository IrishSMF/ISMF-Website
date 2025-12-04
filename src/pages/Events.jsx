import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import EventsCalendar from "@/components/ui/EventsCalendar";

export const metadata = {
  title: "Events — Irish Student Managed Fund",
  description: "Our events are a great way to gain knowledge about finance and network with other students and industry professionals."
};

export default function Events() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Events — Irish Student Managed Fund</title>
        <meta name="description" content="Our events are a great way to gain knowledge about finance and network with other students and industry professionals." />
        <meta property="og:title" content="Events — Irish Student Managed Fund" />
        <meta property="og:description" content="Our events are a great way to gain knowledge about finance and network with other students and industry professionals." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Events — Irish Student Managed Fund" />
        <meta name="twitter:description" content="Our events are a great way to gain knowledge about finance and network with other students and industry professionals." />
      </Helmet>
      <section className="w-full bg-[#FFFDF5]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 sm:px-6 lg:px-8">
        <header className="max-w-2xl mx-auto text-center space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#0A0A0A] leading-tight">Events</h1>
          <p className="text-lg text-[#4A4A4A]">
            Our events are a great way to gain knowledge about finance and network with other students and industry professionals.
          </p>
        </header>
        <EventsCalendar />
      </div>
    </section>
    </>
  );
}
