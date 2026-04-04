"use client";

import { useRef } from "react";
import { ShimmerButton } from "@/components/ui/shimmer-button";

const ORGS = [
  { name: "Shielded Labs", email: "security@shieldedlabs.com" },
  { name: "ZODL", email: "security@zodl.com" },
  { name: "Zcash Foundation", email: "security@zfnd.org" },
  { name: "Bootstrap", email: "security@bootstrapproject.org" },
] as const;

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
    const component = (data.get("component") as string) || "";
    const org = (data.get("org") as string) || "";
    const desc = (data.get("desc") as string) || "";

    const selectedOrg = ORGS.find((o) => o.name === org);
    const to = selectedOrg
      ? `${selectedOrg.email},michaelguima@proton.me`
      : "michaelguima@proton.me";

    const subject = `[bountyzcash] ${severity} — ${component}`;
    const body = [
      `Reporter: ${name}`,
      `Contact: ${email}`,
      `Severity: ${severity}`,
      `Component: ${component}`,
      `Organization: ${org}`,
      ``,
      `--- Vulnerability Description ---`,
      desc,
      ``,
      `---`,
      `Submitted via bountyzcash.org`,
    ].join("\n");

    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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

        <div className="r2">
          <div className="fg">
            <label className="fl" htmlFor="fsev">
              Severity (OWASP)
            </label>
            <select className="fsel" id="fsev" name="severity" defaultValue="">
              <option value="">&mdash; Select &mdash;</option>
              <option>Critical (100&ndash;200 ZEC)</option>
              <option>High (20&ndash;100 ZEC)</option>
              <option>Medium (2&ndash;20 ZEC)</option>
              <option>Low (0&ndash;2 ZEC)</option>
            </select>
          </div>
          <div className="fg">
            <label className="fl" htmlFor="fcomp">
              Component
            </label>
            <select
              className="fsel"
              id="fcomp"
              name="component"
              defaultValue=""
            >
              <option value="">&mdash; Select &mdash;</option>
              <option>zcashd</option>
              <option>librustzcash</option>
              <option>Orchard Protocol</option>
              <option>Sapling Protocol</option>
              <option>Halo 2</option>
              <option>Zebra</option>
              <option>Web Infrastructure</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <div className="fg">
          <label className="fl" htmlFor="forg">
            Report to Organization
          </label>
          <select className="fsel" id="forg" name="org" defaultValue="">
            <option value="">&mdash; Select &mdash;</option>
            {ORGS.map((o) => (
              <option key={o.name}>{o.name}</option>
            ))}
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
          Opens your email client &middot; Report sent to selected org +
          bountyzcash maintainer
        </p>
      </form>
    </div>
  );
}
