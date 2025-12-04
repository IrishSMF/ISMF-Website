import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

export const metadata = {
  title: "Events — Irish Student Managed Fund",
  description: "Our events are a great way to gain knowledge about finance and network with other students and industry professionals."
};

const Events: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
      <Helmet>
        <title>Events — Irish Student Managed Fund</title>
        <meta name="description" content="Our events are a great way to gain knowledge about finance and network with other students and industry professionals." />
      </Helmet>
      <section className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold">Events</h1>
    </section>
    </>
  );
};

export default Events;


