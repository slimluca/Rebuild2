import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(135deg, #050507 0%, #11112A 58%, #071827 100%)",
          border: "2px solid rgba(143, 183, 255, 0.68)",
          borderRadius: 16,
          boxShadow: "inset 0 0 18px rgba(124, 92, 255, 0.42)",
          color: "white",
          display: "flex",
          fontSize: 26,
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
            height: 4,
            left: 14,
            position: "absolute",
            right: 14,
            top: 15,
          }}
        />
        W
      </div>
    ),
    size,
  );
}
