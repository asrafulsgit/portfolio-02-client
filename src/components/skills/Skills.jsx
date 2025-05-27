import { useEffect, useRef } from 'react';
import Tools from './Tools';
import Learning from './Learning';
import Header from './Header';

const Skills = () => {
  const skillsRef = useRef(null);
  const frontEnd =[
      {
        name: "React",
        percentage: 95,
        color: "bg-blue-600"
      },
      {
        name: "JavaScript",
        percentage: 90,
        color: "bg-yellow-500"
      },
      {
        name: "TypeScript",
        percentage: 85,
        color: "bg-blue-500"
      },
      {
        name: "Vue.js",
        percentage: 80,
        color: "bg-green-500"
      },
      {
        name: "CSS/Tailwind",
        percentage: 92,
        color: "bg-purple-500"
      }
    
 ]
  const backend = [
      {
        name: "Node.js",
        percentage: 88,
        color: "bg-green-600"
      },
      {
        name: "Python",
        percentage: 82,
        color: "bg-blue-500"
      },
      {
        name: "PostgreSQL",
        percentage: 85,
        color: "bg-indigo-600"
      },
      {
        name: "MongoDB",
        percentage: 78,
        color: "bg-green-500"
      },
      {
        name: "Express.js",
        percentage: 90,
        color: "bg-gray-700"
      }
    

];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px 0px -50px 0px'
    };

    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const skillBars = entry.target.querySelectorAll('[data-width]');
          
          skillBars.forEach((bar, index) => {
            setTimeout(() => {
              const width = bar.getAttribute('data-width');
              bar.style.width = width;
            }, index * 200);
          });
          
          skillObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const toolObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, { threshold: 0.1 });

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const percentageElements = entry.target.querySelectorAll('.text-sm.text-gray-600');
          
          percentageElements.forEach(element => {
            const percentage = parseInt(element.textContent);
            element.textContent = '0%';
            
            setTimeout(() => {
              animateCounter(element, percentage);
            }, 500);
          });
          
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    const animateCounter = (element, target, duration = 2000) => {
      const start = 0;
      const increment = target / (duration / 16);
      let current = start;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        element.textContent = Math.floor(current) + '%';
      }, 16);
    };

    // Observe skill sections
    const skillSections = document.querySelectorAll('#skills .space-y-8');
    skillSections.forEach(section => {
      skillObserver.observe(section);
      counterObserver.observe(section);
    });

    // Tool cards animation
    const toolCards = document.querySelectorAll('.tool-card');
    toolCards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`;
      toolObserver.observe(card);
    });

    // Certification cards animation
    const certCards = document.querySelectorAll('#skills .bg-white.p-6');
    certCards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.2}s`;
      toolObserver.observe(card);
    });

    // Skill bar hover effects
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
      item.addEventListener('mouseenter', function() {
        const bar = this.querySelector('[data-width]');
        bar.classList.add('animate-pulse');
      });

      item.addEventListener('mouseleave', function() {
        const bar = this.querySelector('[data-width]');
        bar.classList.remove('animate-pulse');
      });
    });

    // Tool card hover effects with rotation
    toolCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) rotate(2deg)';
      });

      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotate(0deg)';
      });
    });

    // Add floating animation to certification icons
    const certIcons = document.querySelectorAll('#skills .w-16.h-16');
    certIcons.forEach((icon, index) => {
      icon.style.animation = `float 3s ease-in-out infinite ${index * 0.5}s`;
    });

    return () => {
      skillObserver.disconnect();
      toolObserver.disconnect();
      counterObserver.disconnect();
      skillItems.forEach(item => {
        item.removeEventListener('mouseenter', () => {});
        item.removeEventListener('mouseleave', () => {});
      });
      toolCards.forEach(card => {
        card.removeEventListener('mouseenter', () => {});
        card.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <section id="skills" className="py-15 bg-white" ref={skillsRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Header />

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Frontend Skills */}
              <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 sora-family">Frontend Development</h3>
          {frontEnd.map((skill,index)=>{
            return(
            <div className="space-y-6 inter-family" key={index}>
              <div className="skill-item">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-semibold text-gray-800 ">{skill.name}</span>
                  <span className="text-sm text-gray-600">{skill.percentage}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className={`${skill.color} h-3 rounded-full transition-all duration-1000 
                  ease-out`} style={{ width: '0%' }} data-width={`${skill.percentage}%`}></div>
                </div>
              </div>
            </div>
            )
          }) }
          </div>

          {/* Backend Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 sora-family">Backend Development</h3>
            {backend.map((skill,index)=>{
            return(
            <div className="space-y-6 inter-family" key={index}>
              <div className="skill-item">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-semibold text-gray-800">{skill.name}</span>
                  <span className="text-sm text-gray-600">{skill.percentage}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className={`${skill.color} h-3 rounded-full transition-all duration-1000 
                  ease-out`} style={{ width: '0%' }} data-width={`${skill.percentage}%`}></div>
                </div>
              </div>
            </div>
            )
          }) }
            
          </div>
        </div>

        {/* Tools & Technologies Grid */}
        <Tools />

        {/* Certifications & Learning */}
        <Learning />
      </div>

    
    </section>
  );
};

export default Skills ;