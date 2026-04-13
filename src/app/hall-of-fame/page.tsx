"use client";

import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { HyperText } from "@/components/ui/hyper-text";
import { SplitFlapDisplay } from "@/components/ui/split-flap-display";
import { BorderBeam } from "@/components/ui/border-beam";
import { MatrixRain } from "@/components/ui/matrix-rain";

const TIMELINE_STEPS = [
  { date: "Mar 23", label: "Reported" },
  { date: "Mar 24", label: "Triage" },
  { date: "Mar 25", label: "Patched" },
  { date: "Mar 31", label: "Published" },
] as const;

export default function HallOfFame() {
  return (
    <>
      <Nav />
      <main
        style={{ paddingTop: "var(--nh)", position: "relative", zIndex: 2 }}
      >
        {/* ── HOF HERO ── */}
        <section
          className="hof-hero"
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "2rem 1.5rem",
            position: "relative",
            background: "var(--bg0)",
          }}
        >
          <MatrixRain opacity={0.08} speed={50} />
          {/* Eyebrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1.5rem",
            }}
          >
            <span
              style={{
                width: "2rem",
                height: "1px",
                background: "rgba(35,244,183,0.4)",
                display: "block",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-geist-mono, monospace)",
                fontSize: "0.8rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#23F4B7",
              }}
            >
              bountyzcash.org
            </span>
            <span
              style={{
                width: "2rem",
                height: "1px",
                background: "rgba(35,244,183,0.4)",
                display: "block",
              }}
            />
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              marginBottom: "1.25rem",
            }}
          >
            <span style={{ color: "#fff" }}>Hall of </span>
            <span
              className="glitch"
              data-text="Fame"
              style={{ color: "#F4B728" }}
            >
              Fame
            </span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              maxWidth: "38rem",
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.55)",
              marginBottom: "2.5rem",
            }}
          >
            Researchers who found and responsibly disclosed vulnerabilities in
            Zcash privacy-critical infrastructure.
          </p>

          {/* Stats pills */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.6rem",
              justifyContent: "center",
              marginBottom: "2.5rem",
            }}
          >
            <span className="hst hst-g">2 Researchers</span>
            <span className="hst hst-r">2 Vulns Disclosed</span>
            <span className="hst hst-y">201 ZEC Awarded</span>
            <span className="hst hst-g">72h Patch Window</span>
          </div>

          {/* CTA */}
          <a
            href="#researchers"
            className="btn btn-y"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.75rem 2rem",
              borderRadius: "9999px",
              background: "rgba(244,183,40,0.12)",
              border: "1px solid rgba(244,183,40,0.3)",
              color: "#F4B728",
              fontWeight: 600,
              fontSize: "0.95rem",
              textDecoration: "none",
              transition: "background 0.2s, border-color 0.2s",
            }}
          >
            View Researchers <span aria-hidden="true">&darr;</span>
          </a>

          {/* Scroll cue */}
          <div
            className="scroll-cue"
            style={{
              position: "absolute",
              bottom: "2rem",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <div
              style={{
                width: "1px",
                height: "3rem",
                background: "linear-gradient(to bottom, transparent, #F4B728)",
              }}
            />
          </div>
        </section>

        {/* ── RESEARCHERS ── */}
        <section
          id="researchers"
          style={{
            background: "var(--bg1)",
            padding: "5rem 1.5rem",
          }}
        >
          <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
            {/* Researcher #001 */}
            <SpotlightCard
              className="researcher-card"
              spotlightColor="rgba(244,183,40,0.12)"
              borderColor="rgba(244,183,40,0.22)"
            >
              <div style={{ position: "relative" }}>
                <BorderBeam size={16} duration={6} />

                <div style={{ padding: "2rem 2rem 1.5rem" }}>
                  {/* Rank badge */}
                  <span
                    style={{
                      position: "absolute",
                      top: "1.25rem",
                      right: "1.5rem",
                      fontFamily: "var(--font-geist-mono, monospace)",
                      fontSize: "0.75rem",
                      letterSpacing: "0.1em",
                      color: "rgba(244,183,40,0.5)",
                      fontWeight: 700,
                    }}
                  >
                    #001
                  </span>

                  {/* Avatar + Name row */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {/* Avatar */}
                    <div
                      className="avatar-ring"
                      style={{ position: "relative" }}
                    >
                      <div
                        style={{
                          width: "64px",
                          height: "64px",
                          borderRadius: "50%",
                          border: "2px solid #F4B728",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: "rgba(244,183,40,0.08)",
                          fontFamily: "var(--font-geist-mono, monospace)",
                          fontWeight: 700,
                          fontSize: "1.2rem",
                          color: "#F4B728",
                          position: "relative",
                          zIndex: 1,
                        }}
                      >
                        AS
                      </div>
                    </div>

                    <div>
                      <h3
                        style={{
                          fontSize: "1.35rem",
                          fontWeight: 700,
                          color: "#fff",
                          margin: 0,
                          lineHeight: 1.3,
                        }}
                      >
                        <HyperText text='Alex "Scalar" Sol' duration={1000} />
                      </h3>
                      <p
                        style={{
                          fontSize: "0.78rem",
                          color: "rgba(255,255,255,0.4)",
                          margin: "0.2rem 0 0",
                          fontFamily: "var(--font-geist-mono, monospace)",
                        }}
                      >
                        Discovered Mar 23 &middot; Patched Mar 25 &middot;
                        Published Mar 31, 2026
                      </p>
                    </div>
                  </div>

                  {/* Chips + Reward row */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "1rem",
                      marginTop: "1rem",
                    }}
                  >
                    {/* Chips */}
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.4rem",
                      }}
                    >
                      <span className="chip chip-r">Critical</span>
                      <span className="chip chip-g">AI-Assisted</span>
                      <span className="chip chip-y">
                        zcashd v3.1.0&ndash;v6.11.x
                      </span>
                    </div>

                    {/* Reward */}
                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      <span
                        style={{
                          display: "block",
                          fontFamily: "var(--font-geist-mono, monospace)",
                          fontSize: "0.6rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.15em",
                          color: "rgba(255,255,255,0.35)",
                          marginBottom: "0.15rem",
                        }}
                      >
                        Total Reward
                      </span>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "baseline",
                          gap: "0.35rem",
                          justifyContent: "flex-end",
                        }}
                      >
                        <SplitFlapDisplay
                          value="200"
                          size="lg"
                          accentColor="#F4B728"
                        />
                        <span
                          style={{
                            fontFamily: "var(--font-geist-mono, monospace)",
                            fontSize: "0.85rem",
                            fontWeight: 700,
                            color: "#F4B728",
                            letterSpacing: "0.05em",
                          }}
                        >
                          ZEC
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <div
                    style={{
                      borderTop: "1px solid rgba(255,255,255,0.06)",
                      marginTop: "1.5rem",
                      paddingTop: "1.25rem",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "0.92rem",
                        lineHeight: 1.75,
                        color: "rgba(255,255,255,0.6)",
                        margin: 0,
                      }}
                    >
                      Discovered a critical vulnerability in the Sprout
                      value-commitment validation logic of{" "}
                      <code style={{ color: "#F4B728", fontSize: "0.85em" }}>
                        zcashd
                      </code>
                      . The flaw allowed an attacker to craft a malicious Sprout
                      transaction that bypassed the balance check, potentially
                      enabling unlimited counterfeiting of shielded ZEC. The
                      researcher used AI-assisted static analysis to identify
                      the unchecked{" "}
                      <code style={{ color: "#F4B728", fontSize: "0.85em" }}>
                        fChecked
                      </code>{" "}
                      flag in the consensus path and provided a working
                      proof-of-concept along with a responsible disclosure
                      timeline.
                    </p>
                  </div>

                  {/* Timeline */}
                  <div
                    style={{
                      borderTop: "1px solid rgba(255,255,255,0.06)",
                      marginTop: "1.25rem",
                      paddingTop: "1.25rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0",
                      justifyContent: "space-between",
                      position: "relative",
                    }}
                  >
                    {/* Connecting line */}
                    <div
                      style={{
                        position: "absolute",
                        top: "calc(1.25rem + 5px)",
                        left: "5px",
                        right: "5px",
                        height: "2px",
                        background:
                          "linear-gradient(90deg, #23F4B7, #F4B728, #F4B728, #23F4B7)",
                        opacity: 0.25,
                        zIndex: 0,
                      }}
                    />

                    {TIMELINE_STEPS.map((step) => (
                      <div
                        key={step.label}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: "0.4rem",
                          position: "relative",
                          zIndex: 1,
                        }}
                      >
                        <div
                          style={{
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            background: "#F4B728",
                            border: "2px solid rgba(244,183,40,0.4)",
                            boxShadow: "0 0 8px rgba(244,183,40,0.3)",
                          }}
                        />
                        <span
                          style={{
                            fontFamily: "var(--font-geist-mono, monospace)",
                            fontSize: "0.65rem",
                            color: "rgba(255,255,255,0.5)",
                            letterSpacing: "0.05em",
                          }}
                        >
                          {step.date}
                        </span>
                        <span
                          style={{
                            fontFamily: "var(--font-geist-mono, monospace)",
                            fontSize: "0.7rem",
                            color: "#F4B728",
                            fontWeight: 600,
                          }}
                        >
                          {step.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Forum link */}
                  <div
                    style={{
                      borderTop: "1px solid rgba(255,255,255,0.06)",
                      marginTop: "1.25rem",
                      paddingTop: "1rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-geist-mono, monospace)",
                        fontSize: "0.75rem",
                        color: "rgba(255,255,255,0.35)",
                        letterSpacing: "0.05em",
                      }}
                    >
                      Zcash Community Forum
                    </span>
                    <a
                      href="https://forum.zcashcommunity.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: "var(--font-geist-mono, monospace)",
                        fontSize: "0.8rem",
                        color: "#23F4B7",
                        textDecoration: "none",
                        fontWeight: 600,
                        transition: "opacity 0.2s",
                      }}
                    >
                      Read Full Disclosure &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </SpotlightCard>

            {/* Researcher #002 */}
            <div style={{ marginTop: "2rem" }} />
            <SpotlightCard
              className="researcher-card"
              spotlightColor="rgba(35,244,183,0.12)"
              borderColor="rgba(35,244,183,0.22)"
            >
              <div style={{ position: "relative" }}>
                <BorderBeam size={16} duration={6} colorFrom="#23F4B7" />

                <div style={{ padding: "2rem 2rem 1.5rem" }}>
                  <span
                    style={{
                      position: "absolute",
                      top: "1.25rem",
                      right: "1.5rem",
                      fontFamily: "var(--font-geist-mono, monospace)",
                      fontSize: "0.75rem",
                      letterSpacing: "0.1em",
                      color: "rgba(35,244,183,0.5)",
                      fontWeight: 700,
                    }}
                  >
                    #002
                  </span>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      marginBottom: "0.75rem",
                    }}
                  >
                    <div
                      className="avatar-ring"
                      style={{ position: "relative" }}
                    >
                      <div
                        style={{
                          width: "64px",
                          height: "64px",
                          borderRadius: "50%",
                          border: "2px solid #23F4B7",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: "rgba(35,244,183,0.08)",
                          fontFamily: "var(--font-geist-mono, monospace)",
                          fontWeight: 700,
                          fontSize: "1.2rem",
                          color: "#23F4B7",
                          position: "relative",
                          zIndex: 1,
                        }}
                      >
                        KB
                      </div>
                    </div>

                    <div>
                      <h3
                        style={{
                          fontSize: "1.35rem",
                          fontWeight: 700,
                          color: "#fff",
                          margin: 0,
                          lineHeight: 1.3,
                        }}
                      >
                        <HyperText text="Kenbak" duration={1000} />
                      </h3>
                      <p
                        style={{
                          fontSize: "0.78rem",
                          color: "rgba(255,255,255,0.4)",
                          margin: "0.2rem 0 0",
                          fontFamily: "var(--font-geist-mono, monospace)",
                        }}
                      >
                        Atmosphere Labs &middot; Reported Apr 2026
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "1rem",
                      marginTop: "1rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.4rem",
                      }}
                    >
                      <span className="chip chip-g">Low</span>
                      <span className="chip chip-g">AI-Assisted</span>
                      <span className="chip chip-y">Web Infrastructure</span>
                    </div>

                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      <span
                        style={{
                          display: "block",
                          fontFamily: "var(--font-geist-mono, monospace)",
                          fontSize: "0.6rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.15em",
                          color: "rgba(255,255,255,0.35)",
                          marginBottom: "0.15rem",
                        }}
                      >
                        Total Reward
                      </span>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "baseline",
                          gap: "0.35rem",
                          justifyContent: "flex-end",
                        }}
                      >
                        <SplitFlapDisplay
                          value="1"
                          size="lg"
                          accentColor="#23F4B7"
                        />
                        <span
                          style={{
                            fontFamily: "var(--font-geist-mono, monospace)",
                            fontSize: "0.85rem",
                            fontWeight: 700,
                            color: "#23F4B7",
                            letterSpacing: "0.05em",
                          }}
                        >
                          ZEC
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      borderTop: "1px solid rgba(255,255,255,0.06)",
                      marginTop: "1.5rem",
                      paddingTop: "1.25rem",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "0.92rem",
                        lineHeight: 1.75,
                        color: "rgba(255,255,255,0.6)",
                        margin: 0,
                      }}
                    >
                      Identified missing email authentication records (DMARC,
                      SPF, MX) on{" "}
                      <code style={{ color: "#23F4B7", fontSize: "0.85em" }}>
                        bountyzcash.org
                      </code>
                      . Without these records, an attacker could spoof emails
                      from addresses such as{" "}
                      <code style={{ color: "#23F4B7", fontSize: "0.85em" }}>
                        triage@bountyzcash.org
                      </code>
                      , particularly risky during the 90-day disclosure embargo
                      when researchers hold undisclosed vulnerabilities. Also
                      flagged parked nameservers (dns-parking.com) as a domain
                      hijack vector. Remediated with{" "}
                      <code style={{ color: "#23F4B7", fontSize: "0.85em" }}>
                        v=spf1 -all
                      </code>{" "}
                      and{" "}
                      <code style={{ color: "#23F4B7", fontSize: "0.85em" }}>
                        p=reject
                      </code>{" "}
                      DMARC policy. Bounty paid directly by Michae2xl (site
                      owner).
                    </p>
                  </div>
                </div>
              </div>
            </SpotlightCard>

            {/* Next Slot #003 */}
            <div
              style={{
                marginTop: "2rem",
                border: "2px dashed rgba(255,255,255,0.1)",
                borderRadius: "1rem",
                padding: "3rem 2rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  border: "2px dashed rgba(255,255,255,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-geist-mono, monospace)",
                  fontSize: "0.9rem",
                  color: "rgba(255,255,255,0.2)",
                  fontWeight: 700,
                }}
              >
                003
              </div>
              <div>
                <p
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.45)",
                    margin: "0 0 0.25rem",
                  }}
                >
                  Next researcher
                </p>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "rgba(255,255,255,0.25)",
                    margin: 0,
                  }}
                >
                  Submit a valid report to claim this spot
                </p>
              </div>
              <Link
                href="/#submit"
                style={{
                  marginTop: "0.5rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  padding: "0.6rem 1.5rem",
                  borderRadius: "9999px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.5)",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  textDecoration: "none",
                  transition: "background 0.2s, border-color 0.2s, color 0.2s",
                }}
              >
                Submit Report &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* ── PARTNER INVITE ── */}
        <section
          style={{
            background: "var(--bg0)",
            padding: "5rem 1.5rem",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "44rem", margin: "0 auto" }}>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
                fontWeight: 700,
                color: "#fff",
                marginBottom: "2.5rem",
              }}
            >
              Is your infrastructure in scope?
            </h2>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "3rem",
                flexWrap: "wrap",
                marginBottom: "2.5rem",
              }}
            >
              <div
                style={{
                  flex: "1 1 14rem",
                  maxWidth: "18rem",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-geist-mono, monospace)",
                    fontSize: "0.7rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: "#23F4B7",
                    marginBottom: "0.6rem",
                  }}
                >
                  You
                </div>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "rgba(255,255,255,0.65)",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  You define scope + budget
                </p>
              </div>

              <div
                style={{
                  width: "1px",
                  background: "rgba(255,255,255,0.08)",
                  alignSelf: "stretch",
                }}
              />

              <div
                style={{
                  flex: "1 1 14rem",
                  maxWidth: "18rem",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-geist-mono, monospace)",
                    fontSize: "0.7rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: "#F4B728",
                    marginBottom: "0.6rem",
                  }}
                >
                  We
                </div>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "rgba(255,255,255,0.65)",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  We handle everything else
                </p>
              </div>
            </div>

            <a
              href="mailto:jason@shieldedlabs.net"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.85rem 2.2rem",
                borderRadius: "9999px",
                background: "rgba(244,183,40,0.1)",
                border: "1px solid rgba(244,183,40,0.25)",
                color: "#F4B728",
                fontWeight: 600,
                fontSize: "0.95rem",
                textDecoration: "none",
                transition: "background 0.2s, border-color 0.2s",
              }}
            >
              Get in touch &rarr; Contact the team
            </a>
          </div>
        </section>
      </main>
      <Footer />

      {/* ── HOF Styles ── */}
      <style jsx>{`
        /* Glitch effect */
        .glitch {
          position: relative;
          display: inline-block;
        }
        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        .glitch::before {
          color: #ff3333;
          animation: glitch1 3s infinite linear alternate-reverse;
          clip-path: inset(0 0 80% 0);
        }
        .glitch::after {
          color: #23f4b7;
          animation: glitch2 2.5s infinite linear alternate-reverse;
          clip-path: inset(80% 0 0 0);
        }

        @keyframes glitch1 {
          0% {
            clip-path: inset(20% 0 60% 0);
            transform: translate(-2px, 1px);
          }
          20% {
            clip-path: inset(50% 0 10% 0);
            transform: translate(2px, -1px);
          }
          40% {
            clip-path: inset(10% 0 70% 0);
            transform: translate(-1px, 2px);
          }
          60% {
            clip-path: inset(40% 0 30% 0);
            transform: translate(1px, -2px);
          }
          80% {
            clip-path: inset(70% 0 5% 0);
            transform: translate(2px, 1px);
          }
          100% {
            clip-path: inset(15% 0 55% 0);
            transform: translate(-2px, -1px);
          }
        }
        @keyframes glitch2 {
          0% {
            clip-path: inset(60% 0 10% 0);
            transform: translate(2px, -1px);
          }
          20% {
            clip-path: inset(10% 0 60% 0);
            transform: translate(-2px, 2px);
          }
          40% {
            clip-path: inset(30% 0 40% 0);
            transform: translate(1px, -1px);
          }
          60% {
            clip-path: inset(70% 0 5% 0);
            transform: translate(-1px, 1px);
          }
          80% {
            clip-path: inset(5% 0 70% 0);
            transform: translate(2px, 2px);
          }
          100% {
            clip-path: inset(45% 0 25% 0);
            transform: translate(-2px, -2px);
          }
        }

        /* Stats pills */
        .hst {
          font-family: var(--font-geist-mono, monospace);
          font-size: 0.78rem;
          font-weight: 600;
          padding: 0.35rem 0.9rem;
          border-radius: 9999px;
          letter-spacing: 0.03em;
          white-space: nowrap;
        }
        .hst-g {
          background: rgba(35, 244, 183, 0.1);
          color: #23f4b7;
          border: 1px solid rgba(35, 244, 183, 0.2);
        }
        .hst-r {
          background: rgba(248, 113, 113, 0.1);
          color: #f87171;
          border: 1px solid rgba(248, 113, 113, 0.2);
        }
        .hst-y {
          background: rgba(244, 183, 40, 0.1);
          color: #f4b728;
          border: 1px solid rgba(244, 183, 40, 0.2);
        }

        /* Chips */
        .chip {
          font-family: var(--font-geist-mono, monospace);
          font-size: 0.7rem;
          font-weight: 600;
          padding: 0.25rem 0.65rem;
          border-radius: 4px;
          letter-spacing: 0.03em;
        }
        .chip-r {
          background: rgba(248, 113, 113, 0.12);
          color: #f87171;
          border: 1px solid rgba(248, 113, 113, 0.2);
        }
        .chip-g {
          background: rgba(35, 244, 183, 0.1);
          color: #23f4b7;
          border: 1px solid rgba(35, 244, 183, 0.2);
        }
        .chip-y {
          background: rgba(244, 183, 40, 0.1);
          color: #f4b728;
          border: 1px solid rgba(244, 183, 40, 0.2);
        }

        /* Avatar pulse ring */
        .avatar-ring::before {
          content: "";
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 2px solid rgba(244, 183, 40, 0.3);
          animation: pulse-ring 2.5s ease-out infinite;
        }

        @keyframes pulse-ring {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          70% {
            transform: scale(1.25);
            opacity: 0;
          }
          100% {
            transform: scale(1.25);
            opacity: 0;
          }
        }

        /* Scroll cue bob */
        .scroll-cue {
          animation: bob 2s ease-in-out infinite;
        }

        @keyframes bob {
          0%,
          100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(8px);
          }
        }

        /* Researcher card bg */
        .researcher-card {
          background: rgba(255, 255, 255, 0.02);
        }
      `}</style>
    </>
  );
}
