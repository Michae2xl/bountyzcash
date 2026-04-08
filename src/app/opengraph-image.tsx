import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Zcash Bug Bounty Program — bountyzcash.org";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#0A0A0A",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 40%, rgba(244,183,40,0.15), transparent 60%)",
          display: "flex",
        }}
      />
      <svg
        width="220"
        height="220"
        viewBox="0 0 1080 1080"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m270,540c0-148.9,121.1-270,270-270s270,121.1,270,270-121.1,270-270,270-270-121.1-270-270Zm366.31-125.3v41.09l-114.28,155h114.28v54.5h-73.67v45.16h-45.28v-45.16h-73.67v-41.09l114.16-155h-114.16v-54.5h73.67v-45.28h45.28v45.28h73.67Z"
          fill="#F4B728"
          fillRule="evenodd"
        />
      </svg>
      <div
        style={{
          marginTop: 40,
          fontSize: 68,
          fontWeight: 800,
          color: "#F4B728",
          letterSpacing: "-0.02em",
        }}
      >
        Zcash Bug Bounty Program
      </div>
      <div
        style={{
          marginTop: 16,
          fontSize: 32,
          color: "rgba(255,255,255,0.65)",
        }}
      >
        Report vulnerabilities. Earn rewards in ZEC.
      </div>
      <div
        style={{
          marginTop: 32,
          fontSize: 24,
          color: "#23F4B7",
          fontFamily: "monospace",
          letterSpacing: "0.1em",
        }}
      >
        bountyzcash.org
      </div>
    </div>,
    { ...size },
  );
}
