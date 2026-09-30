import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, ShieldCheck, Eye, EyeOff } from "lucide-react";

interface NavigationProps {
  onOpenExplorer: () => void;
  onOpenSignIn: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  onOpenExplorer,
  onOpenSignIn,
  onNavigateSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [forcedReducedMotion, setForcedReducedMotion] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      const sections = [
        "problem",
        "product",
        "preview",
        "viewer",
        "rights",
        "audience",
        "principles",
      ];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection("hero");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleReducedMotion = () => {
    const next = !forcedReducedMotion;
    setForcedReducedMotion(next);
    if (next) {
      document.documentElement.classList.add("reduced-motion-override");
    } else {
      document.documentElement.classList.remove("reduced-motion-override");
    }
  };

  const navLinks = [
    { id: "product", label: "Product" },
    { id: "problem", label: "Why Rights Matter" },
    { id: "preview", label: "How it works" },
    { id: "audience", label: "For teams" },
    { id: "principles", label: "Principles" },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigateSection(id);
  };

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#101010]/95 backdrop-blur-md border-b border-[rgba(245,242,234,0.1)] py-3"
            : "bg-transparent border-b border-transparent py-5"
        }`}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition:
            "background-color 250ms, border-color 250ms, padding 250ms",
          backgroundColor: isScrolled
            ? "rgba(16, 16, 16, 0.94)"
            : "transparent",
          borderBottom: isScrolled
            ? "1px solid rgba(245, 242, 234, 0.12)"
            : "1px solid transparent",
          padding: isScrolled ? "12px 0" : "22px 0",
          backdropFilter: isScrolled ? "blur(12px)" : "none",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Brand Wordmark */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-3 group"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              textDecoration: "none",
              color: "var(--warm-white)",
            }}
            aria-label="MediaMerge Home"
          >
            {/* Minimal Geometric Aperture Glyph */}
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              style={{ flexShrink: 0 }}
            >
              <rect
                x="0.5"
                y="0.5"
                width="25"
                height="25"
                stroke="var(--warm-white)"
                strokeWidth="1"
              />
              <circle cx="13" cy="13" r="3.5" fill="var(--accent-violet)" />
              <line
                x1="13"
                y1="1"
                x2="13"
                y2="7"
                stroke="var(--warm-white)"
                strokeWidth="1"
              />
              <line
                x1="13"
                y1="19"
                x2="13"
                y2="25"
                stroke="var(--warm-white)"
                strokeWidth="1"
              />
              <line
                x1="1"
                y1="13"
                x2="7"
                y2="13"
                stroke="var(--warm-white)"
                strokeWidth="1"
              />
              <line
                x1="19"
                y1="13"
                x2="25"
                y2="13"
                stroke="var(--warm-white)"
                strokeWidth="1"
              />
            </svg>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                }}
              >
                MediaMerge
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.625rem",
                  letterSpacing: "0.08em",
                  color: "var(--muted-gray)",
                  marginTop: "2px",
                }}
              >
                SYS.V2 · RIGHTS & STREAMING
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            role="navigation"
            aria-label="Primary Navigation"
            style={{
              display: "none",
              alignItems: "center",
              gap: "32px",
            }}
            className="desktop-nav"
          >
            <ul
              style={{
                display: "flex",
                alignItems: "center",
                gap: "28px",
                listStyle: "none",
                margin: 0,
                padding: 0,
              }}
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.id}>
                    <button
                      onClick={() => handleLinkClick(link.id)}
                      aria-current={isActive ? "true" : undefined}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.8125rem",
                        letterSpacing: "0.04em",
                        color: isActive
                          ? "var(--warm-white)"
                          : "var(--soft-gray)",
                        padding: "6px 2px",
                        position: "relative",
                        transition: "color var(--transition-fast)",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--warm-white)")
                      }
                      onMouseLeave={(e) => {
                        if (!isActive)
                          e.currentTarget.style.color = "var(--soft-gray)";
                      }}
                    >
                      {link.label}
                      {isActive && (
                        <span
                          style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: "1px",
                            backgroundColor: "var(--accent-violet)",
                          }}
                        />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Quick Accessibility Toggle */}
            <button
              onClick={toggleReducedMotion}
              aria-label={
                forcedReducedMotion
                  ? "Enable interface animation"
                  : "Disable interface animation"
              }
              title={
                forcedReducedMotion ? "Motion is reduced" : "Reduce motion"
              }
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontFamily: "var(--font-mono)",
                fontSize: "0.6875rem",
                color: forcedReducedMotion
                  ? "var(--accent-violet)"
                  : "var(--muted-gray)",
                border: "1px solid var(--rule-light)",
                padding: "4px 8px",
                borderRadius: "var(--radius-xs)",
                transition: "border-color var(--transition-fast)",
              }}
            >
              {forcedReducedMotion ? <EyeOff size={12} /> : <Eye size={12} />}
              <span>
                {forcedReducedMotion ? "Reduced Motion: ON" : "Motion: Normal"}
              </span>
            </button>

            {/* Sign in button */}
            <button
              onClick={onOpenSignIn}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.8125rem",
                letterSpacing: "0.04em",
                color: "var(--soft-gray)",
                padding: "8px 12px",
                transition: "color var(--transition-fast)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--warm-white)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--soft-gray)")
              }
            >
              Sign in
            </button>

            {/* Primary Action Button */}
            <button
              onClick={onOpenExplorer}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.8125rem",
                letterSpacing: "0.04em",
                fontWeight: 500,
                backgroundColor: "var(--warm-white)",
                color: "var(--ink)",
                padding: "10px 18px",
                borderRadius: "var(--radius-xs)",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                border: "1px solid var(--warm-white)",
                transition: "all var(--transition-fast)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--accent-violet)";
                e.currentTarget.style.color = "#FFFFFF";
                e.currentTarget.style.borderColor = "var(--accent-violet)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--warm-white)";
                e.currentTarget.style.color = "var(--ink)";
                e.currentTarget.style.borderColor = "var(--warm-white)";
              }}
            >
              <span>Explore the system</span>
              <ArrowUpRight size={14} aria-hidden="true" />
            </button>
          </nav>

          {/* Mobile Menu Button with Visible Text Label */}
          <div
            className="mobile-nav-toggle"
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={
                mobileMenuOpen
                  ? "Close main navigation menu"
                  : "Open main navigation menu"
              }
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 14px",
                border: "1px solid var(--rule-light)",
                borderRadius: "var(--radius-xs)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.8125rem",
                color: "var(--warm-white)",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                minHeight: "44px",
                minWidth: "44px",
              }}
            >
              {mobileMenuOpen ? (
                <>
                  <X size={16} aria-hidden="true" />
                  <span>Close</span>
                </>
              ) : (
                <>
                  <Menu size={16} aria-hidden="true" />
                  <span>Menu</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
            style={{
              position: "fixed",
              top: "100%",
              left: 0,
              right: 0,
              backgroundColor: "var(--ink-surface)",
              borderBottom: "1px solid var(--rule-light)",
              padding: "24px 20px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.8)",
            }}
          >
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      padding: "12px 0",
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.25rem",
                      color: "var(--warm-white)",
                      borderBottom: "1px solid var(--rule-light)",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight
                      size={16}
                      style={{ color: "var(--muted-gray)" }}
                    />
                  </button>
                </li>
              ))}
            </ul>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginTop: "12px",
              }}
            >
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenExplorer();
                }}
                style={{
                  width: "100%",
                  padding: "14px",
                  backgroundColor: "var(--warm-white)",
                  color: "var(--ink)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  borderRadius: "var(--radius-xs)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span>Explore the system</span>
                <ArrowUpRight size={16} />
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSignIn();
                }}
                style={{
                  width: "100%",
                  padding: "14px",
                  backgroundColor: "transparent",
                  color: "var(--soft-gray)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.875rem",
                  border: "1px solid var(--rule-light)",
                  borderRadius: "var(--radius-xs)",
                }}
              >
                Sign in
              </button>

              <button
                onClick={toggleReducedMotion}
                style={{
                  padding: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--muted-gray)",
                }}
              >
                {forcedReducedMotion ? <EyeOff size={14} /> : <Eye size={14} />}
                <span>
                  {forcedReducedMotion
                    ? "Animations Disabled"
                    : "Animations Enabled"}
                </span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Responsive media query styling */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-nav-toggle {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};
