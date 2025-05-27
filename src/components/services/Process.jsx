import React, { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

const processSteps = [
  {
    number: 1,
    title: "Discovery",
    description: "Understanding your requirements and project goals",
    colorBg: "bg-blue-600",
  },
  {
    number: 2,
    title: "Planning",
    description: "Creating detailed project roadmap and architecture",
    colorBg: "bg-green-600",
  },
  {
    number: 3,
    title: "Development",
    description: "Agile development with regular progress updates",
    colorBg: "bg-purple-600",
  },
  {
    number: 4,
    title: "Deployment",
    description: "Testing, optimization, and seamless launch",
    colorBg: "bg-orange-600",
  },
];
const Process = () => {
    const { ref, inView, entry } = useInView({ triggerOnce: true });
  return (
    <div ref={ref} className={`bg-gray-50 rounded-2xl p-8 lg:p-12 ${inView && 'animate-fade-in-up'}`}>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 sora-family">
              My Development Process
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto inter-family">
              A proven methodology that ensures quality delivery and client
              satisfaction from initial consultation to final deployment.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <ProcessStep key={index} step={step} index={index} />
            ))}
          </div>
        </div>
  )
}
const ProcessStep=({ step, index })=> {
  const stepRef = useRef();
  const circleRef = useRef();

  useEffect(() => {
    const stepEl = stepRef.current;
    if (!stepEl) return;
    stepEl.style.animationDelay = `${index * 0.2}s`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const circle = circleRef.current;
            if (!circle) return;
            circle.classList.add("animate-pulse");
            setTimeout(() => {
              circle.classList.remove("animate-pulse");
              circle.classList.add("animate-bounce");
            }, 500);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(stepEl);

    return () => {
      observer.unobserve(stepEl);
    };
  }, [index]);

  return (
    <div
      ref={stepRef}
      className="text-center animate-fade-in-up"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div
        ref={circleRef}
        className={`${step.colorBg} text-white rounded-full 
        flex items-center justify-center mx-auto mb-4 text-xl 
        font-bold animate-bounce w-16 h-16 inter-family`}
      >
        {step.number}
      </div>
      <h4 className="font-bold text-gray-900 mb-2 sora-family">{step.title}</h4>
      <p className="text-gray-600 text-sm inter-family">{step.description}</p>
    </div>
  );
}
export default Process
