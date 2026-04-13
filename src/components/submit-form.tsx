"use client";

import { useRef } from "react";
import { ShimmerButton } from "@/components/ui/shimmer-button";

const TRIAGE_EMAIL = "jason@shieldedlabs.net";
const ZF_ZEBRA_ADVISORY_URL =
  "https://github.com/ZcashFoundation/zebra/security/advisories/new";

export function SubmitForm() {
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const data = new FormData(form);
    const name = (data.get("name") as string) || "anon";
    const email = (data.get("email") as string) || "";
    const severity = (data.get("severity") as string) || "";
    const desc = (data.get("desc") as string) || "";

    const subject = `[bountyzcash] ${severity}`;
    const body = [
      `Reporter: ${name}`,
      `Contact: ${email}`,
      `Severity: ${severity}`,
      ``,
      `--- Vulnerability Description ---`,
      desc,
      ``,
      `---`,
      `Submitted via bountyzcash.org`,
      `Inbox monitored by Shielded Labs and ZODL.`,
      `Zcash Foundation / Zebra findings should be submitted via private advisory issue.`,
    ].join("\n");

    window.location.href = `mailto:${TRIAGE_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className="sbox">
      <div
        className="scope-board"
        role="note"
        aria-label="Crosslink scope and payout notice"
      >
        <div className="scope-board__head">
          <div className="scope-board__signal">
            <span className="scope-board__led" aria-hidden="true" />
            <span className="scope-board__label">Crosslink Scope Alert</span>
          </div>
          <span className="scope-board__badge">No Bounty</span>
        </div>

        <div className="scope-board__screen">
          <p className="scope-board__line scope-board__line--strong">
            Crosslink repositories are out of scope.
          </p>
          <p className="scope-board__line">
            Prototype / testnet only. No Crosslink repository qualifies for bug
            bounty rewards.
          </p>
          <p className="scope-board__line scope-board__line--muted">
            No payouts are issued for Crosslink bugs.
          </p>
        </div>
      </div>

      <div className="triage-note">
        <div className="tag">Zcash Foundation / Zebra</div>
        <p>
          If your report is for <strong>Zcash Foundation infrastructure</strong>{" "}
          or <strong>Zebra</strong>, do not use this form. Please open a{" "}
          <strong>private security advisory issue</strong> instead.
        </p>
        <a
          className="triage-link"
          href={ZF_ZEBRA_ADVISORY_URL}
          target="_blank"
          rel="noreferrer"
        >
          Open private advisory issue &#8599;
        </a>
      </div>

      <form ref={formRef} className="form" onSubmit={handleSubmit} noValidate>
        <div className="r2">
          <div className="fg">
            <label className="fl" htmlFor="fn">
              Name / Handle
            </label>
            <input
              className="fi"
              id="fn"
              name="name"
              type="text"
              placeholder="anon_hacker"
              autoComplete="off"
            />
          </div>
          <div className="fg">
            <label className="fl" htmlFor="fe">
              Contact Email
            </label>
            <input
              className="fi"
              id="fe"
              name="email"
              type="email"
              placeholder="you@proton.me"
            />
          </div>
        </div>

        <div className="fg">
          <label className="fl" htmlFor="fsev">
            Severity (OWASP)
          </label>
          <select className="fsel" id="fsev" name="severity" defaultValue="">
            <option value="">&mdash; Select &mdash;</option>
            <option>Critical (up to $30,000 in ZEC)</option>
            <option>High (up to $15,000 in ZEC)</option>
            <option>Medium (up to $5,000 in ZEC)</option>
            <option>Low (up to $1,500 in ZEC)</option>
            <option>Note (up to $500 in ZEC)</option>
          </select>
        </div>

        <div className="fg">
          <label className="fl" htmlFor="fd">
            Vulnerability Description
          </label>
          <textarea
            className="ft"
            id="fd"
            name="desc"
            placeholder="Describe the vulnerability, steps to reproduce, and potential impact. Include OWASP likelihood/impact estimates if possible. PoC welcome."
          />
        </div>

        <ShimmerButton
          className="btn-sub"
          type="submit"
          style={{ width: "100%" }}
        >
          Submit Report &#8599;
        </ShimmerButton>

        <p className="fnote">
          Opens your email client &middot; Shielded Labs / ZODL intake &middot;
          ZF / Zebra reports should use the advisory issue flow
        </p>
      </form>
    </div>
  );
}
