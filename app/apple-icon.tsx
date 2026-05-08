import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(135deg, #050507 0%, #11112A 58%, #071827 100%)",
          border: "6px solid rgba(143, 183, 255, 0.62)",
          borderRadius: 42,
          boxShadow: "inset 0 0 46px rgba(124, 92, 255, 0.42)",
          color: "white",
          display: "flex",
          fontSize: 72,
          fontWeight: 800,
          height: "100%",
          justifyContent: "center",
          letterSpacing: 0,
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "linear-gradient(90deg, #7C5CFF, #00ABFF)",
            borderRadius: 99,
            height: 10,
            left: 42,
            position: "absolute",
            right: 42,
            top: 42,
          }}
        />
        W
      </div>
    ),
    size,
  );
}
