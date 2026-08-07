import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: "#0f1f3d",
          backgroundImage:
            "radial-gradient(circle at 82% 18%, rgba(200,149,44,0.35), transparent 45%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 68,
              height: 68,
              borderRadius: 999,
              backgroundColor: "#faf7f0",
              color: "#0f1f3d",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            S
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "#ffffff", fontSize: 30, fontWeight: 700 }}>
              Summit GCSE
            </span>
            <span
              style={{
                color: "#c8952c",
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              OCR Economics
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <span
            style={{
              color: "#ffffff",
              fontSize: 62,
              fontWeight: 700,
              lineHeight: 1.12,
              maxWidth: 980,
            }}
          >
            Every OCR GCSE Economics topic, with real diagrams and model exam answers.
          </span>
          <span style={{ color: "rgba(250,247,240,0.75)", fontSize: 26, maxWidth: 820 }}>
            26 subtopics · demand/supply, AD/AS &amp; PPF diagrams · a full model answer on every page
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 44, height: 6, borderRadius: 999, backgroundColor: "#c8952c" }} />
          <span style={{ color: "rgba(250,247,240,0.6)", fontSize: 22 }}>
            summit-gcse-economics.vercel.app
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
