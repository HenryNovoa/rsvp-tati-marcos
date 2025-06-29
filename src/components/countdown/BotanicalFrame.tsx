export function BotanicalFrame() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Top left foliage */}
      <img
        src="https://cdn.jsdelivr.net/gh/HenryNovoa/rsvp-images@main/logo.svg"
        alt=""
        className="absolute -top-28 right-32 w-32 h-32 object-cover transform"
      />
      {/* Decorative frame */}
      <div className="absolute inset-8 border-2 border-[#8FA98F]/20 rounded-lg transform rotate-3" />
      <div className="absolute inset-8 border-2 border-[#8FA98F]/20 rounded-lg transform -rotate-3" />
    </div>
  );
}
