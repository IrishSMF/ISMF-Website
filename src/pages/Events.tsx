import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const Events: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
      <Helmet>
        <title>Events — Irish Student Managed Fund</title>
      </Helmet>
      <section className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold">Events</h1>
    </section>
    </>
  );
};

export default Events;


