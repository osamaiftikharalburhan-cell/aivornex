export default function Robot({ size = 64, hue = "blue", withLegs = false, className = "" }) {
  const eyeGlow =
    hue === "purple"
      ? "shadow-[0_0_10px_3px_rgba(124,58,237,0.55)] bg-purple-500"
      : "shadow-[0_0_10px_3px_rgba(37,99,235,0.55)] bg-blue-500";

  return (
    <div
      className={`relative ${className}`}
      style={{ width: size, height: size * 1.15 }}
    >
      {/* antenna */}
      <div className="absolute left-1/2 top-0 h-4 w-[3px] -translate-x-1/2 -translate-y-full rounded-full bg-zinc-300" />
      <div
        className={`absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-[calc(100%+14px)] rounded-full ${eyeGlow}`}
      />

      {/* body */}
      <div className="relative h-full w-full rounded-[26%] border border-zinc-100 bg-white shadow-[0_25px_55px_-15px_rgba(0,0,0,0.2)]">
        <div className="absolute left-1/2 top-[30%] flex -translate-x-1/2 items-center gap-[16%]">
          <span
            className={`block rounded-full ${eyeGlow}`}
            style={{ width: size * 0.14, height: size * 0.14 }}
          />
          <span
            className="block rounded-full bg-purple-500 shadow-[0_0_10px_3px_rgba(124,58,237,0.55)]"
            style={{ width: size * 0.14, height: size * 0.14 }}
          />
        </div>
        <div
          className="absolute left-1/2 top-[52%] -translate-x-1/2 rounded-full bg-zinc-100"
          style={{ width: size * 0.4, height: size * 0.06 }}
        />
      </div>

      {/* arms */}
      <div
        className="absolute top-[40%] rounded-full bg-zinc-200"
        style={{ left: -size * 0.14, width: size * 0.22, height: size * 0.09 }}
      />
      <div
        className="absolute top-[40%] rounded-full bg-zinc-200"
        style={{ right: -size * 0.14, width: size * 0.22, height: size * 0.09 }}
      />

      {withLegs && (
        <>
          <div
            className="absolute -bottom-3 rounded-full bg-zinc-200"
            style={{ left: "22%", width: size * 0.12, height: size * 0.16 }}
          />
          <div
            className="absolute -bottom-3 rounded-full bg-zinc-200"
            style={{ right: "22%", width: size * 0.12, height: size * 0.16 }}
          />
        </>
      )}
    </div>
  );
}
