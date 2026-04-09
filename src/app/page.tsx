"use client";

import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { CanvasBg } from "@/components/canvas-bg";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { BorderBeam } from "@/components/ui/border-beam";
import { HyperText } from "@/components/ui/hyper-text";
import { SplitFlapDisplay } from "@/components/ui/split-flap-display";
import { SubmitForm } from "@/components/submit-form";

const ZCASH_SVG_PATH =
  "m270,540c0-148.9,121.1-270,270-270s270,121.1,270,270-121.1,270-270,270-270-121.1-270-270Zm366.31-125.3v41.09l-114.28,155h114.28v54.5h-73.67v45.16h-45.28v-45.16h-73.67v-41.09l114.16-155h-114.16v-54.5h73.67v-45.28h45.28v45.28h73.67Z";

interface WhyCard {
  readonly num: string;
  readonly title: string;
  readonly body: string;
}

const WHY_CARDS: readonly WhyCard[] = [
  {
    num: "01",
    title: "A Formal Channel Exists Now",
    body: "Before this, responsible disclosure depended entirely on individual goodwill. Serious security researchers need an address to go to when they find something. Now one exists \u2014 with clear rules, a guaranteed reward, and a 5-day response SLA.",
  },
  {
    num: "02",
    title: "Breaks the Bad-Timing Cycle",
    body: "The Zcash community knows the pattern: the market shows interest, then a vulnerability headline appears. An active bounty program changes who finds bugs first \u2014 researchers who want to be paid to help, not exploits leaking at the worst possible moment.",
  },
  {
    num: "03",
    title: "Solves the PR Problem",
    body: 'Uncoordinated disclosure on social media turns "25k ZEC at risk in a deprecated pool" into "ZCASH VULNERABLE." This program creates an alternative: a formal path that pays well, moves fast, and coordinates public announcements with proper technical context \u2014 not Twitter\u2019s algorithm.',
  },
  {
    num: "04",
    title: "Credibility Infrastructure",
    body: "Every bug found and resolved here is verifiable proof that the ecosystem works. This is the same standard that makes the world trust OpenSSL and the Linux kernel. Bug bounty programs are not admissions of weakness \u2014 they are how serious protocols are maintained.",
  },
  {
    num: "05",
    title: "AI-Assisted Research Is Here",
    body: "Scalar found the Sprout bug with AI. That capability is democratizing fast. Hundreds of researchers with automated analysis tools will scan public protocols in the next 12\u201324 months. This program defines the incentive for what happens when they find something.",
  },
  {
    num: "06",
    title: "Multi-Org Accountability",
    body: "No single organization controls severity classification or disclosure timing. The multi-org triage model prevents both downplaying and sensationalizing \u2014 the two failure modes that destroy community trust.",
  },
] as const;

interface TimelineEntry {
  readonly date: string;
  readonly text: string;
  readonly strongParts?: readonly string[];
}

const TIMELINE: readonly TimelineEntry[] = [
  {
    date: "Jul 2020",
    text: "Bug silently introduced in zcashd v3.1.0 \u2014 fChecked flag optimization causes Sprout proof verification to be skipped during block connection.",
  },
  {
    date: "Jun 2023",
    text: "Zebra 1.0.0 goes live on mainnet, correctly verifying all transactions \u2014 becoming a critical safety net.",
  },
  {
    date: "Mar 23",
    text: "Scalar privately reports the vulnerability to Shielded Labs. No public disclosure, no mention of reward.",
  },
  {
    date: "Mar 24",
    text: "Shielded Labs convenes with ZODL engineers. Patch authored by str4d, reviewed by Daira-Emma Hopwood and Kris Nuttycombe. ViaBTC, Luxor, F2Pool contacted.",
  },
  {
    date: "Mar 25\u201326",
    text: "All 4 major pools (ViaBTC, Luxor, F2Pool, AntPool) confirm patch deployment. Zero exploitation window.",
  },
  {
    date: "Mar 31",
    text: "zcashd v6.12.0 released publicly. Coordinated disclosure posted by Zooko on Zcash Community Forum.",
  },
] as const;

