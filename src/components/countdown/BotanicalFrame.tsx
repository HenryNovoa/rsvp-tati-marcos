export function BotanicalFrame() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Top center foliage */}
      <div className="flex justify-center absolute -top-24 left-0 w-full">
        <img
          src="https://cdn.jsdelivr.net/gh/HenryNovoa/rsvp-images@main/logo.svg"
          alt=""
          className="w-32 h-32 object-cover"
        />
      </div>
      {/* Decorative frame */}
      <div className="absolute inset-8 border-2 border-[#8FA98F]/20 rounded-lg transform rotate-3" />
      <div className="absolute inset-8 border-2 border-[#8FA98F]/20 rounded-lg transform -rotate-3" />
    </div>
  );
}
