const ZCASH_SVG_PATH =
  "m270,540c0-148.9,121.1-270,270-270s270,121.1,270,270-121.1,270-270,270-270-121.1-270-270Zm366.31-125.3v41.09l-114.28,155h114.28v54.5h-73.67v45.16h-45.28v-45.16h-73.67v-41.09l114.16-155h-114.16v-54.5h73.67v-45.28h45.28v45.28h73.67Z";

interface FooterLink {
  readonly label: string;
  readonly href: string;
  readonly external?: boolean;
}

const FOOTER_LINKS: readonly FooterLink[] = [
  { label: "z.cash", href: "https://z.cash", external: true },
  { label: "ZODL", href: "https://zodl.com", external: true },
  { label: "Foundation", href: "https://zfnd.org", external: true },
  {
    label: "OWASP",
    href: "https://owasp.org/www-community/OWASP_Risk_Rating_Methodology",
    external: true,
  },
  { label: "Rules", href: "#rules" },
  {
    label: "security.txt",
    href: "https://bountyzcash.org/.well-known/security.txt",
  },
] as const;

export function Footer() {
  return (
    <footer>
      <div className="foot">
        <div className="fl2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 1080 1080"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            style={{ opacity: 0.28, flexShrink: 0 }}
          >
            <path d={ZCASH_SVG_PATH} fill="#F4B728" fillRule="evenodd" />
          </svg>
          <div className="fc">
            <strong>bountyzcash.org</strong>
            <span>An open Zcash security initiative</span>
            <span>&copy; 2026 bountyzcash.org &middot; OWASP Risk Rating</span>
          </div>
        </div>
        <nav className="flinks" aria-label="Footer">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener" } : {})}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
