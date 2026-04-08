import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "US Meeting Oron";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Gradient blobs */}
        <div
          style={{
            position: "absolute",
            top: -100,
            left: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(168,85,247,0.25) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(249,115,22,0.2) 0%, transparent 70%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
            zIndex: 1,
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 999,
              padding: "8px 20px",
              color: "rgba(255,255,255,0.6)",
              fontSize: 18,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Oron-La-Ville · Suisse
          </div>

          {/* Title */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 0,
            }}
          >
            <span
              style={{
                fontSize: 96,
                fontWeight: 800,
                color: "white",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              US Meeting
            </span>
            <span
              style={{
                fontSize: 96,
                fontWeight: 800,
                lineHeight: 1,
                letterSpacing: "-0.02em",
                background: "linear-gradient(90deg, #a855f7, #f97316)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Oron
            </span>
          </div>

          {/* Subtitle */}
          <div
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: 24,
              marginTop: 8,
            }}
          >
            Rassemblement de véhicules américains · Premier week-end de septembre
          </div>
        </div>

        {/* Bottom line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(90deg, #a855f7, #f97316)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