interface Tier {
  readonly badge: string;
  readonly badgeClass: string;
  readonly amount: string;
  readonly amountEm: string;
  readonly desc: string;
  readonly pills: readonly string[];
}

const TIERS: readonly Tier[] = [
  {
    badge: "Critical",
    badgeClass: "bc",
    amount: "up to ",
    amountEm: "$30,000 in ZEC",
    desc: "RCE, consensus failure, catastrophic privacy breach, shielded pool drain, or ZKP forgery. Full-chain threat with maximum impact and high exploitability.",
    pills: ["Likelihood 7\u20139", "Impact 7\u20139", "OWASP CRITICAL"],
  },
  {
    badge: "High",
    badgeClass: "bh",
    amount: "up to ",
    amountEm: "$15,000 in ZEC",
    desc: "Significant privacy or security vulnerability with broad impact. Orchard/Sapling protocol issues or wallet key exposure under exploitable conditions.",
    pills: ["Likelihood 5\u20137", "Impact 5\u20137", "OWASP HIGH"],
  },
  {
    badge: "Medium",
    badgeClass: "bm",
    amount: "up to ",
    amountEm: "$5,000 in ZEC",
    desc: "Limited privacy impact, DoS, or transaction malleability that doesn\u2019t break consensus. Partial anonymity set reduction.",
    pills: ["Likelihood 3\u20135", "Impact 3\u20135", "OWASP MEDIUM"],
  },
  {
    badge: "Low",
    badgeClass: "bl",
    amount: "up to ",
    amountEm: "$1,500 in ZEC",
    desc: "Minor issues with negligible security impact. Best-practice violations or informational disclosures with very limited attack surface.",
    pills: ["Likelihood 1\u20133", "Impact 1\u20133", "OWASP LOW"],
  },
  {
    badge: "Note",
    badgeClass: "bn",
    amount: "up to ",
    amountEm: "$500 in ZEC",
    desc: "Informational findings, best-practice suggestions, or hardening recommendations with no direct security impact.",
    pills: ["Likelihood 0\u20131", "Impact 0\u20131", "OWASP NOTE"],
  },
] as const;

interface Rule {
  readonly num: string;
  readonly title: string;
  readonly body: string;
}

const RULES: readonly Rule[] = [
  {
    num: "RULE_01",
    title: "Responsible Disclosure",
    body: "Do not disclose vulnerability details publicly until the 90-day embargo expires. Coordinate on timeline with the multi-org triage panel.",
  },
  {
    num: "RULE_02",
    title: "No Exploitation",
    body: "Do not exploit vulnerabilities beyond what\u2019s necessary to demonstrate impact. Never access, modify, or exfiltrate production user data.",
  },
  {
    num: "RULE_03",
    title: "Good Faith Testing",
    body: "Limit testing to your own accounts and isolated environments. Avoid actions that could affect availability or integrity of services for others.",
  },
  {
    num: "RULE_04",
    title: "First Submission Wins",
    body: "Only the first valid report for a given vulnerability receives the reward. Partial credit may be granted for simultaneous independent discovery.",
  },
  {
    num: "RULE_05",
    title: "ZEC Payment Only",
    body: "All rewards paid in ZEC to a valid Zcash Orchard Z-address (unified preferred). T-addresses not accepted. Reward amounts in ZEC at time of payout.",
  },
  {
    num: "RULE_06",
    title: "No Automated Scanning of Mainnet",
    body: "Automated scanners against mainnet infrastructure are prohibited. Rate-limiting abuse, DoS, and brute-force attacks are strictly out of bounds.",
  },
] as const;

