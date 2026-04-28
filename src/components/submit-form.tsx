const ZCG_INITIATIVE_URL =
  "https://forum.zcashcommunity.com/t/zcg-security-vulnerability-disclosure-initiative/55545";
const ZF_ZEBRA_ADVISORY_URL =
  "https://github.com/ZcashFoundation/zebra/security/advisories/new";

interface OfficialRepo {
  readonly name: string;
  readonly securityUrl: string;
}

const OFFICIAL_REPOS: readonly OfficialRepo[] = [
  {
    name: "zcashd",
    securityUrl: "https://github.com/zcash/zcash/security/policy",
  },
  {
    name: "Zebra",
    securityUrl:
      "https://github.com/ZcashFoundation/zebra/security/advisories/new",
  },
  {
    name: "librustzcash",
    securityUrl: "https://github.com/zcash/librustzcash/security/policy",
  },
  {
    name: "Zallet",
    securityUrl: "https://github.com/zcash/wallet/security/policy",
  },
  {
    name: "Zaino",
    securityUrl: "https://github.com/zingolabs/zaino/security/policy",
  },
  {
    name: "lightwalletd",
    securityUrl: "https://github.com/zcash/lightwalletd/security/policy",
  },
  {
    name: "zcash-devtool",
    securityUrl: "https://github.com/zcash/zcash-devtool/security/policy",
  },
];

export function SubmitForm() {
  return (
    <div className="sbox">
      <div
        className="scope-board"
        role="note"
        aria-label="Official disclosure routing notice"
      >
        <div className="scope-board__head">
          <div className="scope-board__signal">
            <span className="scope-board__led" aria-hidden="true" />
            <span className="scope-board__label">Official ZCG Program</span>
          </div>
          <span className="scope-board__badge">No Intake Here</span>
        </div>

        <div className="scope-board__screen">
          <p className="scope-board__line scope-board__line--strong">
            bountyzcash.org does not accept reports.
          </p>
          <p className="scope-board__line">
            All vulnerability disclosures must go through the official ZCG
            Security &amp; Vulnerability Disclosure Initiative.
          </p>
          <p className="scope-board__line scope-board__line--muted">
            No email, no form on this site counts for triage or payout.
          </p>
        </div>
      </div>

      <div className="triage-note">
        <div className="tag">How to disclose</div>
        <p>
          Submit reports through each project&apos;s own{" "}
          <strong>SECURITY.md</strong> on GitHub. ZCG does not accept reports
          directly &mdash; remediation teams triage, and FPF coordinates payout
          after a fix lands.
        </p>
        <a
          className="triage-link"
          href={ZCG_INITIATIVE_URL}
          target="_blank"
          rel="noreferrer"
        >
          Read the ZCG Initiative &#8599;
        </a>
      </div>

      <ul
        className="repo-list"
        aria-label="Official Zcash project disclosure channels"
      >
        {OFFICIAL_REPOS.map((repo) => (
          <li key={repo.name} className="repo-item">
            <span className="repo-name">{repo.name}</span>
            <a
              className="repo-link"
              href={repo.securityUrl}
              target="_blank"
              rel="noreferrer"
            >
              SECURITY.md &#8599;
            </a>
          </li>
        ))}
      </ul>

      <a
        className="btn-sub btn-sub--link"
        href={ZCG_INITIATIVE_URL}
        target="_blank"
        rel="noreferrer"
      >
        Open Official ZCG Initiative &#8599;
      </a>

      <p className="fnote">
        Zcash Foundation / Zebra reports go through the{" "}
        <a
          href={ZF_ZEBRA_ADVISORY_URL}
          target="_blank"
          rel="noreferrer"
          className="fnote-link"
        >
          private advisory issue flow
        </a>
        .
      </p>
    </div>
  );
}
