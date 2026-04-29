"use client";

import Link from "next/link";
import { useState, useCallback } from "react";

const ZCASH_SVG_PATH =
  "m270,540c0-148.9,121.1-270,270-270s270,121.1,270,270-121.1,270-270,270-270-121.1-270-270Zm366.31-125.3v41.09l-114.28,155h114.28v54.5h-73.67v45.16h-45.28v-45.16h-73.67v-41.09l114.16-155h-114.16v-54.5h73.67v-45.28h45.28v45.28h73.67Z";

interface NavLink {
  readonly label: string;
  readonly href: string;
  readonly highlight?: boolean;
}

const NAV_LINKS: readonly NavLink[] = [
  { label: "Why", href: "#why" },
  { label: "Case Study", href: "#case-study" },
  { label: "Payouts", href: "#payouts" },
  { label: "Matrix", href: "#methodology" },
  { label: "Disclosure", href: "#disclosure" },
  { label: "Hall of Fame", href: "/hall-of-fame", highlight: true },
] as const;

function scrollToHash(hash: string): void {
  const id = hash.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (href.startsWith("#")) {
        const isHome =
          window.location.pathname === "/" || window.location.pathname === "";
        if (isHome) {
          e.preventDefault();
          scrollToHash(href);
        } else {
          e.preventDefault();
          window.location.href = "/" + href;
        }
        setMenuOpen(false);
      }
    },
    [],
  );

  return (
    <>
      <header id="nav">
        <div className="nav-w">
          <Link href="/" className="brand" aria-label="bountyzcash.org">
            <svg
              width="30"
              height="30"
              viewBox="0 0 1080 1080"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
            >
              <path d={ZCASH_SVG_PATH} fill="#F4B728" fillRule="evenodd" />
            </svg>
            <div className="brand-text">
              <span className="w">bounty</span>
              <span className="g">zcash</span>
              <span className="d">.</span>
              <span className="g">org</span>
            </div>
          </Link>

          <nav className="nav-links" aria-label="Primary">
            {NAV_LINKS.map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.label}
                  href={link.href}
                  className="nl"
                  style={link.highlight ? { color: "var(--gold)" } : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="nl"
                  style={link.highlight ? { color: "var(--gold)" } : undefined}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              ),
            )}
          </nav>

          <a
            href="#submit"
            className="nav-cta"
            onClick={(e) => handleNavClick(e, "#submit")}
          >
            Submit ↗
          </a>

          <button
            className="hbg"
            onClick={toggleMenu}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div
        className={`mob${menuOpen ? " open" : ""}`}
        id="mobMenu"
        aria-hidden={!menuOpen}
      >
        {NAV_LINKS.map((link) =>
          link.href.startsWith("/") ? (
            <Link
              key={link.label}
              href={link.href}
              style={link.highlight ? { color: "var(--gold)" } : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ) : (
            <a
              key={link.label}
              href={link.href}
              style={link.highlight ? { color: "var(--gold)" } : undefined}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ),
        )}
        <a
          href="#submit"
          className="btn btn-y"
          style={{ marginTop: "0.5rem" }}
          onClick={(e) => handleNavClick(e, "#submit")}
        >
          Submit Report
        </a>
      </div>
    </>
  );
}
