import { useRef, useState } from 'react';
import { Link } from 'react-scroll';
import './navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
      setTimeout(() => setMenuVisible(false), 300);
    } else {
      setMenuVisible(true);
      setTimeout(() => setMenuOpen(true), 10);
    }
  };

  const navItems = [
    { name: 'Home', section: 'home' },
    { name: 'About', section: 'about' },
    { name: 'Services', section: 'services' },
    { name: 'Portfolio', section: 'portfolio' },
    { name: 'Skills', section: 'skills' },
    { name: 'Contact', section: 'contact' },
  ];

  const [activeSection, setActiveSection] = useState('home');

  return (
    <>
      <nav
        id="header"
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 navbar-section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="z-10 flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link
                to="home"
                duration={0}
                className="text-2xl font-bold text-gray-900 cursor-default sora-family"
              >
                AS<span className="text-blue-600 text-sm">Dev</span>
              </Link>
            </div>

            <div className="hidden md:block inter-family">
              <ul className="flex space-x-8">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.section}
                      smooth={true}
                      duration={0}
                      spy={true}
                      activeClass="active"
                      onSetActive={() => setActiveSection(item.section)}
                      className={`text-gray-700 hover:text-blue-600 transition-colors font-medium capitalize cursor-pointer ${
                        activeSection === item.section ? 'active' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
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
        </div>
      </nav>

      {/* ✅ Animated Mobile Menu Below Navbar */}
      {menuVisible && (
        <div
          className={`fixed top-16 left-0 w-full md:hidden z-40 transition-all duration-300 ease-in-out overflow-hidden ${
            menuOpen ? 'animate-slideDown' : 'animate-slideUp'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.section}
                    smooth={true}
                    duration={0}
                    spy={true}
                    activeClass="active"
                    onSetActive={() => setActiveSection(item.section)}
                    onClick={toggleMenu}
                    className={`block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md font-medium capitalize ${
                      activeSection === item.section ? 'active' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
