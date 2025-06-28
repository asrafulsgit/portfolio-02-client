import React from "react";
import Header from "./Header";
import Form from "./Form";
import Contact_info from "./Contact_info";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const { ref, inView, entry } = useInView({ triggerOnce: true });

  return (
    <section className="pb-15 pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <div ref={ref} className={`grid lg:grid-cols-2 gap-16 items-start
          ${inView && 'animate-fade-in-up'}`}>
          <Form />
          <Contact_info />
        </div>
      </div>
    </section>
  );
};

export default Contact;
