"use client";

import { useRef } from "react";
import { ShimmerButton } from "@/components/ui/shimmer-button";

const TRIAGE_EMAIL = "jason@shieldedlabs.net";

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
      `Triage handled jointly by Zcash Foundation, Shielded Labs and ZODL.`,
    ].join("\n");

    window.location.href = `mailto:${TRIAGE_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className="sbox">
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
            <option>High (up to $10,000 in ZEC)</option>
            <option>Medium (up to $2,000 in ZEC)</option>
            <option>Low (up to $300 in ZEC)</option>
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
          Opens your email client &middot; Triage by ZF, Shielded Labs &amp;
          ZODL
        </p>
      </form>
    </div>
  );
}
