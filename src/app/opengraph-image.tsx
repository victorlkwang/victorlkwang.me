import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#6b6b77",
            fontFamily: "monospace",
          }}
        >
          {site.domain}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              color: "#0f0f14",
              letterSpacing: "-3px",
            }}
          >
            {site.name}
          </div>
          <div style={{ fontSize: 40, color: "#6b6b77", marginTop: 12 }}>
            {site.role}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            height: 12,
            width: 260,
            borderRadius: 999,
            background: "linear-gradient(90deg, #7c3aed, #2563eb)",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
