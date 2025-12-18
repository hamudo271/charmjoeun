import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) =>
    location.pathname === path
      ? "text-primary font-bold"
      : "text-gray-700 hover:text-primary transition-colors duration-300";

  const navLinks = [
    { path: "/intro", label: "치과 소개" },
    { path: "/orthodontics", label: "치아교정" },
    { path: "/doctors", label: "의료진 소개" },
    { path: "/general", label: "일반진료" },
    { path: "/location", label: "오시는 길" },
  ];

  const languages = [
    { code: "KR", label: "한국어" },
    { code: "EN", label: "English" },
    { code: "JP", label: "日本語" },
    { code: "CN", label: "简体中文" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined text-primary text-3xl">
                dentistry
              </span>
            </div>
            <div className="flex flex-col">
              <span
                className={`font-display font-bold text-xl tracking-wide leading-none ${
                  isScrolled ? "text-gray-900" : "text-gray-900"
                }`}
              >
                CHARMJOEUN
              </span>
              <span className="text-[10px] tracking-[0.2em] text-gray-500 uppercase font-medium mt-0.5">
                Dental Clinic
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide relative group py-2 ${isActive(
                  link.path
                )}`}
                title={link.label}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Right Side: Language & Reservation */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center divide-x divide-gray-300 text-xs font-medium text-gray-500">
              {languages.map((lang, idx) => (
                <button
                  key={lang.code}
                  className={`px-2 hover:text-primary transition-colors ${
                    idx === 0 ? "text-primary font-bold" : ""
                  }`}
                >
                  {lang.code}
                </button>
              ))}
            </div>
            <Link
              to="#"
              className="bg-gray-900 hover:bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>진료 예약</span>
              <span className="material-symbols-outlined text-sm">
                calendar_month
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-black transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 lg:hidden flex flex-col">
          <div className="flex justify-between items-center p-6 border-b border-gray-100">
            <span className="font-display font-bold text-xl">MENU</span>
            <button onClick={() => setIsMenuOpen(false)} className="p-2">
              <span className="material-symbols-outlined text-3xl">close</span>
            </button>
          </div>
          <div className="flex flex-col p-8 gap-6 overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-2xl font-bold text-gray-800 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <hr className="border-gray-100 my-4" />
            <div className="flex flex-wrap gap-4">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  className="text-sm font-medium text-gray-500 hover:text-primary"
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
