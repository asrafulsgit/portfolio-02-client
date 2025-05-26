import { useEffect, useRef, useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleLinkClick = (e) => {
      const targetId = e.target.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const offsetTop = target.offsetTop - 64;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        });
        closeMenu();
      }
    };

    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach((link) => {
      link.addEventListener('click', handleLinkClick);
    });

    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPos = window.scrollY + 100;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        const navLink = document.querySelector(`nav a[href="#${id}"]`);
        if (navLink) {
          if (scrollPos >= top && scrollPos < top + height) {
            navLinks.forEach((link) => {
              link.classList.remove('text-blue-600');
              link.classList.add('text-gray-700');
            });
            navLink.classList.remove('text-gray-700');
            navLink.classList.add('text-blue-600');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener('click', handleLinkClick);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav id="header" className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
              Portfolio
            </a>
          </div>

          <div className="hidden md:block">
            <ul className="flex space-x-8">
              {['home', 'about', 'projects', 'skills', 'testimonials', 'contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="text-gray-700 hover:text-blue-600 transition-colors font-medium capitalize"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:hidden">
            <button
              ref={menuButtonRef}
              onClick={toggleMenu}
              aria-expanded={menuOpen}
              aria-label="Toggle menu"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {menuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <ul className="space-y-1">
                {['home', 'about', 'projects', 'skills', 'testimonials', 'contact'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item}`}
                      onClick={closeMenu}
                      className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md font-medium capitalize"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