export default function Home() {
  return (
    <>
      <Nav />
      <CanvasBg />

      <main
        style={{ paddingTop: "var(--nh)", position: "relative", zIndex: 2 }}
      >
        {/* ═══ HERO ═══ */}
        <section className="hero" id="home">
          <div className="g1" />
          <div className="g2" />
          <div className="hero-rain" aria-hidden="true">
            {Array.from({ length: 8 }).map((_, i) => (
              <svg
                key={i}
                className={`hcoin hcoin-${i}`}
                viewBox="0 0 1080 1080"
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
              >
                <path d={ZCASH_SVG_PATH} fill="#F4B728" fillRule="evenodd" />
              </svg>
            ))}
          </div>
          <svg
            className="hero-ghost"
            viewBox="0 0 1080 1080"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
          >
            <path d={ZCASH_SVG_PATH} fill="#F4B728" fillRule="evenodd" />
          </svg>

          <svg
            className="hero-icon"
            viewBox="0 0 1080 1080"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Zcash"
            role="img"
          >
            <path d={ZCASH_SVG_PATH} fill="#F4B728" fillRule="evenodd" />
          </svg>

          <div className="eyebrow">Zcash Security Program</div>

          <h1 className="hero-h1">
            <span className="l1">Protect Privacy.</span>
            <span className="l2">Earn ZEC.</span>
          </h1>

          <p className="hero-sub">
            Find vulnerabilities in Zcash privacy-critical infrastructure.
            <br />
            OWASP Risk Rating &middot; Coordinated disclosure &middot; Shielded
            Z-address required.
          </p>

          <div className="rewards">
            <div className="rc">
              <span className="rl">Max Reward</span>
              <SplitFlapDisplay value="$30K USD" size="sm" />
            </div>
            <div className="rc">
              <span className="rl">Response SLA</span>
              <SplitFlapDisplay value="5 DAYS" size="sm" />
            </div>
            <div className="rc">
              <span className="rl">Embargo</span>
              <SplitFlapDisplay value="90 DAYS" size="sm" />
            </div>
            <div className="rc">
              <span className="rl">Status</span>
              <SplitFlapDisplay
                value="ACTIVE"
                size="sm"
                accentColor="#23F4B7"
              />
            </div>
          </div>

          <div className="ctas">
            <ShimmerButton
              onClick={() => {
                document
                  .getElementById("submit")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Submit a Report
            </ShimmerButton>
            <a href="#why" className="btn btn-o">
              Why This Program
            </a>
          </div>
        </section>

        {/* ═══ WHY ═══ */}
        <section className="why-bg" id="why">
          <div className="w">
            <div className="tag">The Case For This Program</div>
            <h2>
              <HyperText text="Turns luck into structure." />
            </h2>
            <p className="desc">
              In March 2026, a critical bug was found and fixed in 3 days with
              no exploitation. It worked &mdash; because one person happened to
              have good character. This program makes sure the next time
              doesn&apos;t depend on luck.
            </p>

            <div className="why-grid">
              {WHY_CARDS.map((card) => (
                <SpotlightCard key={card.num} className="why-card">
                  <div className="why-num">{card.num}</div>
                  <div className="why-title">{card.title}</div>
                  <div className="why-body">{card.body}</div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </section>

        <hr className="div" />

        {/* ═══ CASE STUDY ═══ */}
        <section className="case-bg" id="case-study">
          <div className="w">
            <div className="tag">Hall of Fame &middot; First Case</div>
            <h2>
              <HyperText text="Sprout Pool Vulnerability" /> &mdash; March 2026
            </h2>
            <p className="desc">
              The first officially recognized bounty. AI-assisted discovery,
              responsible private disclosure, 3-day coordinated patch across all
              major mining pools. Proof the system works.
            </p>

            <div className="case-box" style={{ position: "relative" }}>
              <BorderBeam size={16} duration={6} />

              <div className="case-header">
                <div className="case-avatar">AS</div>
                <div>
                  <div className="case-name">Alex &quot;Scalar&quot; Sol</div>
                  <div className="case-tags">
                    <span className="chip chip-crit">
                      <span className="cd" />
                      Critical
                    </span>
                    <span className="chip chip-ai">
                      <span className="cd" />
                      AI-Assisted Discovery
                    </span>
                    <span className="chip chip-date">Mar 23, 2026</span>
                  </div>
                </div>
              </div>

              <div className="case-body">
                <p>
                  Scalar identified a critical vulnerability in{" "}
                  <strong>zcashd v3.1.0 through v6.11.x</strong> &mdash; nodes
                  were silently skipping Sprout proof verification when
                  connecting new blocks to the chain. The bug had existed for
                  nearly 6 years, introduced by a <code>fChecked</code> flag
                  optimization inherited from Bitcoin Core that interacted
                  incorrectly with Zcash&apos;s two-pass validation logic.
                  Scalar did not request a bounty or mention money. With
                  assistance from <strong>David Burkett</strong> (Litecoin MWEB
                  Developer) on responsible disclosure, the report reached
                  Shielded Labs privately with zero public exposure.
                </p>
                <p>
                  A malicious miner could have exploited this to drain the
                  approximately <strong>25,424 ZEC</strong> held in the
                  deprecated Sprout pool. Zcash&apos;s turnstile mechanism would
                  have prevented any supply inflation, and user privacy was
                  never at risk &mdash; but funds were exposed. Patch authored
                  by <strong>Jack Grigg (str4d)</strong>, reviewed by{" "}
                  <strong>Daira-Emma Hopwood</strong> and{" "}
                  <strong>Kris Nuttycombe</strong> (ZODL). Deployed across all
                  major mining pools &mdash;{" "}
                  <strong>Luxor, F2Pool, AntPool, ViaBTC</strong> &mdash; within
                  72 hours of disclosure.
                </p>
                <p>
                  Zebra, the Zcash Foundation&apos;s full node implementation,
                  was never affected. Had exploitation been attempted, Zebra
                  would have triggered a detectable chain fork &mdash; a
                  critical layer of defense that worked exactly as designed.{" "}
                  <strong>
                    Shielded Labs, ZODL, Zcash Foundation, and Bootstrap
                  </strong>{" "}
                  each awarded 50 ZEC in gratitude for protecting Zcash users.
                </p>
              </div>

              <div className="tl-wrap">
                <div className="tl-head">Disclosure Timeline</div>
                <ul className="tl">
                  {TIMELINE.map((entry) => (
                    <li key={entry.date}>
                      <span className="tl-d">{entry.date}</span>
                      <span
                        className="tl-t"
                        dangerouslySetInnerHTML={{
                          __html: entry.text
                            .replace(
                              /zcashd v3\.1\.0/,
                              "<strong>zcashd v3.1.0</strong>",
                            )
                            .replace(
                              /Zebra 1\.0\.0/,
                              "<strong>Zebra 1.0.0</strong>",
                            )
                            .replace(
                              /All 4 major pools/,
                              "<strong>All 4 major pools</strong>",
                            )
                            .replace(
                              /zcashd v6\.12\.0/,
                              "<strong>zcashd v6.12.0</strong>",
                            )
                            .replace(/fChecked/, "<code>fChecked</code>"),
                        }}
                      />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="case-reward">
                <div>
                  <div className="cr-label">Total Reward</div>
                  <div className="cr-amount">$30K USD</div>
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "0.6rem",
                      color: "var(--t3)",
                      marginTop: "0.25rem",
                    }}
                  >
                    $7.5K each org
                  </div>
                </div>
                <div className="cr-div" />
                <div>
                  <div className="cr-label">Contributed by</div>
                  <div className="cr-orgs">
                    <span className="cr-org">Shielded Labs</span>
                    <span className="cr-org">ZODL</span>
                    <span className="cr-org">Zcash Foundation</span>
                    <span className="cr-org">Bootstrap</span>
                  </div>
                </div>
                <a
                  href="https://forum.zcashcommunity.com/t/security-disclosure-we-remediated-a-vulnerability-in-sprout/55180"
                  target="_blank"
                  rel="noopener"
                  className="cr-link"
                >
                  Full report on Forum &#8599;
                </a>
              </div>

              <div className="forum-box">
                <div className="fb-label">
                  Community response &middot; Zcash Forum
                </div>
                <div className="fb-quote">
                  &ldquo;I get the feeling that Zcash has a thousand unexpected
                  surprises up its sleeve, which pop up every time the market
                  starts showing interest in it... noble people simply cannot
                  help but disclose this information if it actually happened. On
                  the other hand, there will always be people who will exploit
                  this information to spoil our mood... by the time this
                  information passes through three people, it will be so
                  distorted that no sane investor will want to get
                  involved.&rdquo;
                  <br />
                  <strong>&mdash; Community member, Zcash Forum</strong>
                </div>
                <div className="fb-meta">
                  <span>26 likes &middot; 144 views</span>
                  <a
                    href="https://forum.zcashcommunity.com/t/security-disclosure-we-remediated-a-vulnerability-in-sprout/55180"
                    target="_blank"
                    rel="noopener"
                  >
                    &rarr; Read the full thread
                  </a>
                </div>
              </div>
            </div>

            <p
              style={{
                fontFamily: "var(--mono)",
                fontSize: "0.75rem",
                color: "var(--t3)",
                marginTop: "1.25rem",
                textAlign: "center",
                padding: "1.1rem",
                border: "1px solid var(--gold-lo)",
                borderRadius: "4px",
                background: "var(--bg2)",
              }}
            >
              Program launched March 2026 &mdash; submit a valid report to join
              the Hall of Fame.
            </p>
          </div>
        </section>

        <hr className="div" />

        {/* ═══ PAYOUTS ═══ */}
        <section className="pay-bg" id="payouts">
          <div className="w">
            <div className="tag">Reward Tiers</div>
            <h2>
              <HyperText text="Payout Structure" />
            </h2>
            <p className="desc">
              All rewards paid in ZEC to a shielded Orchard address. Amounts
              scored using the OWASP Risk Rating Methodology. Maximum reward:{" "}
              <strong style={{ color: "var(--gold)" }}>
                $30,000 USD in ZEC
              </strong>{" "}
              for critical findings, contributed jointly by 4 participating
              organizations.
            </p>

            <div className="tiers">
              {TIERS.map((tier) => (
                <SpotlightCard key={tier.badge} className="tier">
                  <span className={`badge ${tier.badgeClass}`}>
                    <span className="dot" />
                    {tier.badge}
                  </span>
                  <div className="ta">
                    {tier.amount}
                    <em>{tier.amountEm}</em>
                  </div>
                  <p className="td">{tier.desc}</p>
                  <div className="tpills">
                    {tier.pills.map((pill) => (
                      <span key={pill} className="tp">
                        {pill}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </section>

        <hr className="div" />

        {/* ═══ OWASP ═══ */}
        <section className="owasp-bg" id="methodology">
          <div className="w">
            <div className="tag">Scoring Framework</div>
            <h2>
              <HyperText text="OWASP Risk Rating Methodology" />
            </h2>
            <p className="desc">
              Every submission is scored on two axes &mdash; Likelihood and
              Impact &mdash; each from 0 to 9. The product determines severity
              and reward tier.
            </p>

            <div className="owasp-box">
              <div className="owasp-formula">
                Risk Score = Likelihood (0&ndash;9) &times; Impact (0&ndash;9)
              </div>

              <div className="owasp-cols">
                <div>
                  <div className="og">
                    <div className="og-title" style={{ color: "var(--grn)" }}>
                      Likelihood &mdash; Threat Agent
                    </div>
                    <ul className="fl-list">
                      {[
                        "Skill Level",
                        "Motive",
                        "Opportunity",
                        "Size of group",
                      ].map((factor) => (
                        <li key={factor} className="fl-item">
                          <span className="fn">{factor}</span>
                          <span
                            className="fs-val"
                            style={{ color: "var(--grn)" }}
                          >
                            0&ndash;9
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="og" style={{ marginTop: "0.75rem" }}>
                    <div className="og-title" style={{ color: "var(--grn)" }}>
                      Likelihood &mdash; Vulnerability
                    </div>
                    <ul className="fl-list">
                      {[
                        "Ease of Discovery",
                        "Ease of Exploit",
                        "Awareness",
                        "Intrusion Detection",
                      ].map((factor) => (
                        <li key={factor} className="fl-item">
                          <span className="fn">{factor}</span>
                          <span
                            className="fs-val"
                            style={{ color: "var(--grn)" }}
                          >
                            0&ndash;9
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="og">
                    <div className="og-title" style={{ color: "var(--gold)" }}>
                      Impact &mdash; Technical
                    </div>
                    <ul className="fl-list">
                      {[
                        "Loss of Confidentiality",
                        "Loss of Integrity",
                        "Loss of Availability",
                        "Loss of Accountability",
                      ].map((factor) => (
                        <li key={factor} className="fl-item">
                          <span className="fn">{factor}</span>
                          <span className="fs-val">0&ndash;9</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="og" style={{ marginTop: "0.75rem" }}>
                    <div className="og-title" style={{ color: "var(--gold)" }}>
                      Impact &mdash; Business
                    </div>
                    <ul className="fl-list">
                      {[
                        "Financial Damage",
                        "Reputation Damage",
                        "Non-Compliance",
                        "Privacy Violation",
                      ].map((factor) => (
                        <li key={factor} className="fl-item">
                          <span className="fn">{factor}</span>
                          <span className="fs-val">0&ndash;9</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Severity Matrix */}
              <div className="rt-wrap">
                <p className="rt-label">
                  Severity Matrix &mdash; Likelihood (rows) &times; Impact
                  (columns)
                </p>
                <table className="rt" aria-label="OWASP Risk severity matrix">
                  <thead>
                    <tr>
                      <th className="corner" />
                      <th className="th-i" colSpan={3}>
                        &#x2B21; IMPACT
                      </th>
                    </tr>
                    <tr>
                      <th className="th-l">&#x25C8; LIKELIHOOD</th>
                      <th className="th-i">LOW (0&ndash;3)</th>
                      <th className="th-i">MEDIUM (3&ndash;6)</th>
                      <th className="th-i">HIGH (6&ndash;9)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="rl">HIGH (6&ndash;9)</td>
                      <td className="cm">MEDIUM</td>
                      <td className="ch">HIGH</td>
                      <td className="cc">CRITICAL</td>
                    </tr>
                    <tr>
                      <td className="rl">MEDIUM (3&ndash;6)</td>
                      <td className="cl">LOW</td>
                      <td className="cm">MEDIUM</td>
                      <td className="ch">HIGH</td>
                    </tr>
                    <tr>
                      <td className="rl">LOW (0&ndash;3)</td>
                      <td className="cn">NOTE</td>
                      <td className="cl">LOW</td>
                      <td className="cm">MEDIUM</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Legend */}
              <div className="sev-legend">
                <span className="sev-ll">Legend:</span>
                <span className="schip s-n">
                  <span className="cdot" />
                  NOTE &mdash; up to $500
                </span>
                <span className="schip s-l">
                  <span className="cdot" />
                  LOW &mdash; up to $1.5K
                </span>
                <span className="schip s-m">
                  <span className="cdot" />
                  MEDIUM &mdash; up to $5K
                </span>
                <span className="schip s-h">
                  <span className="cdot" />
                  HIGH &mdash; up to $15K
                </span>
                <span className="schip s-c">
                  <span className="cdot" />
                  CRITICAL &mdash; up to $30K
                </span>
              </div>

              {/* Real Example */}
              <div className="owasp-ex">
                <p className="oe-label">
                  Real Example &mdash; Scalar&apos;s Sprout Bug (Mar 2026)
                </p>
                <div className="oe-row">
                  <span className="oe-f">
                    Ease of Exploit: <strong>3</strong>
                  </span>
                  <span style={{ color: "var(--t3)" }}>&middot;</span>
                  <span className="oe-f">
                    Intrusion Detection: <strong>8</strong>
                  </span>
                  <span style={{ color: "var(--t3)" }}>&middot;</span>
                  <span className="oe-f">
                    Loss of Integrity: <strong>7</strong>
                  </span>
                  <span style={{ color: "var(--t3)" }}>&middot;</span>
                  <span className="oe-f">
                    Financial Damage: <strong>7</strong>
                  </span>
                  <span style={{ color: "var(--t3)" }}>&rarr;</span>
                  <span className="schip s-c">
                    <span className="cdot" />
                    CRITICAL &middot; up to $30K USD in ZEC
                  </span>
                </div>
              </div>

              <p
                style={{
                  marginTop: "1.1rem",
                  fontSize: "0.73rem",
                  color: "var(--t3)",
                  fontFamily: "var(--mono)",
                  textAlign: "center",
                }}
              >
                <a
                  href="https://owasp.org/www-community/OWASP_Risk_Rating_Methodology"
                  target="_blank"
                  rel="noopener"
                  style={{ color: "var(--gold)" }}
                >
                  &rarr; owasp.org/www-community/OWASP_Risk_Rating_Methodology
                </a>
              </p>
            </div>
          </div>
        </section>

        <hr className="div" />

        {/* ═══ DISCLOSURE ═══ */}
        <section className="disc-bg" id="disclosure">
          <div className="w">
            <div className="tag">Coordinated Disclosure</div>
            <h2>
              <HyperText text="Responsible Disclosure Policy" />
            </h2>
            <p className="desc">
              Noble disclosure requires controlled timing. Premature publication
              helps attackers, not users. We provide a structured path that
              protects both the researcher and the ecosystem.
            </p>

            <div className="disc-grid">
              <SpotlightCard className="dc feat">
                <div className="dc-num">PRINCIPLE_01</div>
                <div className="dc-title">90-Day Coordinated Embargo</div>
                <div className="dc-body">
                  We coordinate with the reporter on a joint disclosure timeline
                  &mdash; typically 90 days after triage. Infrastructure gets
                  patched before any public statement. The Sprout case went from
                  report to full patch deployment in 8 days &mdash; a model for
                  how this works in practice.
                </div>
                <div className="dc-tl">
                  <div className="dc-tr">
                    <span className="dc-td">Day 0</span>
                    <span className="dc-tx">
                      Private report received &rarr; acknowledged within 24h
                    </span>
                  </div>
                  <div className="dc-tr">
                    <span className="dc-td">Day 5</span>
                    <span className="dc-tx">
                      Triage complete, OWASP severity assigned
                    </span>
                  </div>
                  <div className="dc-tr">
                    <span className="dc-td">Day 30</span>
                    <span className="dc-tx">Patch developed and reviewed</span>
                  </div>
                  <div className="dc-tr">
                    <span className="dc-td">Day 60</span>
                    <span className="dc-tx">
                      Deployed across critical infrastructure
                    </span>
                  </div>
                  <div className="dc-tr">
                    <span className="dc-td">Day 90</span>
                    <span className="dc-tx">
                      Coordinated public disclosure with full context
                    </span>
                  </div>
                </div>
              </SpotlightCard>

              <SpotlightCard className="dc">
                <div className="dc-num">PRINCIPLE_02</div>
                <div className="dc-title">Controlled Public Communication</div>
                <div className="dc-body">
                  A &ldquo;25k ZEC at risk in deprecated pool&rdquo; headline
                  becomes &ldquo;ZCASH VULNERABLE MILLIONS AT RISK&rdquo; by the
                  third repost. We issue technical advisories through official
                  Zcash channels with full context &mdash; not social media
                  first. The goal is accuracy, not virality.
                </div>
              </SpotlightCard>

              <SpotlightCard className="dc">
                <div className="dc-num">PRINCIPLE_03</div>
                <div className="dc-title">Multi-Org Triage Panel</div>
                <div className="dc-body">
                  All critical reports are reviewed by a multi-organization
                  triage panel. No single party has unilateral authority over
                  severity scoring or disclosure timing. This prevents both
                  downplaying and sensationalizing.
                </div>
              </SpotlightCard>

              <SpotlightCard className="dc">
                <div className="dc-num">PRINCIPLE_04</div>
                <div className="dc-title">Reporter Privacy Protected</div>
                <div className="dc-body">
                  Researcher identity is never disclosed without explicit
                  consent. Reports are PGP-encrypted at submission. We never
                  share vulnerability details with third parties prior to the
                  agreed disclosure date, regardless of external pressure.
                </div>
              </SpotlightCard>
            </div>
          </div>
        </section>

        <hr className="div" />

        {/* ═══ NEWS ═══ */}
        <section className="news-bg" id="news">
          <div className="w">
            <div className="tag">Updates</div>
            <h2>
              <HyperText text="Latest News" />
            </h2>
            <p className="desc">Security advisories and program updates.</p>
            <div className="news-list">
              <div className="nr">
                <div className="nd">2026-04-08</div>
                <div className="nt">
                  <span className="nbadge">NEW</span>1 ZEC paid to Kenbak for
                  disclosing missing DMARC/SPF/MX on bountyzcash.org.{" "}
                  <a href="/hall-of-fame">&rarr; Hall of Fame</a>
                </div>
              </div>
              <div className="nr">
                <div className="nd">2026-03-31</div>
                <div className="nt">
                  <span className="nbadge">NEW</span>zcashd v6.12.0 released
                  &mdash; patches Sprout proof verification bypass (zcashd
                  v3.1.0&ndash;v6.11.x). Reported by Alex &ldquo;Scalar&rdquo;
                  Sol. <a href="#case-study">&rarr; Full case study</a> &middot;{" "}
                  <a
                    href="https://forum.zcashcommunity.com/t/security-disclosure-we-remediated-a-vulnerability-in-sprout/55180"
                    target="_blank"
                    rel="noopener"
                  >
                    &rarr; Zcash Forum
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="div" />

        {/* ═══ RULES ═══ */}
        <section className="rules-bg" id="rules">
          <div className="w">
            <div className="tag">Guidelines</div>
            <h2>
              <HyperText text="Program Rules" />
            </h2>
            <p className="desc">
              Follow responsible disclosure practices. Violations may disqualify
              your submission. AI-assisted discovery is explicitly welcome.
            </p>

            <div className="rules-grid">
              {RULES.map((rule) => (
                <SpotlightCard key={rule.num} className="rule">
                  <div className="rn">{rule.num}</div>
                  <div className="rt2">{rule.title}</div>
                  <div className="rb">{rule.body}</div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ SUBMIT ═══ */}
        <section className="submit-bg" id="submit">
          <div className="submit-inner">
            <div className="tag" style={{ justifyContent: "center" }}>
              Report Submission
            </div>
            <h2>Submit a Vulnerability</h2>
            <p className="desc" style={{ margin: "0 auto" }}>
              Encrypted and confidential. Reviewed by the triage panel within 5
              business days. AI-assisted discovery explicitly welcome.
            </p>

            <SubmitForm />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
